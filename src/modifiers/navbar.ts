import type { NavbarMetadata } from "../type/type";

export interface NavbarData {
  name: string;
  button?: {
    text: string;
    href: string;
  };
}

export function modifyNavbar(section: NavbarMetadata): NavbarData {
  return {
    name: section.name,
    button: section.button,
  };
}
