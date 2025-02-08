import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";
import { name } from "../package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { transform } from "typescript";
const file = (type) => `dist/${name}.${type}.js`;
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
};
const myPlugin = (opts) => {
  return {
    name: "example",
    buildStart(options) {
      console.log("options", options);
    },
    load(id) {
      console.log("id", id);
    },
    transform(source, id) {
      console.log("source", source);
      console.log("id", id);
      return null;
    },
    buildEnd(err) {
      console.log("err", err);
    },
  };
};
export { name, file };
export default {
  input: "src/index.ts",
  output: {
    name,
    file: "esm",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: "bundle.css" }),
  ],
  external: ["vue", "lodash-es"],
};
