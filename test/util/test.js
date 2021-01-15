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
      common: true,
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
   createErrorData: false,

   // Defines the function to run and the associated categories, type, and if it is strict.
   functionData: {
      validateModule: {
         categories: ['common', 'loose'],
         type: ['base', 'module'],
         isStrict: false
      },
      validateModulePlus: {
         categories: ['common', 'loose'],
         type: ['base', 'module', 'module+'],
         isStrict: false
      },
      validateSystem: {
         categories: ['common', 'loose'],
         type: ['base', 'system'],
         isStrict: false
      },
      validateSystemPlus: {
         categories: ['common', 'loose'],
         type: ['base', 'system', 'system+'],
         isStrict: false
      },
      validateModuleStrict: {
         categories: ['common', 'loose', 'strict'],
         type: ['base', 'module'],
         isStrict: true
      },
      validateModulePlusStrict: {
         categories: ['common', 'loose', 'strict'],
         type: ['base', 'module', 'module+'],
         isStrict: true
      },
      validateSystemStrict: {
         categories: ['common', 'loose', 'strict'],
         type: ['base', 'system'],
         isStrict: true
      },
      validateSystemPlusStrict: {
         categories: ['common', 'loose', 'strict'],
         type: ['base', 'system', 'system+'],
         isStrict: true
      }
   }
};
