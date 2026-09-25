import type { TemplateConfig } from "../../type/template-config";
import type { LogoCloudMetadata } from "../../type/type";
import { modifyLogoCloud } from "../../modifiers/logoCloud";

export const logoCloudConfig: TemplateConfig = {
  sectionType: "logoCloud",
  modifier: (section) => modifyLogoCloud(section as LogoCloudMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/LogoCloud.njk",
};
