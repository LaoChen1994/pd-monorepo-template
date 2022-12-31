import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import clear from 'rollup-plugin-clear';
import { readFile } from 'fs/promises'

const pkg = JSON.parse(await readFile("./package.json"))

export default [{
    input: "src/index.ts",
    output: {
        name: "pd-core",
        file: pkg.browser
    },
    plugins: [
        clear({
            target: ['dist'],
            watch: true
        }),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
}, {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs"
        },
        {
            file: pkg.module,
            format: "es"
        }
    ],
    plugins: [typescript({
        tsconfig: "./tsconfig.json"
    })]
}]