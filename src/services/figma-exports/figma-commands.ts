import * as dotenv from "dotenv";
import { filterIconByProperty } from "./filterIconByProperty";
import { transformers } from "./figma-transformers";
import { outputters } from "./figma-outputters";
import { FigmaCommandsType } from "../../types/FigmaCommands";
dotenv.config();

const fileId = process.env.FILE_ID as string;

export const commands: FigmaCommandsType = [
  // Configura o output para gerar icons outline
  [
    "components",
    {
      fileId,
      onlyFromPages: ["Display-Icons"],
      filterComponent: c =>
        filterIconByProperty(c.name, { type: "outline" }), // optional
      transformers: transformers.outline,
      outputters,
    },
  ],

  // Configura o output para gerar icons solid
  [
    "components",
    {
      fileId,
      onlyFromPages: ["Display-Icons"],
      filterComponent: c => filterIconByProperty(c.name, { type: "solid" }), // optional
      transformers: transformers.solid,
      outputters,
    },
  ],
];
