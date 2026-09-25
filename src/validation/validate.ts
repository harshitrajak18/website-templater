// ============================================================
// src/validation/validate.ts
// Validates WebsiteMetadata and returns clear error messages.
// ============================================================

import type { WebsiteMetadata, SectionMetadata, PageMetadata } from "../type/type";
import { VALID_SECTION_TYPES } from "../type/type";
import { normalizePath, isValidPagePath } from "../utils/routes";

export interface ValidationError {
  message: string;
  path?: string;
}

// ── Section-specific validation ─────────────────────────────

function validateSection(
  section: SectionMetadata,
  pagePath: string,
  allPaths: Set<string>,
  errors: ValidationError[]
): void {
  switch (section.type) {
    case "hero":
      if (!section.title) {
        errors.push({ message: `Hero section is missing required field "title"`, path: pagePath });
      }
      break;

    case "features":
      if (!section.items?.length) {
        errors.push({ message: `Features section requires at least one item`, path: pagePath });
      }
      break;

    case "featureGrid":
      if (!section.items?.length) {
        errors.push({ message: `FeatureGrid section requires at least one item`, path: pagePath });
      }
      break;

    case "testimonials":
      if (!section.items?.length) {
        errors.push({ message: `Testimonials section requires at least one item`, path: pagePath });
      }
      break;

    case "cta":
      if (!section.title) {
        errors.push({ message: `CTA section is missing required field "title"`, path: pagePath });
      }
      break;

    case "pricing":
      if (!section.plans?.length) {
        errors.push({ message: `Pricing section requires at least one plan`, path: pagePath });
      }
      break;

    case "faq":
      if (!section.items?.length) {
        errors.push({ message: `FAQ section requires at least one item`, path: pagePath });
      }
      break;

    case "stats":
      if (!section.items?.length) {
        errors.push({ message: `Stats section requires at least one item`, path: pagePath });
      }
      break;

    case "logoCloud":
      if (!section.items?.length) {
        errors.push({ message: `LogoCloud section requires at least one item`, path: pagePath });
      }
      break;

    case "team":
      if (!section.members?.length) {
        errors.push({ message: `Team section requires at least one member`, path: pagePath });
      }
      break;

    case "richText":
      if (!section.content) {
        errors.push({ message: `RichText section is missing required field "content"`, path: pagePath });
      }
      break;

    case "imageText":
      if (!section.title) {
        errors.push({ message: `ImageText section is missing required field "title"`, path: pagePath });
      }
      if (!section.image?.src) {
        errors.push({ message: `ImageText section is missing required image src`, path: pagePath });
      }
      break;

    case "services":
      if (!section.items?.length) {
        errors.push({ message: `Services section requires at least one item`, path: pagePath });
      }
      break;

    case "steps":
      if (!section.items?.length) {
        errors.push({ message: `Steps section requires at least one item`, path: pagePath });
      }
      break;

    case "gallery":
      if (!section.items?.length) {
        errors.push({ message: `Gallery section requires at least one item`, path: pagePath });
      }
      break;

    case "socialLinks":
      if (!section.items?.length) {
        errors.push({ message: `SocialLinks section requires at least one item`, path: pagePath });
      }
      break;
  }

  // Validate internal link references
  validateSectionLinks(section, pagePath, allPaths, errors);
}

// ── Internal link validation ────────────────────────────────

function validateSectionLinks(
  section: SectionMetadata,
  pagePath: string,
  allPaths: Set<string>,
  errors: ValidationError[]
): void {
  const checkLink = (linkPage: string | undefined, context: string) => {
    if (linkPage) {
      const normalized = normalizePath(linkPage);
      if (!allPaths.has(normalized)) {
        errors.push({
          message: `${context}: internal link to "${linkPage}" references a page that does not exist`,
          path: pagePath,
        });
      }
    }
  };

  if (section.type === "navbar") {
    section.links?.forEach((link, i) => checkLink(link.page, `Navbar link[${i}]`));
    checkLink(section.button?.page, "Navbar button");
  }

  if (section.type === "hero") {
    checkLink(section.primaryButton?.page, "Hero primaryButton");
    checkLink(section.secondaryButton?.page, "Hero secondaryButton");
  }

  if (section.type === "cta") {
    checkLink(section.primaryButton?.page, "CTA primaryButton");
    checkLink(section.secondaryButton?.page, "CTA secondaryButton");
  }

  if (section.type === "pricing") {
    section.plans?.forEach((plan, i) =>
      checkLink(plan.button?.page, `Pricing plan[${i}] button`)
    );
  }

  if (section.type === "imageText") {
    checkLink(section.button?.page, "ImageText button");
  }

  if (section.type === "footer") {
    section.linkGroups?.forEach((group, gi) =>
      group.links?.forEach((link, li) =>
        checkLink(link.page, `Footer linkGroup[${gi}].link[${li}]`)
      )
    );
  }
}

// ── Main validation function ────────────────────────────────

export function validateMetadata(metadata: WebsiteMetadata): ValidationError[] {
  const errors: ValidationError[] = [];

  // ── Site validation ──
  if (!metadata.site) {
    errors.push({ message: "Missing required field: site" });
    return errors; // can't continue without site
  }
  if (!metadata.site.name) {
    errors.push({ message: "Site name is required (site.name)" });
  }

  // ── Pages validation ──
  if (!metadata.pages || !Array.isArray(metadata.pages) || metadata.pages.length === 0) {
    errors.push({ message: "At least one page is required (pages[])" });
    return errors;
  }

  // Collect all normalized paths for internal link validation
  const allPaths = new Set<string>();
  const pathSet = new Set<string>();

  for (const page of metadata.pages) {
    if (!page.path) {
      errors.push({ message: `Page is missing required field "path"` });
      continue;
    }

    if (!isValidPagePath(page.path)) {
      errors.push({
        message: `Invalid page path "${page.path}" — must start with "/" and contain only alphanumeric, hyphens, and underscores`,
        path: page.path,
      });
    }

    const normalized = normalizePath(page.path);
    if (pathSet.has(normalized)) {
      errors.push({
        message: `Duplicate route "${page.path}"`,
        path: page.path,
      });
    }
    pathSet.add(normalized);
    allPaths.add(normalized);

    if (!page.name) {
      errors.push({
        message: `Page at "${page.path}" is missing required field "name"`,
        path: page.path,
      });
    }
  }

  // ── Section validation (per page) ──
  for (const page of metadata.pages) {
    if (!page.sections || !Array.isArray(page.sections)) {
      continue; // pages can have zero sections (e.g., only global navbar+footer)
    }
    for (const section of page.sections) {
      if (!section.type) {
        errors.push({
          message: `Section is missing required field "type"`,
          path: page.path,
        });
        continue;
      }
      if (!VALID_SECTION_TYPES.has(section.type)) {
        errors.push({
          message: `Unsupported section type: "${section.type}"`,
          path: page.path,
        });
        continue;
      }
      validateSection(section, page.path, allPaths, errors);
    }
  }

  // ── Global navbar/footer link validation ──
  if (metadata.site.navbar) {
    const navSection = { ...metadata.site.navbar, type: "navbar" as const };
    validateSectionLinks(navSection, "(global navbar)", allPaths, errors);
  }
  if (metadata.site.footer) {
    const footerSection = { ...metadata.site.footer, type: "footer" as const };
    validateSectionLinks(footerSection, "(global footer)", allPaths, errors);
  }

  return errors;
}
