import type { ImageTextMetadata } from "../type/type";
import { resolveButton } from "../utils/routes";

export function modifyImageText(section: ImageTextMetadata) {
  return {
    title: section.title,
    description: section.description || "",
    image: {
      src: section.image.src,
      alt: section.image.alt || section.title,
    },
    imagePosition: section.imagePosition || "right",
    button: section.button ? resolveButton(section.button) : undefined,
  };
}
