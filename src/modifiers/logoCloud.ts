import type { LogoCloudMetadata } from "../type/type";

export function modifyLogoCloud(section: LogoCloudMetadata) {
  return {
    title: section.title || "",
    items: section.items.map((item) => ({
      name: item.name,
      src: item.src,
      href: item.href || "",
    })),
  };
}
