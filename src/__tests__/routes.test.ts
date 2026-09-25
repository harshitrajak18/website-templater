import {
  normalizePath,
  resolvePageHref,
  resolvePageOutputPath,
  resolveLink,
  resolveButton,
  getPageSlug,
  getComponentName,
  isValidPagePath,
} from "../utils/routes";

function assert(condition: boolean, message: string): boolean {
  if (!condition) {
    console.error(`  ❌ FAIL: ${message}`);
    return false;
  }
  console.log(`  ✅ PASS: ${message}`);
  return true;
}

function assertEquals(actual: any, expected: any, message: string): boolean {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  return assert(a === e, `${message} (expected ${e}, got ${a})`);
}

export function runRouteTests(): { passed: number; failed: number } {
  let passed = 0;
  let failed = 0;

  function test(name: string, actual: any, expected: any) {
    if (assertEquals(actual, expected, name)) passed++;
    else failed++;
  }
  function testBool(name: string, cond: boolean) {
    if (assert(cond, name)) passed++;
    else failed++;
  }

  // normalizePath
  test("normalizePath: '/' → '/'", normalizePath("/"), "/");
  test("normalizePath: '/about/' → '/about'", normalizePath("/about/"), "/about");
  test("normalizePath: 'about' → '/about'", normalizePath("about"), "/about");

  // resolvePageHref
  test("resolvePageHref: '/' → '/'", resolvePageHref("/"), "/");
  test("resolvePageHref: '/about' → '/about/'", resolvePageHref("/about"), "/about/");
  test("resolvePageHref: '/products/details' → '/products/details/'", resolvePageHref("/products/details"), "/products/details/");

  // resolvePageOutputPath
  test("resolvePageOutputPath: '/' → 'index.html'", resolvePageOutputPath("/"), "index.html");
  test("resolvePageOutputPath: '/about' → 'about/index.html'", resolvePageOutputPath("/about"), "about/index.html");
  test("resolvePageOutputPath: '/products/details' → 'products/details/index.html'", resolvePageOutputPath("/products/details"), "products/details/index.html");

  // resolveLink
  test("resolveLink with page", resolveLink({ label: "About", page: "/about" }), { label: "About", href: "/about/" });
  test("resolveLink with href", resolveLink({ label: "GitHub", href: "https://github.com" }), { label: "GitHub", href: "https://github.com" });

  // resolveButton
  test("resolveButton with page", resolveButton({ text: "Go", page: "/contact" }), { text: "Go", href: "/contact/" });

  // getPageSlug
  test("getPageSlug: '/' → 'Home'", getPageSlug("/"), "Home");
  test("getPageSlug: '/about' → 'About'", getPageSlug("/about"), "About");
  test("getPageSlug: '/products/details'", getPageSlug("/products/details"), "ProductsDetails");

  // getComponentName
  test("getComponentName", getComponentName("Home", "hero", 0), "HomeHero0");

  // isValidPagePath
  testBool("isValidPagePath: valid paths", isValidPagePath("/") && isValidPagePath("/about") && isValidPagePath("/a-b"));
  testBool("isValidPagePath: invalid paths", !isValidPagePath("") && !isValidPagePath("about") && !isValidPagePath("/has space"));

  return { passed, failed };
}
