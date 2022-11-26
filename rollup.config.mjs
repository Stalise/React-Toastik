// allows download modules from the node_modules folder when building a project
import resolve from '@rollup/plugin-node-resolve';
// converts cjs modules to es
import commonjs from '@rollup/plugin-commonjs';
// compiles in js
import typescript from '@rollup/plugin-typescript';
// assistance to compress bundle
import { terser } from 'rollup-plugin-terser';
// removes peerDependencies from build
import external from 'rollup-plugin-peer-deps-external';
// configure postcss during assembly
import postcss from 'rollup-plugin-postcss';
import fs from 'fs';

const prod = !process.env.ROLLUP_WATCH;

export const addStyleImport = () => ({
  name: 'addStylesImport plugin',
  // closeBundle hook used after bundle is created
  closeBundle() {
    const file = './build/bundle.js'
    // this construction adds import of styles to the start of the js bundle file
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err
      const newData = data.replace(/^/, "import './bundle.css';")
      fs.writeFile(file, newData, (err) => {
        if (err) throw err;
      })
    }
    )
  }
})

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/bundle.js',
      format: 'esm',
      sourcemap: prod,
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      modules: true,
      use: 'sass',
      extract: prod,
      minimize: prod
    }),
    prod && terser(),
    prod && addStyleImport(),
  ]
}
