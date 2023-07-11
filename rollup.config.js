import typescript from 'rollup-plugin-typescript2';
// import { rollupPluginHTML as html } from '@web/rollup-plugin-html';

export default {
    input: "./src/index.ts",
    output: {
        dir: "./dist",
        format: "es"
    },
    plugins: [
        typescript(),
        // html({input: ["public/index.html"]})
    ]
}