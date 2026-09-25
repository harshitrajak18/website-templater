import type { SectionType, SectionMetadata } from "./type";

/**
 * A TemplateConfig ties together:
 *  - The section type it handles
 *  - The React component name for App.tsx imports
 *  - A modifier function that transforms section metadata into template data
 *  - The path to the Nunjucks template (relative to src/templates/)
 *  - The output path for the generated TSX (relative to dist/site/src/)
 */
export interface TemplateConfig {
  /** Which metadata section type this config handles */
  sectionType: SectionType;

  /** React component name (used for imports and JSX tags in App.tsx) */
  componentName: string;

  /** Transforms a raw section's metadata into the data object the Nunjucks template needs */
  modifier: (section: SectionMetadata) => Record<string, unknown>;

  /** Path to the .njk template file (relative to src/templates/) */
  templatePath: string;

  /** Where the generated .tsx file should be written (relative to dist/site/src/) */
  outputPath: string;
}
