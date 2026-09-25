import type { CTAMetadata } from "../type/type";
import { resolveButton } from "../utils/routes";

export function modifyCTA(section: CTAMetadata) {
  return {
    title: section.title,
    description: section.description || "",
    primaryButton: section.primaryButton ? resolveButton(section.primaryButton) : undefined,
    secondaryButton: section.secondaryButton ? resolveButton(section.secondaryButton) : undefined,
    backgroundImage: section.backgroundImage || "",
  };
}
