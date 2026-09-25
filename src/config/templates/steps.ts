import type { TemplateConfig } from "../../type/template-config";
import type { StepsMetadata } from "../../type/type";
import { modifySteps } from "../../modifiers/steps";

export const stepsConfig: TemplateConfig = {
  sectionType: "steps",
  modifier: (section) => modifySteps(section as StepsMetadata) as unknown as Record<string, unknown>,
  templatePath: "components/Steps.njk",
};
