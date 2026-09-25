import type { TemplateConfig } from "../../type/template-config";
import type { RichTextMetadata } from "../../type/type";
import { modifyRichText } from "../../modifiers/richText";

export const richTextConfig: TemplateConfig = {
  sectionType: "richText",
  modifier: (section) => modifyRichText(section as RichTextMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/RichText.njk",
};
