import type { TemplateConfig } from "../../type/template-config";
import type { TestimonialsMetadata } from "../../type/type";
import { modifyTestimonials } from "../../modifiers/testimonials";

export const testimonialsConfig: TemplateConfig = {
  sectionType: "testimonials",
  componentName: "Testimonials",
  modifier: (section) => modifyTestimonials(section as TestimonialsMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Testimonials.njk",
  outputPath: "components/Testimonials.tsx",
};
