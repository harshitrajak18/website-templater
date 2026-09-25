import type { TestimonialsMetadata, TestimonialItem } from "../type/type";

export interface TestimonialsData {
  title?: string;
  description?: string;
  items: TestimonialItem[];
}

export function modifyTestimonials(section: TestimonialsMetadata): TestimonialsData {
  return {
    title: section.title,
    description: section.description,
    items: section.items,
  };
}
