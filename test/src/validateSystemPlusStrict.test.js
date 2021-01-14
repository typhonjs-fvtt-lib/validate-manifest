const chai                          = require('chai');

const FileUtil                      = require('../util/FileUtil');
const test                          = require('../util/test');

const { validateSystemPlusStrict }  = require('../../dist/validators');

if (test.group.validateSystemPlusStrict)
{
   describe('validateSystemPlusStrict', () =>
   {
      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            const validData = FileUtil.loadFiles('./test/fixture/manifests/system/valid');

            for (const key of validData.keys())
            {
               const test = validData.get(key);

               if ('__strictskip' in test.data) { continue; }

               it(key, (done) =>
               {
                  if (!validateSystemPlusStrict(test.data))
                  {
                     done(`\n${JSON.stringify(validateSystemPlusStrict.errors, null, 3)}`);
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
            const errors = FileUtil.loadFiles('./test/fixture/manifests/system/errors');
            const invalidData = FileUtil.loadFiles('./test/fixture/manifests/system/invalid');

            for (const key of invalidData.keys())
            {
               const test = invalidData.get(key);

               if ('__strictskip' in test.data) { continue; }

               it(key, (done) =>
               {
                  if (!validateSystemPlusStrict(test.data))
                  {
                     chai.expect(validateSystemPlusStrict.errors).to.be.deep.equal(errors.get(key).data);
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
            const errors = FileUtil.loadFiles('./test/fixture/manifests/strict-system/errors');
            const invalidData = FileUtil.loadFiles('./test/fixture/manifests/strict-system/invalid');

            for (const key of invalidData.keys())
            {
               const test = invalidData.get(key);

               it(key, (done) =>
               {
                  if (!validateSystemPlusStrict(test.data))
                  {
                     // TODO REMOVE TESTING
                     // done(`\n${JSON.stringify(validateModuleStrict.errors, null, 3)}`);

                     chai.expect(validateSystemPlusStrict.errors).to.be.deep.equal(errors.get(key).data);
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
