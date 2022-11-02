import outputWithSVGR from "@figma-export/output-components-as-svgr";
import { getFilename } from "./getFileName";
import OutputSvgFile from "@figma-export/output-components-as-svg";
import { template } from "../../utils/svgrTemplate";
const outputPath = "./package/umbrella-icons-library";

export const outputters = [
  outputWithSVGR({
    getFileExtension: () => {
      return ".tsx";
    },
    getComponentName: ({ componentName }: { componentName: string }) =>
      getFilename(componentName),
    getSvgrConfig: () => ({
      typescript: true,
      ref: true,
      template: template,
      exportType: "named",
    }),
    getExportTemplate: (options) => {
      const filename = getFilename(options.basename);
      return `export { ${filename} } from './${filename}';`;
    },

    getDirname: () => "components",
    output: outputPath,
  }),
  OutputSvgFile({
    output: "./src",
    getBasename: ({ basename }) => getFilename(basename) + ".svg",
    getDirname: () => "icons",
  }),
];
