import type { TemplateConfig } from "../../type/template-config";
import type { FooterMetadata } from "../../type/type";
import { modifyFooter } from "../../modifiers/footer";

export const footerConfig: TemplateConfig = {
  sectionType: "footer",
  modifier: (section) => modifyFooter(section as FooterMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Footer.njk",
};
