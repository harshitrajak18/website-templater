import type { HeroMetadata } from "../type/type";

export interface HeroData {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  image?: { src: string; alt: string };
}

export function modifyHero(section: HeroMetadata): HeroData {
  const image =
    section.image?.enabled && section.image.src
      ? {
          src: section.image.src,
          alt: section.image.alt ?? "Hero image",
        }
      : undefined;

  return {
    eyebrow: section.eyebrow,
    title: section.title,
    description: section.description,
    primaryButton: section.primaryButton,
    secondaryButton: section.secondaryButton,
    image,
  };
}
