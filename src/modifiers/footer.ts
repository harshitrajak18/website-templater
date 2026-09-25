import type { FooterMetadata } from "../type/type";
import { resolveLink } from "../utils/routes";

export function modifyFooter(section: FooterMetadata) {
  return {
    name: section.name || "",
    tagline: section.tagline || "",
    linkGroups: (section.linkGroups || []).map((group) => ({
      heading: group.heading,
      links: group.links.map(resolveLink),
    })),
    socialLinks: (section.socialLinks || []).map((s) => ({
      platform: s.platform,
      url: s.url,
      label: s.label || s.platform,
    })),
    copyright: section.copyright || `© ${new Date().getFullYear()} All rights reserved.`,
  };
}
