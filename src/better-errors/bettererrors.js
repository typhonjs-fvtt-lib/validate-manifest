const { codeFrameColumns } = require('@babel/code-frame');
const jsonMap              = require('json-source-map');
const hash                 = require('object-hash');

/**
 * Accepts an array of `ajv` errors and returns an array of JSON data with better error messages suitable for
 * displaying to end users. If a JSON file string is provided code frames are output as well. A final option
 * is to turn off code highlighting.
 *
 * @param {object[]} errors - An array of `ajv` errors.
 *
 * @param {object}   options - An array options.
 *
 * @param {string}   [options.file] - The JSON file string of to produce a code frame for against `ajv` errors.
 *
 * @param {boolean}  [options.highlightCode=true] - A boolean enabling code highlighting.
 *
 * @param {number}   [options.wrapLength] - An integer specifying a line length to wrap the output message.
 *
 * @returns {{codeFrame: string, keyword: string, message: string, dataPath: string}[]}
 */
function betterErrors(errors, { file, highlightCode = true, wrapLength } = {})
{
   if (!Array.isArray(errors)) { throw new TypeError(`'errors' must be an array.`); }

   if (typeof highlightCode !== 'boolean') { throw new TypeError(`'options.highlightCode' must be a boolean.`); }

   if (wrapLength !== void 0 && !Number.isInteger(wrapLength) && wrapLength < 10)
   {
      throw new TypeError(`'options.wrapLength' must be a positive integer greater than 10.`);
   }

   const results = [];

   let jsonData = null;

   if (typeof file === 'string')
   {
      jsonData = jsonMap.parse(file);
   }

   const duplicateSet = new Set();

   for (const error of errors)
   {
      if (typeof error !== 'object') { continue; }
      if (typeof error.dataPath !== 'string') { continue; }
      if (typeof error.keyword !== 'string') { continue; }

      // Create a hash of the error and test against the duplicate set to avoid handling duplicate errors.
      const errorHash = hash(error);
      if (duplicateSet.has(errorHash)) { continue; }
      duplicateSet.add(errorHash);

      const dataPath = error.dataPath;
      const keyword = error.keyword;

      let codeFrame = '';
      let message = '';
      let jsonPointerLocs = null;
      let codeFrameNoColumn = false;
      let jsonPointerLines = 0;

      if (jsonData !== null)
      {
         jsonPointerLocs = jsonData.pointers[dataPath];
         jsonPointerLines = jsonPointerLocs.valueEnd.line - jsonPointerLocs.value.line;
      }

      switch (keyword)
      {
         // Presently compound keywords are simply ignored. Use `ajv-errors` and create specific error messages.
         case 'not':
         case 'oneOf':
         case 'anyOf':
         case 'allOf':
         case 'if':
            continue;

         case 'enum':
            message = `${dataPath} ${error.message}: ${formatItemArray(error.params.allowedValues, { quote: true })}`;
            break;

         case 'additionalProperties':
            message = `${error.message}: '${error.params.additionalProperty}'`;

            // Limit total lines and turn off columns for code frames if lines greater than 3.
            if (jsonPointerLocs !== null && jsonPointerLines > 3)
            {
               codeFrameNoColumn = true;
               jsonPointerLocs.valueEnd.line = Math.min(jsonPointerLocs.valueEnd.line, jsonPointerLocs.value.line + 3);
            }
            break;

         case 'required':
            message = `${error.message}`;

            // Limit total lines and turn off columns for code frames if lines greater than 3.
            if (jsonPointerLocs !== null && jsonPointerLines > 3)
            {
               codeFrameNoColumn = true;
               jsonPointerLocs.valueEnd.line = Math.min(jsonPointerLocs.valueEnd.line, jsonPointerLocs.value.line + 3);
            }
            break;

         case 'type':
            message = Array.isArray(error.params.type) ? `${dataPath} should be ${formatItemArray(error.params.type)}` :
             `${dataPath} ${error.message}`;
            break;

         case 'uniqueItems':
            codeFrameNoColumn = true;
            message = `${dataPath} ${error.message}`;
            break;

         default:
            message = `${dataPath} ${error.message}`;
            break;
      }

      // Limit any jsonPointerLocs spread of line start to end to 10 lines and turn off column highlighting.
      if (jsonPointerLocs !== null && jsonPointerLines > 10)
      {
         codeFrameNoColumn = true;
         jsonPointerLocs.valueEnd.line = Math.min(jsonPointerLocs.valueEnd.line, jsonPointerLocs.value.line + 10);
      }

      // Potentially wrap the message length if `wrapLength` is defined.
      if (Number.isInteger(wrapLength))
      {
         message = wrap(message, wrapLength);
      }

      if (jsonData !== null && jsonPointerLocs !== null && codeFrame === '')
      {
         codeFrame = generateCodeFrame(file, jsonPointerLocs, { codeFrameNoColumn, highlightCode });
      }

      results.push({ codeFrame, dataPath, keyword, message });
   }

   return results;
}

module.exports = betterErrors;


/**
 * Formats an array of values with commas and an ending coordinating conjunction.
 *
 * @param {string[]} array - Array to format.
 *
 * @param {string} [conjunction='or'] - Optional conjunction.
 *
 * @param {boolean} [quote=false] - Optional quoting of items.
 *
 * @returns {string} Formatted string.
 */
function formatItemArray(array, { conjunction = 'or', quote = false } = {})
{
   let result = '';

   switch (array.length)
   {
      case 0:
         break;

      case 1:
         result = quote ? `'${array[0]}'` : `${array[0]}`;
         break;

      case 2:
         result = quote ? `'${array[0]}' ${conjunction} '${array[1]}'` : `${array[0]} ${conjunction} ${array[1]}`;
         break;

      default:
         for (let cntr = 0; cntr < array.length; cntr++)
         {
            if (quote)
            {
               result += cntr === array.length - 1 ? `${conjunction} '${array[cntr]}'` : `'${array[cntr]}', `;
            }
            else
            {
               result += cntr === array.length - 1 ? `${conjunction} ${array[cntr]}` : `${array[cntr]}, `;
            }
         }
         break;
   }

   return result;
}

/**
 * Generates a code frame from the provided file string and jsonPointerLocs instance. Optional parameters available
 * to control @babel/code-frame output.
 *
 * @param {string}   file - A string representation of the code to generate a code frame.
 *
 * @param {object}   jsonPointerLocs - A JSON pointer location from `json-source-map`
 *
 * @param {boolean}  [codeFrameNoColumn=false] - A boolean indicating if columns should be highlighted
 *
 * @param {boolean}  [highlightCode=true] - Highlight code w/ escape colors.
 *
 * @param {number}   [linesAbove=2] - Lines to include above location indicated in `jsonPointerLocs`
 *
 * @param {number}   [linesBelow=3] - Lines to include below location indicated in `jsonPointerLocs`
 *
 * @returns {string} - The code frame captured.
 */
function generateCodeFrame(file, jsonPointerLocs,
 { codeFrameNoColumn = false, highlightCode = true, linesAbove = 2, linesBelow = 3 } = {})
{
   let location;

   if (codeFrameNoColumn)
   {
      // Add 1 to line for @babel/code-frame
      location = {
         start: { line: jsonPointerLocs.value.line + 1 },
         end: { line: jsonPointerLocs.valueEnd.line + 1 }
      };
   }
   else
   {
      // Add 1 to line and column for @babel/code-frame
      location = {
         start: { line: jsonPointerLocs.value.line + 1, column: jsonPointerLocs.value.column + 1 },
         end: { line: jsonPointerLocs.valueEnd.line + 1, column: jsonPointerLocs.valueEnd.column + 1 }
      };
   }

   return codeFrameColumns(file, location, { highlightCode, linesAbove, linesBelow });
}

/**
 * Wraps a string to the given line length.
 *
 * @param {string}   string - String to wrap.
 * @param {number}   [length=80] - Integer line length.
 *
 * @returns {string} Wrapped string.
 */
function wrap(string, length = 80)
{
   return string.replace(new RegExp(`(?![^\\n]{1,${length}}$)([^\\n]{1,${length}})\\s`, 'g'), '$1\n');
}
