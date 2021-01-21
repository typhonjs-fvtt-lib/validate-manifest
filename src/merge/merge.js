const fs                = require('fs');

const deepmerge         = require('deepmerge');
const stripJsonComments = require('strip-json-comments');

const includes          = require('./includes');

// Authors
process('abstract/authors', 'loose/authors');
process('abstract/authors', 'strict/authors');

// Base
process('abstract/base', 'loose/base');
process('abstract/base', 'strict/base');

// Base Manifest+
process('abstract/base-manifest+', 'loose/base-manifest+');
process('abstract/base-manifest+', 'strict/base-manifest+');

// Module
process('abstract/module', 'loose/module');
process('abstract/module', 'strict/module');

// System
process('abstract/system', 'loose/system');
process('abstract/system', 'strict/system');

/**
 * Processes abstract and a merge schema file and saves it in the shared schema definitions under the merge dir /
 * basename.
 *
 * @param {string}   base - The directory / basename of abstract schema.
 * @param {string}   merge - The directory / basename of merge schema.
 */
function process(base, merge)
{
   const basePath = `./src/schema/merge/${base}.json5`;
   const mergePath = `./src/schema/merge/${merge}.json5`;
   const destPath = `./src/schema/shared/definitions/${merge}.json`;

   const baseData = JSON.parse(stripJsonComments(fs.readFileSync(basePath, 'utf8')));
   const mergeData = JSON.parse(stripJsonComments(fs.readFileSync(mergePath, 'utf8')));

   const merged = deepmerge(baseData, mergeData, { arrayMerge: combineMerge });

   processIncludes(merged);

   fs.writeFileSync(destPath, JSON.stringify(merged, null, 2), 'utf-8');
}

/**
 * Performs a depth traversal of an object and processes `$$include` keys. It is expected that the $$include field
 * is an object with at least a `target` entry to match the function to invoke in `./includes.js`. An optional `data`
 * field may be included to pass to the function.
 *
 * @param {object|Array}   data - An object to traverse for includes.
 */
function processIncludes(data)
{
   if (typeof data === 'object')
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

/**
 * Provides the array merge functionality for `deepmerge` to combine elements.
 *
 * @param {Array}    target - target array
 *
 * @param {Array}    source - source array
 *
 * @param {object}   options - deepmerge options
 *
 * @returns {*}
 */
function combineMerge(target, source, options)
{
   const destination = target.slice();

   source.forEach((item, index) =>
   {
      if (typeof destination[index] === 'undefined')
      {
         destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
      }
      else if (options.isMergeableObject(item))
      {
         destination[index] = deepmerge(target[index], item, options);
      }
      else if (target.indexOf(item) === -1)
      {
         destination.push(item);
      }
   });

   return destination;
}
