import type { TemplateConfig } from "../../type/template-config";
import type { SocialLinksMetadata } from "../../type/type";
import { modifySocialLinks } from "../../modifiers/socialLinks";

export const socialLinksConfig: TemplateConfig = {
  sectionType: "socialLinks",
  modifier: (section) => modifySocialLinks(section as SocialLinksMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/SocialLinks.njk",
};
