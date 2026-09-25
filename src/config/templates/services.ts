import type { TemplateConfig } from "../../type/template-config";
import type { ServicesMetadata } from "../../type/type";
import { modifyServices } from "../../modifiers/services";

export const servicesConfig: TemplateConfig = {
  sectionType: "services",
  modifier: (section) => modifyServices(section as ServicesMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Services.njk",
};
