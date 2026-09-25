import type { TemplateConfig } from "../../type/template-config";
import type { PricingMetadata } from "../../type/type";
import { modifyPricing } from "../../modifiers/pricing";

export const pricingConfig: TemplateConfig = {
  sectionType: "pricing",
  modifier: (section) => modifyPricing(section as PricingMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Pricing.njk",
};
