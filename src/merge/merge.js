const fs                = require('fs');

const deepmerge         = require('deepmerge');
const stripJsonComments = require('strip-json-comments');

const includes          = require('./includes');

// Base
process('abstract/base', 'loose/base');
process('abstract/base', 'strict/base');

// Module
process('abstract/module', 'loose/module');
process('abstract/module', 'strict/module');

// System
process('abstract/system', 'loose/system');
process('abstract/system', 'strict/system');

function process(base, merge)
{
   const basePath = `./src/schema/merge/${base}.json5`;
   const mergePath = `./src/schema/merge/${merge}.json5`;
   const destPath = `./src/schema/shared/definitions/${merge}.json`;

   const baseData = JSON.parse(stripJsonComments(fs.readFileSync(basePath, 'utf8')));
   const mergeData = JSON.parse(stripJsonComments(fs.readFileSync(mergePath, 'utf8')));

   const merged = deepmerge(baseData, mergeData);

   processIncludes(merged);

   fs.writeFileSync(destPath, JSON.stringify(merged, null, 2), 'utf-8');
}

/**
 * Performs a naive depth traversal of an object. The data structure _must not_ have circular references.
 * The result of the callback function is used to modify in place the given data.
 *
 * @param {object|Array}   data - An object or array.
 */
function processIncludes(data)
{
   if (typeof data === 'object' && !Array.isArray(data))
   {
      for (const key in data)
      {
         // eslint-disable-next-line no-prototype-builtins
         if (data.hasOwnProperty(key) && key !== '$$include')
         {
            processIncludes(data[key]);
         }
      }

      if (typeof data.$$include === 'object')
      {
         const action = data.$$include;
         delete data.$$include;

         if (action.target in includes)
         {
            const values = includes[action.target](action.data);
            for (const valKey in values)
            {
               data[valKey] = values[valKey];
            }
         }
      }
   }
}
