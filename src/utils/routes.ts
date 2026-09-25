// ============================================================
// src/utils/routes.ts
// Route/path utilities for multi-page static site generation.
// Converts logical page routes into filesystem paths and URLs.
// ============================================================

import type { LinkItem, ButtonItem, ResolvedLink, ResolvedButton } from "../type/type";

/**
 * Normalize a page path: ensure leading slash, remove trailing slash (except root).
 *   "/about/"  → "/about"
 *   "about"    → "/about"
 *   "/"        → "/"
 */
export function normalizePath(pagePath: string): string {
  let p = pagePath.trim();
  if (!p.startsWith("/")) p = "/" + p;
  if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

/**
 * Convert a page path to the static output file path (relative to dist root).
 *   "/"                 → "index.html"
 *   "/about"            → "about/index.html"
 *   "/products/details" → "products/details/index.html"
 */
export function resolvePageOutputPath(pagePath: string): string {
  const normalized = normalizePath(pagePath);
  if (normalized === "/") return "index.html";
  const segments = normalized.split("/").filter(Boolean);
  return [...segments, "index.html"].join("/");
}

/**
 * Convert a page path to a navigable href (absolute, trailing slash for dirs).
 *   "/"      → "/"
 *   "/about" → "/about/"
 */
export function resolvePageHref(pagePath: string): string {
  const normalized = normalizePath(pagePath);
  if (normalized === "/") return "/";
  return normalized + "/";
}

/**
 * Resolve a LinkItem (internal page or external href) into a ResolvedLink.
 */
export function resolveLink(link: LinkItem): ResolvedLink {
  return {
    label: link.label,
    href: link.page ? resolvePageHref(link.page) : (link.href || "#"),
  };
}

/**
 * Resolve a ButtonItem (internal page or external href) into a ResolvedButton.
 */
export function resolveButton(button: ButtonItem): ResolvedButton {
  return {
    text: button.text,
    href: button.page ? resolvePageHref(button.page) : (button.href || "#"),
  };
}

/**
 * Derive a PascalCase page slug from a path.
 *   "/"                 → "Home"
 *   "/about"            → "About"
 *   "/products/details" → "ProductsDetails"
 */
export function getPageSlug(pagePath: string): string {
  const normalized = normalizePath(pagePath);
  if (normalized === "/") return "Home";
  return normalized
    .split("/")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join("");
}

/**
 * Build a unique React component name for a section instance.
 *   ("Home", "hero", 0) → "HomeHero0"
 *   ("About", "imageText", 2) → "AboutImagetext2"
 */
export function getComponentName(
  pageSlug: string,
  sectionType: string,
  index: number
): string {
  const typePascal =
    sectionType.charAt(0).toUpperCase() + sectionType.slice(1);
  return `${pageSlug}${typePascal}${index}`;
}

/**
 * Validate that a path is safe for the filesystem — no special characters,
 * no path traversal, no empty segments.
 */
export function isValidPagePath(pagePath: string): boolean {
  if (!pagePath || !pagePath.startsWith("/")) return false;
  if (pagePath === "/") return true;
  const segments = pagePath.split("/").filter(Boolean);
  if (segments.length === 0) return false;
  for (const seg of segments) {
    // No path traversal, no special chars
    if (seg === "." || seg === "..") return false;
    if (!/^[a-zA-Z0-9_-]+$/.test(seg)) return false;
  }
  return true;
}
