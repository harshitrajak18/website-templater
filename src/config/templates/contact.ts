import type { TemplateConfig } from "../../type/template-config";
import type { ContactMetadata } from "../../type/type";
import { modifyContact } from "../../modifiers/contact";

export const contactConfig: TemplateConfig = {
  sectionType: "contact",
  modifier: (section) => modifyContact(section as ContactMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Contact.njk",
};
