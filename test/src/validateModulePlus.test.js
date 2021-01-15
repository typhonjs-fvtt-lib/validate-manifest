const TestUtil                = require('../util/TestUtil');
const test                    = require('../util/test');

const { validateModulePlus }  = require('../../dist/validators');

if (test.group.validateModulePlus)
{
   describe('validateModulePlus', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateModulePlus, './test/fixture/manifests/common');
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateModulePlus, './test/fixture/manifests/common');
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateModulePlus, './test/fixture/manifests/module');
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateModulePlus, './test/fixture/manifests/module');
         });
      }

      if (test.type.validPlus)
      {
         describe('valid (plus)', () =>
         {
            TestUtil.valid(validateModulePlus, './test/fixture/manifests/module+');
         });
      }

      if (test.type.invalidPlus)
      {
         describe('invalid (plus)', () =>
         {
            TestUtil.invalid(validateModulePlus, './test/fixture/manifests/module+');
         });
      }
   });
}
