import { Plugin } from "svgo";
import svgo from "@figma-export/transform-svg-with-svgo";

const outlineSVGOConfig: Plugin[] = [
  { name: "removeDimensions", active: true },
  { name: "sortAttrs", active: true },
  { name: "removeAttrs", params: { attrs: ["stroke", 'id'] } },
  {
    name: "addAttributesToSVGElement",
    params: {
      attributes: [
        { stroke: "currentColor" },
        { "data-type": "outline" },
      ],
    },
  },
];

const solidSVGOConfig: Plugin[] = [
  { name: "removeDimensions", active: true },
  { name: "sortAttrs", active: true },
  { name: "removeAttrs", params: { attrs: ["fill", 'id'] } },
  {
    name: "addAttributesToSVGElement",
    params: {
      attributes: [{ fill: "currentColor" }, { "data-type": "solid" }],
    },
  },
];


export const transformers =  {
  outline: [svgo({ multipass: true, plugins: outlineSVGOConfig })],
  solid:  [svgo({ multipass: true, plugins: solidSVGOConfig })],
}