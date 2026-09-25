import type { WebsiteMetadata } from "../type/type";
import { validateMetadata } from "../validation/validate";

function assert(condition: boolean, message: string): boolean {
  if (!condition) {
    console.error(`  ❌ FAIL: ${message}`);
    return false;
  }
  console.log(`  ✅ PASS: ${message}`);
  return true;
}

export function runValidationTests(): { passed: number; failed: number } {
  let passed = 0;
  let failed = 0;

  function runTest(name: string, condition: boolean) {
    if (assert(condition, name)) passed++;
    else failed++;
  }

  // 1. Valid metadata returns no errors
  const valid: WebsiteMetadata = {
    site: { name: "Test Site" },
    pages: [{ name: "Home", path: "/", sections: [] }],
  };
  runTest("Valid metadata returns no errors", validateMetadata(valid).length === 0);

  // 2. Missing site.name returns error
  const missingSiteName: any = {
    site: { name: "" },
    pages: [{ name: "Home", path: "/", sections: [] }],
  };
  runTest("Missing site.name returns error", validateMetadata(missingSiteName).length > 0);

  // 3. Empty pages array returns error
  const emptyPages: any = {
    site: { name: "Test" },
    pages: [],
  };
  runTest("Empty pages array returns error", validateMetadata(emptyPages).length > 0);

  // 4. Duplicate page paths return error
  const duplicatePaths: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [
      { name: "Home", path: "/", sections: [] },
      { name: "Home2", path: "/", sections: [] },
    ],
  };
  runTest("Duplicate page paths return error", validateMetadata(duplicatePaths).length > 0);

  // 5. Invalid page path returns error
  const invalidPath: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [{ name: "Bad", path: "no-slash", sections: [] }],
  };
  runTest("Invalid page path (no leading slash) returns error", validateMetadata(invalidPath).length > 0);

  // 6. Missing page name returns error
  const missingPageName: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [{ name: "", path: "/", sections: [] }],
  };
  runTest("Missing page name returns error", validateMetadata(missingPageName).length > 0);

  // 7. Unsupported section type returns error
  const badSection: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [{ name: "Home", path: "/", sections: [{ type: "somethingUnknown" } as any] }],
  };
  runTest("Unsupported section type returns error", validateMetadata(badSection).length > 0);

  // 8. Missing required section fields (hero without title)
  const heroNoTitle: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [{ name: "Home", path: "/", sections: [{ type: "hero" } as any] }],
  };
  runTest("Missing required section fields (hero without title) returns error", validateMetadata(heroNoTitle).length > 0);

  // 9. Invalid internal link (CTA button links to non-existent page)
  const badLink: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [{
      name: "Home",
      path: "/",
      sections: [{
        type: "cta",
        title: "Click",
        primaryButton: { text: "Go", page: "/nonexistent" },
      }],
    }],
  };
  runTest("Invalid internal link (link to non-existent page) returns error", validateMetadata(badLink).length > 0);

  // 10. Valid multi-page metadata with various sections passes
  const validMultiPage: WebsiteMetadata = {
    site: { name: "Test" },
    pages: [
      {
        name: "Home",
        path: "/",
        sections: [
          { type: "hero", title: "Welcome" },
          { type: "features", items: [{ title: "Fast", description: "Very fast" }] },
        ],
      },
      {
        name: "About",
        path: "/about",
        sections: [
          { type: "hero", title: "About Us" },
          { type: "cta", title: "Join", primaryButton: { text: "Home", page: "/" } },
        ],
      },
    ],
  };
  runTest("Valid multi-page metadata with various sections passes", validateMetadata(validMultiPage).length === 0);

  return { passed, failed };
}
