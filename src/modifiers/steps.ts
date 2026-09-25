import type { StepsMetadata } from "../type/type";

export function modifySteps(section: StepsMetadata) {
  return {
    title: section.title || "How It Works",
    description: section.description || "",
    items: section.items.map((item) => ({
      step: item.step,
      title: item.title,
      description: item.description,
    })),
  };
}
