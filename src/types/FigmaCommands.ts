import {
  StylesCommandOptions,
  ComponentsCommandOptions,
} from "@figma-export/types";

export type FigmaCommandsType = (
  | ["styles", StylesCommandOptions]
  | ["components", ComponentsCommandOptions]
)[];
