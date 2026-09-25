import type { HeroMetadata } from "../type/type";
import { resolveButton } from "../utils/routes";

export function modifyHero(section: HeroMetadata) {
  return {
    eyebrow: section.eyebrow || "",
    title: section.title,
    description: section.description || "",
    primaryButton: section.primaryButton ? resolveButton(section.primaryButton) : undefined,
    secondaryButton: section.secondaryButton ? resolveButton(section.secondaryButton) : undefined,
    image: section.image ? { src: section.image.src, alt: section.image.alt || "Hero image" } : undefined,
  };
}
