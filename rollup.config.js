import path       from 'path';

import commonjs   from '@rollup/plugin-commonjs';
import resolve    from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// The deploy path for the rolled up validator functions
const s_DEPLOY_PATH = './dist';

// Produce sourcemaps or not
const s_SOURCEMAP = true;

export default () =>
{
   return [{
      input: 'dist-intermediate/validators.js',
      output: [{
         exports: 'named',
         file: `${s_DEPLOY_PATH}${path.sep}validators.js`,
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
