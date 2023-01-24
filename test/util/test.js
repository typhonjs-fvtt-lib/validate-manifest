/**
 * Defines which tests will be run by group and type.
 */
export default {
   functionName: {
      validateModule: true,
      validateModulePlus: true,
      validateSystem: true,
      validateSystemPlus: true
   },

   categories: {
      main: true,
      plus: true,
      notplus: true
   },

   // Run different types of tests.
   type: {
      base: true,
      'base-manifest+': true,
      module: true,
      'module+': true,
      system: true,
      'system+': true,
   },

   // Run valid / invalid tests.
   valid: true,
   invalid: true,

   // When error data does not exist it will be created when TestUtil.invalid is invoked.
   createErrorData: false,

   // Defines the function to run and the associated categories, type, and if it is strict.
   functionData: {
      validateModule: {
         categories: ['main', 'notplus'],
         type: ['base', 'module'],
         isManifestPlus: false
      },
      validateModulePlus: {
         categories: ['main', 'plus'],
         type: ['base', 'base-manifest+', 'module', 'module+'],
         isManifestPlus: true
      },
      validateSystem: {
         categories: ['main', 'notplus'],
         type: ['base', 'system'],
         isManifestPlus: false
      },
      validateSystemPlus: {
         categories: ['main', 'plus'],
         type: ['base', 'base-manifest+', 'system', 'system+'],
         isManifestPlus: true
      }
   }
};
