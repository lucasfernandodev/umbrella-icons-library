import { FigmaExportRC } from "@figma-export/types";
import { commands } from "./services/figma-exports/figma-commands";

(module.exports as FigmaExportRC) = {
  commands: commands,
};
