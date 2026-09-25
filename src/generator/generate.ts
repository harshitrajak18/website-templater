import * as fs from "fs";
import * as path from "path";
import nunjucks from "nunjucks";
import { metadata } from "../../metadata";
import { templateRegistry } from "../config/templates";
import { validateMetadata } from "../validation/validate";
import {
  getPageSlug,
  getComponentName,
  resolvePageOutputPath,
} from "../utils/routes";
import type { SectionMetadata, SectionType } from "../type/type";

// ============================================================
// Paths
// ============================================================
const PROJECT_ROOT = path.resolve(__dirname, "../..");
const TEMPLATES_DIR = path.join(PROJECT_ROOT, "src/templates");
const DIST_SITE = path.join(PROJECT_ROOT, "dist/site");
const DIST_SRC = path.join(DIST_SITE, "src");

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
// Step 1 — Validate metadata
// ============================================================
function validate(): void {
  const errors = validateMetadata(metadata);
  if (errors.length > 0) {
    console.error("\n❌ Metadata validation failed:\n");
    for (const err of errors) {
      const loc = err.path ? ` (at ${err.path})` : "";
      console.error(`  • ${err.message}${loc}`);
    }
    process.exit(1);
  }
  console.log("✓ Metadata validated successfully");
}

// ============================================================
// Step 2 — Scaffold the generated Vite/React project
// ============================================================
function scaffoldProject(): void {
  console.log("\n📁 Scaffolding Vite/React project...");

  writeFile(
    path.join(DIST_SITE, "package.json"),
    JSON.stringify(
      {
        name: "generated-site",
        private: true,
        type: "module",
        scripts: {
          dev: "vite",
          build: "vite build",
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

  writeFile(
    path.join(DIST_SITE, "tailwind.config.js"),
    `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
`
  );

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

  writeFile(
    path.join(DIST_SRC, "index.css"),
    `@tailwind base;
@tailwind components;
@tailwind utilities;
`
  );
}

// ============================================================
// Step 3 — Generate pages
// ============================================================
function generatePages(env: nunjucks.Environment): Record<string, string> {
  console.log("\n⚙️  Generating pages...");

  const site = metadata.site;
  const htmlEntries: Record<string, string> = {};

  for (const page of metadata.pages) {
    const pageSlug = getPageSlug(page.path);
    console.log(`\n  📄 Page: ${page.name} (${page.path}) → ${pageSlug}`);

    // Build full section list with global navbar/footer injection
    const sections: SectionMetadata[] = [];

    // Prepend global navbar if page doesn't have one
    if (site.navbar && !page.sections.some((s) => s.type === "navbar")) {
      sections.push({
        type: "navbar",
        name: site.navbar.name || site.name,
        logo: site.navbar.logo,
        links: site.navbar.links,
        button: site.navbar.button,
      });
    }

    // Page sections
    sections.push(...page.sections);

    // Append global footer if page doesn't have one
    if (site.footer && !page.sections.some((s) => s.type === "footer")) {
      sections.push({
        type: "footer",
        name: site.footer.name || site.name,
        tagline: site.footer.tagline,
        linkGroups: site.footer.linkGroups,
        socialLinks: site.footer.socialLinks,
        copyright: site.footer.copyright,
      });
    }

    // Generate each section component
    const pageComponents: Array<{ componentName: string }> = [];

    sections.forEach((section, index) => {
      const config = templateRegistry[section.type as SectionType];
      if (!config) {
        console.warn(`    ⚠ No template config for section type "${section.type}" — skipping`);
        return;
      }

      const componentName = getComponentName(pageSlug, section.type, index);

      // Run modifier
      const data = config.modifier(section) as Record<string, unknown>;
      data.componentName = componentName;

      // Render Nunjucks template → TSX
      const tsx = env.render(config.templatePath, data);
      writeFile(path.join(DIST_SRC, "components", `${componentName}.tsx`), tsx);

      pageComponents.push({ componentName });
    });

    // Generate page component
    const pageTsx = env.render("app/Page.njk", {
      pageName: pageSlug,
      sections: pageComponents,
    });
    writeFile(path.join(DIST_SRC, "pages", `${pageSlug}Page.tsx`), pageTsx);

    // Generate entry file
    const entryTsx = env.render("app/entry.njk", { pageName: pageSlug });
    writeFile(path.join(DIST_SRC, "entries", `${pageSlug}.tsx`), entryTsx);

    // Generate HTML file
    const outputPath = resolvePageOutputPath(page.path);
    const pageTitle = page.title || `${page.name} | ${site.name}`;
    const pageDesc = page.description || site.description || "";

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/entries/${pageSlug}.tsx"></script>
  </body>
</html>
`;
    writeFile(path.join(DIST_SITE, outputPath), html);

    // Track for Vite MPA config
    htmlEntries[pageSlug.toLowerCase()] = outputPath;
  }

  // Generate route-aware App.tsx and main.tsx
  console.log("\n⚛️  Generating route-aware React App.tsx and main.tsx...");
  const pageEntries = metadata.pages.map((p) => ({
    path: p.path,
    pageSlug: getPageSlug(p.path),
  }));
  const homePage = metadata.pages.find((p) => p.path === "/") || metadata.pages[0];
  const appTsx = env.render("app/App.njk", {
    pages: pageEntries,
    homePageSlug: getPageSlug(homePage.path),
  });
  writeFile(path.join(DIST_SRC, "App.tsx"), appTsx);

  const mainTsx = env.render("app/main.njk", {});
  writeFile(path.join(DIST_SRC, "main.tsx"), mainTsx);

  return htmlEntries;
}

// ============================================================
// Step 4 — Generate Vite config with MPA inputs
// ============================================================
function generateViteConfig(htmlEntries: Record<string, string>): void {
  console.log("\n🔧 Generating vite.config.ts...");

  const inputLines = Object.entries(htmlEntries)
    .map(([key, val]) => `        ${key}: resolve(__dirname, "${val}"),`)
    .join("\n");

  const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
${inputLines}
      },
    },
  },
});
`;

  writeFile(path.join(DIST_SITE, "vite.config.ts"), viteConfig);
}

// ============================================================
// Main
// ============================================================
function main(): void {
  console.log("🚀 Website Templater v2 — Multi-Page Generator");
  console.log(`   ${metadata.pages.length} page(s) to generate\n`);

  // Validate
  validate();

  // Clean previous output (preserving node_modules)
  if (fs.existsSync(DIST_SITE)) {
    for (const item of fs.readdirSync(DIST_SITE)) {
      if (item === "node_modules" || item === "package-lock.json") continue;
      fs.rmSync(path.join(DIST_SITE, item), { recursive: true, force: true });
    }
  } else {
    fs.mkdirSync(DIST_SITE, { recursive: true });
  }

  // Configure Nunjucks
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(TEMPLATES_DIR),
    { autoescape: false, trimBlocks: true, lstripBlocks: true }
  );

  // Build
  scaffoldProject();
  const htmlEntries = generatePages(env);
  generateViteConfig(htmlEntries);

  console.log("\n✅ Generation complete!");
  console.log(`   Output: ${DIST_SITE}`);
  console.log("   Next steps:");
  console.log("     cd dist/site && npm install && npm run dev");
}

main();
