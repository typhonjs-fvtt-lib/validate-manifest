/**
 * Defines which tests will be run by group and type.
 */
export default {
   functionName: {
      // validateModule: true,
      // validateModuleStrict: true,
      // validateModulePlus: true,
      // validateModulePlusStrict: true,
      // validateSystem: true,
      // validateSystemStrict: true,
      // validateSystemPlus: true,
      // validateSystemPlusStrict: true
   },

   categories: {
      // loose: true,
      strict: true,
      // plus: true,
      // notplus: true
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
         categories: ['loose', 'notplus'],
         type: ['base', 'module'],
         isStrict: false,
         isManifestPlus: false
      },
      validateModulePlus: {
         categories: ['loose', 'plus'],
         type: ['base', 'base-manifest+', 'module', 'module+'],
         isStrict: false,
         isManifestPlus: true
      },
      validateSystem: {
         categories: ['loose', 'notplus'],
         type: ['base', 'system'],
         isStrict: false,
         isManifestPlus: false
      },
      validateSystemPlus: {
         categories: ['loose', 'plus'],
         type: ['base', 'base-manifest+', 'system', 'system+'],
         isStrict: false,
         isManifestPlus: true
      },
      validateModuleStrict: {
         categories: ['loose', 'strict', 'notplus'],
         type: ['base', 'module'],
         isStrict: true,
         isManifestPlus: false
      },
      validateModulePlusStrict: {
         categories: ['loose', 'strict', 'plus'],
         type: ['base', 'base-manifest+', 'module', 'module+'],
         isStrict: true,
         isManifestPlus: true
      },
      validateSystemStrict: {
         categories: ['loose', 'strict', 'notplus'],
         type: ['base', 'system'],
         isStrict: true,
         isManifestPlus: false
      },
      validateSystemPlusStrict: {
         categories: ['loose', 'strict', 'plus'],
         type: ['base', 'base-manifest+', 'system', 'system+'],
         isStrict: true,
         isManifestPlus: true
      }
   }
};
