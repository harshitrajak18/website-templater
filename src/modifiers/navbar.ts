import type { NavbarMetadata } from "../type/type";
import { resolveLink, resolveButton } from "../utils/routes";

export function modifyNavbar(section: NavbarMetadata) {
  return {
    name: section.name || "",
    logo: section.logo || "",
    links: (section.links || []).map(resolveLink),
    button: section.button ? resolveButton(section.button) : undefined,
  };
}
