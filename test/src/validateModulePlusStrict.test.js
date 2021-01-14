const chai                          = require('chai');

const FileUtil                      = require('../util/FileUtil');
const test                          = require('../util/test');

const { validateModulePlusStrict }  = require('../../dist/validators');

if (test.group.validateModulePlusStrict)
{
   describe('validateModulePlusStrict', () =>
   {
      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            const validData = FileUtil.loadFiles('./test/fixture/manifests/module/valid');

            for (const key of validData.keys())
            {
               const test = validData.get(key);

               if ('__strictskip' in test.data) { continue; }

               it(key, (done) =>
               {
                  if (!validateModulePlusStrict(test.data))
                  {
                     done(`\n${JSON.stringify(validateModulePlusStrict.errors, null, 3)}`);
                  }
                  else
                  {
                     done();
                  }
               });
            }
         });
      }

      if (test.type.invalidBase)
      {
         describe('invalid (base)', () =>
         {
            const errors = FileUtil.loadFiles('./test/fixture/manifests/module/errors');
            const invalidData = FileUtil.loadFiles('./test/fixture/manifests/module/invalid');

            for (const key of invalidData.keys())
            {
               const test = invalidData.get(key);

               if ('__strictskip' in test.data) { continue; }

               it(key, (done) =>
               {
                  if (!validateModulePlusStrict(test.data))
                  {
                     // TODO REMOVE TESTING
                     // done(`\n${JSON.stringify(validateModulePlusStrict.errors, null, 3)}`);

                     chai.expect(validateModulePlusStrict.errors).to.be.deep.equal(errors.get(key).data);
                     done();
                  }
                  else
                  {
                     done(false);
                  }
               });
            }
         });
      }

      if (test.type.invalidBaseStrict)
      {
         describe('invalid (base/strict)', () =>
         {
            const errors = FileUtil.loadFiles('./test/fixture/manifests/strict-module/errors');
            const invalidData = FileUtil.loadFiles('./test/fixture/manifests/strict-module/invalid');

            for (const key of invalidData.keys())
            {
               const test = invalidData.get(key);

               it(key, (done) =>
               {
                  if (!validateModulePlusStrict(test.data))
                  {
                     // TODO REMOVE TESTING
                     // done(`\n${JSON.stringify(validateModulePlusStrict.errors, null, 3)}`);

                     chai.expect(validateModulePlusStrict.errors).to.be.deep.equal(errors.get(key).data);
                     done();
                  }
                  else
                  {
                     done(false);
                  }
               });
            }
         });
      }
   });
}
