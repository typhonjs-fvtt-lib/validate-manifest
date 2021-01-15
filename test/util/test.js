/**
 * Defines which tests will be run by group and type.
 *
 * @type {{type: {invalidBaseStrict: boolean, validCommonStrict: boolean, validPlus: boolean, validBase: boolean, validPlusStrict: boolean, invalidPlusStrict: boolean, invalidCommon: boolean, validCommon: boolean, invalidCommonStrict: boolean, invalidBase: boolean, invalidPlus: boolean, validBaseStrict: boolean}, group: {validateModuleStrict: boolean, validateSystemPlusStrict: boolean, validateModulePlusStrict: boolean, validateSystem: boolean, validateSystemStrict: boolean, validateSystemPlus: boolean, validateModulePlus: boolean, validateModule: boolean}}}
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
      invalidCommon: true,
      invalidCommonStrict: true,
      invalidBase: true,
      invalidBaseStrict: true,
      invalidPlus: true,
      invalidPlusStrict: true,
      validCommon: true,
      validCommonStrict: true,
      validBase: true,
      validBaseStrict: true,
      validPlus: true,
      validPlusStrict: true
   }
};
