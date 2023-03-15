import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// rollup.config.js
// import json from 'rollup-plugin-json';
// const packageJson = require("./package.json");
import typescript from 'rollup-plugin-typescript2'
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
    {
        input: "./lib/mtfh-common.tsx",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            // typescript({ tsconfig: "./tsconfig.json" }),
            typescript({
                rollupCommonJSResolveHack: false,
                clean: true,
              }),
            // terser(),
            // nodePolyfills(),
            // nodeResolve(),
            json({
                // All JSON files will be parsed by default,
                // but you can also specifically include/exclude files
                include: 'node_modules/**',
                exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
          
                // for tree-shaking, properties will be declared as
                // variables, using either `var` or `const`
                preferConst: true, // Default: false
          
                // specify indentation for the generated default export —
                // defaults to '\t'
                indent: '  ',
          
                // ignores indent and generates the smallest code
                compact: true, // Default: false
          
                // generate a named export for every property of the JSON object
                namedExports: true // Default: true
              }),
              nodePolyfills({
                exclude: ["https", "url", "stream", "assert", "tty", "util", "os", "zlib"]
              })
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    // {
    //     input: "dist/esm/index.d.ts",
    //     output: [{ file: "dist/index.d.ts", format: "esm" }],
    //     plugins: [dts()],
    // },
];