import type { FooterMetadata, FooterLinkGroup } from "../type/type";

export interface FooterData {
  name: string;
  tagline?: string;
  linkGroups: FooterLinkGroup[];
  copyright?: string;
}

export function modifyFooter(section: FooterMetadata): FooterData {
  return {
    name: section.name,
    tagline: section.tagline,
    linkGroups: section.linkGroups ?? [],
    copyright: section.copyright,
  };
}
