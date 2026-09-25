import type { NewsletterMetadata } from "../type/type";

export function modifyNewsletter(section: NewsletterMetadata) {
  return {
    title: section.title || "Stay Updated",
    description: section.description || "",
    inputLabel: section.inputLabel || "Email address",
    buttonText: section.buttonText || "Subscribe",
  };
}
