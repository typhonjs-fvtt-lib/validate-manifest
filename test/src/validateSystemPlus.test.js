const TestUtil                = require('../util/TestUtil');
const test                    = require('../util/test');

const { validateSystemPlus }  = require('../../dist/validators');

if (test.group.validateSystemPlus)
{
   describe('validateSystemPlus', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateSystemPlus, './test/fixture/manifests/common');
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateSystemPlus, './test/fixture/manifests/common');
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateSystemPlus, './test/fixture/manifests/system');
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateSystemPlus, './test/fixture/manifests/system');
         });
      }

      if (test.type.validPlus)
      {
         describe('valid (plus)', () =>
         {
            TestUtil.valid(validateSystemPlus, './test/fixture/manifests/system+');
         });
      }

      if (test.type.invalidPlus)
      {
         describe('invalid (plus)', () =>
         {
            TestUtil.invalid(validateSystemPlus, './test/fixture/manifests/system+');
         });
      }
   });
}
