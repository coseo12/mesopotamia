import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import html from "rollup-plugin-generate-html-template";
import browsersync from "rollup-plugin-browsersync";

const DEV = process.env.BUILD === "development";

function getOutput() {
  return DEV
    ? [
        {
          dir: "example",
          format: "cjs",
          sourcemap: true,
          plugins: [
            browsersync({
              server: "example",
            }),
            html({
              template: "public/index.html",
              target: "example/index.html",
            }),
          ],
        },
      ]
    : [
        {
          dir: "dist",
          format: "cjs",
          sourcemap: false,
        },
      ];
}

export default {
  input: "./src/index.ts",
  output: getOutput(),
  plugins: [typescript(), terser()],
};
