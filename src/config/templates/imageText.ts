import type { TemplateConfig } from "../../type/template-config";
import type { ImageTextMetadata } from "../../type/type";
import { modifyImageText } from "../../modifiers/imageText";

export const imageTextConfig: TemplateConfig = {
  sectionType: "imageText",
  modifier: (section) => modifyImageText(section as ImageTextMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/ImageText.njk",
};
