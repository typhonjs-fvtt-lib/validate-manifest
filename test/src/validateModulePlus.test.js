const chai = require('chai');

const FileUtil = require('../util/FileUtil');

const { validateModulePlus } = require('../../dist/validators');

describe('validateModulePlus', () =>
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
});
