import type { SectionType } from "../../type/type";
import type { TemplateConfig } from "../../type/template-config";

import { navbarConfig } from "./navbar";
import { heroConfig } from "./hero";
import { testimonialsConfig } from "./testimonials";
import { featuresConfig } from "./features";
import { footerConfig } from "./footer";

/**
 * Registry mapping each SectionType to its TemplateConfig.
 * The generator iterates over metadata sections and looks up configs here.
 */
export const templateRegistry: Record<SectionType, TemplateConfig> = {
  navbar: navbarConfig,
  hero: heroConfig,
  testimonials: testimonialsConfig,
  features: featuresConfig,
  footer: footerConfig,
};
