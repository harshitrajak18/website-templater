import type { GalleryMetadata } from "../type/type";

export function modifyGallery(section: GalleryMetadata) {
  return {
    title: section.title || "",
    description: section.description || "",
    items: section.items.map((item) => ({
      src: item.src,
      alt: item.alt || "",
      title: item.title || "",
      description: item.description || "",
    })),
  };
}
