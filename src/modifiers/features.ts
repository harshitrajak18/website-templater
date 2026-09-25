import type { FeaturesMetadata } from "../type/type";

export function modifyFeatures(section: FeaturesMetadata) {
  return {
    eyebrow: section.eyebrow || "",
    title: section.title || "Features",
    description: section.description || "",
    items: section.items.map((item) => ({
      icon: item.icon || "⭐",
      title: item.title,
      description: item.description,
    })),
  };
}
