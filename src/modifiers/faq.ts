import type { FAQMetadata } from "../type/type";

export function modifyFAQ(section: FAQMetadata) {
  return {
    title: section.title || "Frequently Asked Questions",
    description: section.description || "",
    items: section.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  };
}
