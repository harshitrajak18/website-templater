import type { StatsMetadata } from "../type/type";

export function modifyStats(section: StatsMetadata) {
  return {
    title: section.title || "",
    description: section.description || "",
    items: section.items.map((item) => ({
      value: item.value,
      label: item.label,
    })),
  };
}
