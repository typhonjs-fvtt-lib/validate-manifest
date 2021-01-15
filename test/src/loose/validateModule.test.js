const TestUtil             = require('../../util/TestUtil');
const test                 = require('../../util/test');

const { validateModule }   = require('../../../dist/validators');

if (test.group.validateModule)
{
   describe('validateModule', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateModule, './test/fixture/manifests/loose/common');
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateModule, './test/fixture/manifests/loose/common');
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateModule, './test/fixture/manifests/loose/module');
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateModule, './test/fixture/manifests/loose/module');
         });
      }
   });
}
