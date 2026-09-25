import type { TemplateConfig } from "../../type/template-config";
import type { StatsMetadata } from "../../type/type";
import { modifyStats } from "../../modifiers/stats";

export const statsConfig: TemplateConfig = {
  sectionType: "stats",
  modifier: (section) => modifyStats(section as StatsMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Stats.njk",
};
