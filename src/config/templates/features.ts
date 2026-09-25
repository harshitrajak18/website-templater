import type { TemplateConfig } from "../../type/template-config";
import type { FeaturesMetadata } from "../../type/type";
import { modifyFeatures } from "../../modifiers/features";

export const featuresConfig: TemplateConfig = {
  sectionType: "features",
  componentName: "Features",
  modifier: (section) => modifyFeatures(section as FeaturesMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Features.njk",
  outputPath: "components/Features.tsx",
};
