import type { TemplateConfig } from "../../type/template-config";
import type { CTAMetadata } from "../../type/type";
import { modifyCTA } from "../../modifiers/cta";

export const ctaConfig: TemplateConfig = {
  sectionType: "cta",
  modifier: (section) => modifyCTA(section as CTAMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/CTA.njk",
};
