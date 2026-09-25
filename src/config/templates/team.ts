import type { TemplateConfig } from "../../type/template-config";
import type { TeamMetadata } from "../../type/type";
import { modifyTeam } from "../../modifiers/team";

export const teamConfig: TemplateConfig = {
  sectionType: "team",
  modifier: (section) => modifyTeam(section as TeamMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Team.njk",
};
