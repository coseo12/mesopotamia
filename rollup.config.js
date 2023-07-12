import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
// import html from "rollup-plugin-generate-html-template";
import browsersync from "rollup-plugin-browsersync";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const BUILD = process.env.BUILD;

function getInput() {
  return BUILD === "production"
    ? ["./src/index.ts", "./src/core.ts"]
    : BUILD === "development"
    ? ["./src/playground.ts"]
    : ["./src/core.ts"];
}

function getOutput() {
  return BUILD === "production"
    ? [
        {
          dir: "dist",
          format: "es",
          sourcemap: false,
        },
      ]
    : [
        {
          dir: "example",
          format: "es",
          sourcemap: true,
        },
      ];
}

function getPlugins() {
  return BUILD === "development"
    ? [
        typescript(),
        terser(),
        browsersync({
          server: "example",
        }),
      ]
    : [typescript(), terser(), nodeResolve()];
}

export default {
  input: getInput(),
  output: getOutput(),
  plugins: getPlugins(),
};
