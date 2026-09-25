import type { TemplateConfig } from "../../type/template-config";
import type { HeroMetadata } from "../../type/type";
import { modifyHero } from "../../modifiers/hero";

export const heroConfig: TemplateConfig = {
  sectionType: "hero",
  componentName: "Hero",
  modifier: (section) => modifyHero(section as HeroMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Hero.njk",
  outputPath: "components/Hero.tsx",
};
