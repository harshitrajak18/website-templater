import type { SocialLinksMetadata } from "../type/type";

export function modifySocialLinks(section: SocialLinksMetadata) {
  return {
    title: section.title || "",
    items: section.items.map((item) => ({
      platform: item.platform,
      url: item.url,
      label: item.label || item.platform,
    })),
  };
}
