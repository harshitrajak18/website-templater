import type { TemplateConfig } from "../../type/template-config";
import type { FeatureGridMetadata } from "../../type/type";
import { modifyFeatureGrid } from "../../modifiers/featureGrid";

export const featureGridConfig: TemplateConfig = {
  sectionType: "featureGrid",
  modifier: (section) => modifyFeatureGrid(section as FeatureGridMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/FeatureGrid.njk",
};
