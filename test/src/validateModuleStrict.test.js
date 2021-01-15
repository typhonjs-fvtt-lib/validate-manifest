const TestUtil                   = require('../util/TestUtil');
const test                       = require('../util/test');

const { validateModuleStrict }   = require('../../dist/validators');

if (test.group.validateModuleStrict)
{
   describe('validateModuleStrict', () =>
   {
      if (test.type.validCommon)
      {
         describe('valid (common)', () =>
         {
            TestUtil.valid(validateModuleStrict, './test/fixture/manifests/common', true);
         });
      }

      if (test.type.invalidCommon)
      {
         describe('invalid (common)', () =>
         {
            TestUtil.invalid(validateModuleStrict, './test/fixture/manifests/common', true);
         });
      }

      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            TestUtil.valid(validateModuleStrict, './test/fixture/manifests/module', true);
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            TestUtil.invalid(validateModuleStrict, './test/fixture/manifests/module', true);
         });
      }

      if (test.type.validPlus)
      {
         describe('valid (plus)', () =>
         {
            TestUtil.valid(validateModuleStrict, './test/fixture/manifests/module+', true);
         });
      }

      if (test.type.invalidPlus)
      {
         describe('invalid (plus)', () =>
         {
            TestUtil.invalid(validateModuleStrict, './test/fixture/manifests/module+', true);
         });
      }

      if (test.type.validCommonStrict)
      {
         describe('valid strict (common)', () =>
         {
            TestUtil.valid(validateModuleStrict, './test/fixture/manifests/strict-common');
         });
      }

      if (test.type.invalidCommonStrict)
      {
         describe('invalid strict (common)', () =>
         {
            TestUtil.invalid(validateModuleStrict, './test/fixture/manifests/strict-common');
         });
      }

      if (test.type.validBaseStrict)
      {
         describe('valid strict (base)', () =>
         {
            TestUtil.valid(validateModuleStrict, './test/fixture/manifests/strict-module');
         });
      }

      if (test.type.invalidBaseStrict)
      {
         describe('invalid strict (base)', () =>
         {
            TestUtil.invalid(validateModuleStrict, './test/fixture/manifests/strict-module');
         });
      }
   });
}
