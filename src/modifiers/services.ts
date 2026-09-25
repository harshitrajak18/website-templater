import type { ServicesMetadata } from "../type/type";

export function modifyServices(section: ServicesMetadata) {
  return {
    title: section.title || "Our Services",
    description: section.description || "",
    items: section.items.map((item) => ({
      icon: item.icon || "⭐",
      title: item.title,
      description: item.description,
    })),
  };
}
