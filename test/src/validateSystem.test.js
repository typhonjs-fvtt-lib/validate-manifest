const chai                 = require('chai');

const FileUtil             = require('../util/FileUtil');
const test                 = require('../util/test');

const { validateSystem }   = require('../../dist/validators');

if (test.group.validateSystem)
{
   describe('validateSystem', () =>
   {
      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            const validData = FileUtil.loadFiles('./test/fixture/manifests/system/valid');

            for (const key of validData.keys())
            {
               const test = validData.get(key);

               it(key, (done) =>
               {
                  if (!validateSystem(test.data))
                  {
                     done(`\n${JSON.stringify(validateSystem.errors, null, 3)}`);
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

               it(key, (done) =>
               {
                  if (!validateSystem(test.data))
                  {
                     chai.expect(validateSystem.errors).to.be.deep.equal(errors.get(key).data);
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