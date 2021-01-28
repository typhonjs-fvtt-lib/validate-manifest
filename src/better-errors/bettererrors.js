const { codeFrameColumns } = require('@babel/code-frame');
const jsonMap              = require('json-source-map');

/**
 * Accepts an array of `ajv` errors and returns an array of JSON data with better error messages suitable for
 * displaying to end users. If a JSON file string is provided code frames are output as well. A final option
 * is to turn off code highlighting.
 *
 * @param {object[]} errors - An array of `ajv` errors.
 *
 * @param {string}   [file] - The JSON file string of to produce a code frame for against `ajv` errors.
 *
 * @param {boolean}  [highlightCode=true] - A boolean enabling code highlighting.
 *
 * @returns {object[]}
 */
function betterErrors(errors, file, highlightCode = true)
{
   if (!Array.isArray(errors)) { throw new TypeError(`'errors' must be an array.`); }

   const results = [];

   let jsonData = null;

   if (typeof file === 'string')
   {
      jsonData = jsonMap.parse(file);
   }

   for (const error of errors)
   {
      if (typeof error !== 'object') { continue; }
      if (typeof error.dataPath !== 'string') { continue; }
      if (typeof error.keyword !== 'string') { continue; }

      const dataPath = error.dataPath;
      const keyword = error.keyword;

      let message = '';
      let generateCodeFrame = true;

      switch (keyword)
      {
         case 'enum':
            message = `${dataPath} ${error.message}: ${error.params.allowedValues.join(', ')}`;
            break;

         case 'required':
            message = `${error.message}`;
            generateCodeFrame = false;
            break;

         default:
            message = `${dataPath} ${error.message}`;
            break;
      }

      let codeFrame = '';

      if (generateCodeFrame && jsonData !== null)
      {
         const locs = jsonData.pointers[dataPath];

         const location = {
            start: { line: locs.value.line + 1, column: locs.value.column + 1 },
            end: { line: locs.valueEnd.line + 1, column: locs.valueEnd.column + 1 }
         };

         codeFrame = codeFrameColumns(file, location, { highlightCode });
      }

      results.push({ codeFrame, dataPath, keyword, message });
   }

   return results;
}

module.exports = betterErrors;
