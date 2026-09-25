import type { FeatureGridMetadata } from "../type/type";

export function modifyFeatureGrid(section: FeatureGridMetadata) {
  return {
    title: section.title || "Features",
    description: section.description || "",
    columns: section.columns || 3,
    items: section.items.map((item) => ({
      icon: item.icon || "⭐",
      title: item.title,
      description: item.description,
    })),
  };
}
