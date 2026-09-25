import type { SectionType, SectionMetadata } from "./type";

/**
 * A TemplateConfig ties together:
 *  - The section type it handles
 *  - A modifier that transforms section metadata into template-ready data
 *  - The path to the Nunjucks template (relative to src/templates/)
 *
 * componentName and outputPath are computed dynamically by the generator
 * for each section instance (to support multi-page with unique names).
 */
export interface TemplateConfig {
  /** Which metadata section type this config handles */
  sectionType: SectionType;

  /** Transforms raw section metadata into the data object the Nunjucks template needs */
  modifier: (section: SectionMetadata) => Record<string, unknown>;

  /** Path to the .njk template file (relative to src/templates/) */
  templatePath: string;
}
