const {validateModule} = require('./validator-functions');
const {validateModulePlus} = require('./validator-functions');
const {validateSystem} = require('./validator-functions');
const {validateSystemPlus} = require('./validator-functions');

/**
 * Wrap all validation functions and filter any errors for `ajv` keywords that are "superfluous".
 * The goal is to produce one error for one condition and `ajv` will output extra error conditions about the
 * schema itself.
 *
 * Presently just `if` keywords are excluded.
 *
 * @param {function} wrappedFunction - The validator function to wrap.
 *
 * @returns {function(*=, *=): *}
 */
function wrap(wrappedFunction)
{
   const wrapFunction = (data, options) => {
      const result = wrappedFunction(data, options);
      wrapFunction.errors = wrappedFunction.errors;

      if (!result && Array.isArray(wrapFunction.errors) && wrapFunction.errors.length > 0)
      {
         wrapFunction.errors = wrapFunction.errors.filter(
          (error) => error.keyword !== 'if' && error.keyword !== 'pattern');
      }

      return result;
   }

   return wrapFunction;
}

module.exports.validateModule = wrap(validateModule);
module.exports.validateModulePlus = wrap(validateModulePlus);
module.exports.validateSystem = wrap(validateSystem);
module.exports.validateSystemPlus = wrap(validateSystemPlus);
