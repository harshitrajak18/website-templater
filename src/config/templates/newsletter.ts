import type { TemplateConfig } from "../../type/template-config";
import type { NewsletterMetadata } from "../../type/type";
import { modifyNewsletter } from "../../modifiers/newsletter";

export const newsletterConfig: TemplateConfig = {
  sectionType: "newsletter",
  modifier: (section) => modifyNewsletter(section as NewsletterMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Newsletter.njk",
};
