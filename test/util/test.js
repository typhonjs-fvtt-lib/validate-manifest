/**
 * Defines which tests will be run by group and type.
 *
 * @type {{type: {validPlus: boolean, validBase: boolean, invalidBase: boolean, invalidPlus: boolean}, group: {validateSystem: boolean, validateSystemPlus: boolean, validateModulePlus: boolean, validateModule: boolean}}}
 */
module.exports = {
   group: {
      validateModule: true,
      validateModuleStrict: true,
      validateModulePlus: true,
      validateModulePlusStrict: true,
      validateSystem: true,
      validateSystemStrict: true,
      validateSystemPlus: true,
      validateSystemPlusStrict: true
   },
   type: {
      invalidBase: true,
      invalidBaseStrict: true,
      invalidPlus: true,
      invalidPlusStrict: true,
      validBase: true,
      validBaseStrict: true,
      validPlus: true,
      validPlusStrict: true
   }
};
