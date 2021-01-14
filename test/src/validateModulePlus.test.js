const chai                    = require('chai');

const FileUtil                = require('../util/FileUtil');
const test                    = require('../util/test');

const { validateModulePlus }  = require('../../dist/validators');

if (test.group.validateModulePlus)
{
   describe('validateModulePlus', () =>
   {
      if (test.type.validBase)
      {
         describe('valid (base)', () =>
         {
            const validData = FileUtil.loadFiles('./test/fixture/manifests/module/valid');

            for (const key of validData.keys())
            {
               const test = validData.get(key);

               it(key, (done) =>
               {
                  if (!validateModulePlus(test.data))
                  {
                     done(`\n${JSON.stringify(validateModulePlus.errors, null, 3)}`);
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

               it(key, (done) =>
               {
                  if (!validateModulePlus(test.data))
                  {
                     chai.expect(validateModulePlus.errors).to.be.deep.equal(errors.get(key).data);
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
