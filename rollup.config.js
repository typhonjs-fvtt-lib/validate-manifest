import path       from 'path';

import commonjs   from '@rollup/plugin-commonjs';     // This converts ansi-colors to ES6 from CJS.
import resolve    from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import { terser } from 'rollup-plugin-terser';        // Terser is used for minification / mangling

// The deploy path for the rolled up validator functions
const s_DEPLOY_PATH = './dist';

// Produce sourcemaps or not
const s_SOURCEMAP = true;

export default () =>
{
   // This bundle is for the client.
   return [{
      input: 'dist-intermediate/validator-functions.js',
      output: [{
         exports: 'named',
         file: `${s_DEPLOY_PATH}${path.sep}validator-rollup.js`,
         format: 'cjs',
         plugins: [terser()],
         preferConst: true,
         sourcemap: s_SOURCEMAP,
      }],
      plugins: [
         resolve({ browser: true }),
         commonjs()
      ]
   }];
};
