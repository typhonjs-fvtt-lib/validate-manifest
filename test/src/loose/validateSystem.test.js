const TestUtil             = require('../../util/TestUtil');
const test                 = require('../../util/test');

const { validateSystem }   = require('../../../dist/validators');

if (test.group.validateSystem)
{
   describe('validateSystem', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateSystem, './test/fixture/manifests/loose/common');
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateSystem, './test/fixture/manifests/loose/common');
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateSystem, './test/fixture/manifests/loose/system');
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateSystem, './test/fixture/manifests/loose/system');
         });
      }
   });
}
