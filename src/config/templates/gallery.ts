import type { TemplateConfig } from "../../type/template-config";
import type { GalleryMetadata } from "../../type/type";
import { modifyGallery } from "../../modifiers/gallery";

export const galleryConfig: TemplateConfig = {
  sectionType: "gallery",
  modifier: (section) => modifyGallery(section as GalleryMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Gallery.njk",
};
