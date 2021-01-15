const TestUtil                      = require('../../util/TestUtil');
const test                          = require('../../util/test');

const { validateSystemPlusStrict }  = require('../../../dist/validators');

if (test.group.validateSystemPlusStrict)
{
   describe('validateSystemPlusStrict', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/loose/common', true);
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/loose/common', true);
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/loose/system', true);
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/loose/system', true);
         });
      }

      if (test.type.validPlus)
      {
         describe('valid (plus)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/loose/system+', true);
         });
      }

      if (test.type.invalidPlus)
      {
         describe('invalid (plus)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/loose/system+', true);
         });
      }

      if (test.type.validCommonStrict)
      {
         describe('valid strict (common)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/strict/common');
         });
      }

      if (test.type.invalidCommonStrict)
      {
         describe('invalid strict (common)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/strict/common');
         });
      }

      if (test.type.validBaseStrict)
      {
         describe('valid strict (base)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/strict/system');
         });
      }

      if (test.type.invalidBaseStrict)
      {
         describe('invalid strict (base)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/strict/system');
         });
      }

      if (test.type.validPlusStrict)
      {
         describe('valid strict (plus)', () =>
         {
            TestUtil.valid(validateSystemPlusStrict, './test/fixture/manifests/strict/system+');
         });
      }

      if (test.type.invalidPlusStrict)
      {
         describe('invalid strict (plus)', () =>
         {
            TestUtil.invalid(validateSystemPlusStrict, './test/fixture/manifests/strict/system+');
         });
      }
   });
}
