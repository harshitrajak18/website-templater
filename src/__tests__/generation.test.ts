import { templateRegistry } from "../config/templates";
import { VALID_SECTION_TYPES } from "../type/type";
import nunjucks from "nunjucks";
import path from "path";

function assert(condition: boolean, message: string): boolean {
  if (!condition) {
    console.error(`  ❌ FAIL: ${message}`);
    return false;
  }
  console.log(`  ✅ PASS: ${message}`);
  return true;
}

export async function runGenerationTests(): Promise<{ passed: number; failed: number }> {
  let passed = 0;
  let failed = 0;

  function test(name: string, condition: boolean) {
    if (assert(condition, name)) passed++;
    else failed++;
  }

  const allTypes = Array.from(VALID_SECTION_TYPES);

  // 1. templateRegistry has entries for all section types
  const hasAll = allTypes.every((t) => templateRegistry[t as keyof typeof templateRegistry] !== undefined);
  test("templateRegistry has entries for all 20 section types", hasAll);

  // 2. Every section type has a valid modifier function
  const hasModifiers = allTypes.every((t) => typeof templateRegistry[t as keyof typeof templateRegistry]?.modifier === "function");
  test("Every section type has a valid modifier function", hasModifiers);

  // 3. Every section type has a valid templatePath
  const hasPaths = allTypes.every((t) => {
    const p = templateRegistry[t as keyof typeof templateRegistry]?.templatePath;
    return typeof p === "string" && p.endsWith(".njk");
  });
  test("Every section type has a valid templatePath", hasPaths);

  // 4. Nunjucks can render each template without errors
  const templatesDir = path.resolve(__dirname, "..", "templates");
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(templatesDir),
    { autoescape: false, trimBlocks: true, lstripBlocks: true }
  );

  let allRendered = true;
  const renderErrors: string[] = [];
  for (const sectionType of allTypes) {
    const config = templateRegistry[sectionType as keyof typeof templateRegistry];
    if (!config) continue;
    try {
      // Provide minimal mock data for each template
      const mockData: Record<string, any> = {
        componentName: "TestComponent",
        name: "Test",
        title: "Test Title",
        description: "Test description",
        content: "Test content",
        eyebrow: "",
        tagline: "",
        copyright: "© 2026",
        items: [{ title: "Item", description: "Desc", icon: "⭐", value: "100", label: "Label", question: "Q?", answer: "A.", src: "https://example.com/img.png", alt: "img", name: "Logo", step: 1, quote: "Great", role: "Dev", company: "Co", platform: "github", url: "#" }],
        members: [{ name: "Alice", role: "CEO", image: "", bio: "", socialLinks: [] }],
        plans: [{ name: "Pro", price: "$10", description: "Good", billingPeriod: "month", features: ["A", "B"], highlighted: false, button: { text: "Buy", href: "#" } }],
        links: [{ label: "Home", href: "/" }],
        linkGroups: [{ heading: "Links", links: [{ label: "Home", href: "/" }] }],
        socialLinks: [{ platform: "github", url: "#", label: "GitHub" }],
        columns: 3,
        imagePosition: "right",
        image: { src: "https://example.com/img.png", alt: "test" },
        button: { text: "Click", href: "#" },
        primaryButton: { text: "Go", href: "#" },
        secondaryButton: { text: "Learn", href: "#" },
        logo: "",
        email: "test@test.com",
        phone: "123",
        address: "123 St",
        showForm: true,
        inputLabel: "Email",
        buttonText: "Subscribe",
        backgroundImage: "",
      };

      env.render(config.templatePath, mockData);
    } catch (e: any) {
      renderErrors.push(`${sectionType}: ${e.message || e}`);
      allRendered = false;
    }
  }
  if (renderErrors.length > 0) {
    console.error("    Template render errors:");
    renderErrors.forEach((e) => console.error(`      • ${e}`));
  }
  test("Nunjucks renders all templates without errors", allRendered);

  // 5. Registry count matches valid section types count
  test("Registry has exactly 20 entries", Object.keys(templateRegistry).length === 20);

  return { passed, failed };
}
