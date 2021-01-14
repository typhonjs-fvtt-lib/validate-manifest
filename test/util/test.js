/**
 * Defines which tests will be run by group and type.
 *
 * @type {{type: {validPlus: boolean, validBase: boolean, invalidBase: boolean, invalidPlus: boolean}, group: {validateSystem: boolean, validateSystemPlus: boolean, validateModulePlus: boolean, validateModule: boolean}}}
 */
module.exports = {
   group: {
      validateModule: true,
      validateModulePlus: true,
      validateSystem: true,
      validateSystemPlus: true,
   },
   type: {
      validBase: true,
      invalidBase: true,
      validPlus: true,
      invalidPlus: true
   }
};
