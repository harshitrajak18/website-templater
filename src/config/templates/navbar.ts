import type { TemplateConfig } from "../../type/template-config";
import type { NavbarMetadata } from "../../type/type";
import { modifyNavbar } from "../../modifiers/navbar";

export const navbarConfig: TemplateConfig = {
  sectionType: "navbar",
  modifier: (section) => modifyNavbar(section as NavbarMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Navbar.njk",
};
