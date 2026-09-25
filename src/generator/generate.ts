import * as fs from "fs";
import * as path from "path";
import * as nunjucks from "nunjucks";
import { metadata } from "../../metadata";
import { templateRegistry } from "../config/templates";
import type { SectionType } from "../type/type";

// ============================================================
// Paths
// ============================================================
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TEMPLATES_DIR = path.join(PROJECT_ROOT, "src/templates");
const DIST_SITE = path.join(PROJECT_ROOT, "dist/site");
const DIST_SRC = path.join(DIST_SITE, "src");
const DIST_COMPONENTS = path.join(DIST_SRC, "components");

// ============================================================
// Nunjucks environment — autoescape OFF (we are generating TSX)
// ============================================================
const env = nunjucks.configure(TEMPLATES_DIR, {
  autoescape: false,
  trimBlocks: true,
  lstripBlocks: true,
});

// ============================================================
// Helpers
// ============================================================
function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath: string, content: string): void {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  ✓ ${path.relative(DIST_SITE, filePath)}`);
}

// ============================================================
// Step 1: Scaffold the Vite/React project
// ============================================================
function scaffoldProject(): void {
  console.log("\n📁 Scaffolding Vite/React project...");

  // package.json
  writeFile(
    path.join(DIST_SITE, "package.json"),
    JSON.stringify(
      {
        name: "generated-site",
        private: true,
        type: "module",
        scripts: {
          dev: "vite",
          build: "tsc -b && vite build",
          preview: "vite preview",
        },
        dependencies: {
          react: "^18.3.1",
          "react-dom": "^18.3.1",
        },
        devDependencies: {
          "@types/react": "^18.3.3",
          "@types/react-dom": "^18.3.0",
          "@vitejs/plugin-react": "^4.3.1",
          autoprefixer: "^10.4.19",
          postcss: "^8.4.38",
          tailwindcss: "^3.4.4",
          typescript: "^5.5.0",
          vite: "^5.3.0",
        },
      },
      null,
      2
    )
  );

  // vite.config.ts
  writeFile(
    path.join(DIST_SITE, "vite.config.ts"),
    `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`
  );

  // tailwind.config.js
  writeFile(
    path.join(DIST_SITE, "tailwind.config.js"),
    `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
`
  );

  // postcss.config.js
  writeFile(
    path.join(DIST_SITE, "postcss.config.js"),
    `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`
  );

  // tsconfig.json for the generated site
  writeFile(
    path.join(DIST_SITE, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2020",
          useDefineForClassFields: true,
          lib: ["ES2020", "DOM", "DOM.Iterable"],
          module: "ESNext",
          skipLibCheck: true,
          moduleResolution: "bundler",
          allowImportingTsExtensions: true,
          isolatedModules: true,
          moduleDetection: "force",
          noEmit: true,
          jsx: "react-jsx",
          strict: true,
        },
        include: ["src"],
      },
      null,
      2
    )
  );

  // index.html
  writeFile(
    path.join(DIST_SITE, "index.html"),
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generated Site</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  );

  // src/index.css — Tailwind directives
  writeFile(
    path.join(DIST_SRC, "index.css"),
    `@tailwind base;
@tailwind components;
@tailwind utilities;
`
  );
}

// ============================================================
// Step 2: Generate component TSX files
// ============================================================
function generateComponents(): string[] {
  console.log("\n⚙️  Generating components...");

  const generatedComponents: string[] = [];

  for (const section of metadata.sections) {
    const config = templateRegistry[section.type as SectionType];
    if (!config) {
      console.warn(`  ⚠ No template config for section type "${section.type}" — skipping`);
      continue;
    }

    // Modifier: transform raw metadata → template data
    const data = config.modifier(section);

    // Nunjucks: render template with data → TSX source code
    const tsx = env.render(config.templatePath, data);

    // Write the generated TSX file
    writeFile(path.join(DIST_SRC, config.outputPath), tsx);

    generatedComponents.push(config.componentName);
  }

  return generatedComponents;
}

// ============================================================
// Step 3: Generate App.tsx and main.tsx
// ============================================================
function generateApp(componentNames: string[]): void {
  console.log("\n🏗️  Generating App.tsx and main.tsx...");

  const sections = componentNames.map((name) => ({ component: name }));

  // App.tsx
  const appTsx = env.render("app/App.njk", { sections });
  writeFile(path.join(DIST_SRC, "App.tsx"), appTsx);

  // main.tsx
  const mainTsx = env.render("app/main.njk", {});
  writeFile(path.join(DIST_SRC, "main.tsx"), mainTsx);
}

// ============================================================
// Main
// ============================================================
function main(): void {
  console.log("🚀 Website Templater — Generate");
  console.log(`   Metadata: ${metadata.sections.length} section(s)`);

  // Clean previous output
  if (fs.existsSync(DIST_SITE)) {
    fs.rmSync(DIST_SITE, { recursive: true });
  }

  scaffoldProject();
  const components = generateComponents();
  generateApp(components);

  console.log("\n✅ Generation complete!");
  console.log(`   Output: ${DIST_SITE}`);
  console.log(`   Components: ${components.join(", ")}`);
  console.log("\n   Next steps:");
  console.log("     cd dist/site && npm install && npm run dev");
}

main();
