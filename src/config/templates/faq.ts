import type { TemplateConfig } from "../../type/template-config";
import type { FAQMetadata } from "../../type/type";
import { modifyFAQ } from "../../modifiers/faq";

export const faqConfig: TemplateConfig = {
  sectionType: "faq",
  modifier: (section) => modifyFAQ(section as FAQMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/FAQ.njk",
};
