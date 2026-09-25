import type { TestimonialsMetadata } from "../type/type";

export function modifyTestimonials(section: TestimonialsMetadata) {
  return {
    title: section.title || "Testimonials",
    description: section.description || "",
    items: section.items.map((item) => ({
      quote: item.quote,
      name: item.name,
      role: item.role || "",
      company: item.company || "",
      avatar: item.avatar || "",
    })),
  };
}
