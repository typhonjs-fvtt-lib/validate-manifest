const chai = require('chai');

const FileUtil = require('../util/FileUtil');

const { validateSystemPlus } = require('../../dist/validators');

describe('validateSystemPlus', () =>
{
   describe('valid (base)', () =>
   {
      const validData = FileUtil.loadFiles('./test/fixture/manifests/system/valid');

      for (const key of validData.keys())
      {
         const test = validData.get(key);

         it(key, (done) =>
         {
            if (!validateSystemPlus(test.data))
            {
               done(`\n${JSON.stringify(validateSystemPlus.errors, null, 3)}`);
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
      const errors = FileUtil.loadFiles('./test/fixture/manifests/system/errors');
      const invalidData = FileUtil.loadFiles('./test/fixture/manifests/system/invalid');

      for (const key of invalidData.keys())
      {
         const test = invalidData.get(key);

         it(key, (done) =>
         {
            if (!validateSystemPlus(test.data))
            {
               chai.expect(validateSystemPlus.errors).to.be.deep.equal(errors.get(key).data);
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
