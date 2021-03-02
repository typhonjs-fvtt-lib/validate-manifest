import path       from 'path';

import commonjs   from '@rollup/plugin-commonjs';
import resolve    from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// The deploy path for the rolled up validator functions
const s_DEPLOY_PATH = './dist';

// Produce sourcemaps / minify or not
const s_SOURCEMAP = false;
const s_MINIFY = true;

const outputPlugins = s_MINIFY ? [terser()] : [];

export default () =>
{
   return [{
      input: 'dist-intermediate/validators.js',
      output: [{
         exports: 'named',
         file: `${s_DEPLOY_PATH}${path.sep}cjs${path.sep}validators.js`,
         format: 'cjs',
         plugins: outputPlugins,
         preferConst: true,
         sourcemap: s_SOURCEMAP,
      },
      {
         file: `${s_DEPLOY_PATH}${path.sep}esm${path.sep}validators.js`,
         format: 'es',
         plugins: outputPlugins,
         preferConst: true,
         sourcemap: s_SOURCEMAP,
      }],
      plugins: [
         resolve({ browser: true }),
         commonjs()
      ]
   }];
};
