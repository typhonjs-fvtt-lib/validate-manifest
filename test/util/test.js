/**
 * Defines which tests will be run by group and type.
 */
module.exports = {
   functionName: {
      validateModule: true,
      validateModuleStrict: true,
      validateModulePlus: true,
      validateModulePlusStrict: true,
      validateSystem: true,
      validateSystemStrict: true,
      validateSystemPlus: true,
      validateSystemPlusStrict: true
   },

   categories: {
      loose: true,
      strict: true
   },

   // Run different types of tests.
   type: {
      "base": true,
      "module": true,
      "module+": true,
      "system": true,
      "system+": true,
   },

   // Run valid / invalid tests.
   valid: true,
   invalid: true,

   // When error data does not exist it will be created when TestUtil.invalid is invoked.
   createErrorData: true,

   // Defines the function to run and the associated categories, type, and if it is strict.
   functionData: {
      validateModule: {
         categories: ['loose'],
         type: ['base', 'module'],
         isStrict: false
      },
      validateModulePlus: {
         categories: ['loose'],
         type: ['base', 'module', 'module+'],
         isStrict: false
      },
      validateSystem: {
         categories: ['loose'],
         type: ['base', 'system'],
         isStrict: false
      },
      validateSystemPlus: {
         categories: ['loose'],
         type: ['base', 'system', 'system+'],
         isStrict: false
      },
      validateModuleStrict: {
         categories: ['loose', 'strict'],
         type: ['base', 'module'],
         isStrict: true
      },
      validateModulePlusStrict: {
         categories: ['loose', 'strict'],
         type: ['base', 'module', 'module+'],
         isStrict: true
      },
      validateSystemStrict: {
         categories: ['loose', 'strict'],
         type: ['base', 'system'],
         isStrict: true
      },
      validateSystemPlusStrict: {
         categories: ['loose', 'strict'],
         type: ['base', 'system', 'system+'],
         isStrict: true
      }
   }
};
