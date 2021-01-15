const TestUtil                      = require('../util/TestUtil');
const test                          = require('../util/test');

const { validateModulePlusStrict }  = require('../../dist/validators');

if (test.group.validateModulePlusStrict)
{
   describe('validateModulePlusStrict', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/common', true);
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/common', true);
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/module', true);
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/module', true);
         });
      }

      if (test.type.validPlus)
      {
         describe('valid (plus)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/module+', true);
         });
      }

      if (test.type.invalidPlus)
      {
         describe('invalid (plus)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/module+', true);
         });
      }

      if (test.type.validCommonStrict)
      {
         describe('valid strict (common)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/strict-common');
         });
      }

      if (test.type.invalidCommonStrict)
      {
         describe('invalid strict (common)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/strict-common');
         });
      }

      if (test.type.validBaseStrict)
      {
         describe('valid strict (base)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/strict-module');
         });
      }

      if (test.type.invalidBaseStrict)
      {
         describe('invalid strict (base)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/strict-module');
         });
      }

      if (test.type.validPlusStrict)
      {
         describe('valid strict (plus)', () =>
         {
            TestUtil.valid(validateModulePlusStrict, './test/fixture/manifests/strict-module+');
         });
      }

      if (test.type.invalidPlusStrict)
      {
         describe('invalid strict (plus)', () =>
         {
            TestUtil.invalid(validateModulePlusStrict, './test/fixture/manifests/strict-module+');
         });
      }
   });
}
