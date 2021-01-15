const path     = require('path');

const chai     = require('chai');

const FileUtil = require('./FileUtil');

class TestUtil
{
   static invalid(testFunction, dirPath, isStrict = false)
   {
      const errors = FileUtil.loadFiles(`${dirPath}${path.sep}errors`);
      const invalidData = FileUtil.loadFiles(`${dirPath}${path.sep}invalid`);

      for (const key of invalidData.keys())
      {
         const test = invalidData.get(key);

         if (isStrict && '__strictskip' in test.data) { continue; }

         it(key, (done) =>
         {
            if (!testFunction(test.data))
            {
               chai.expect(testFunction.errors).to.be.deep.equal(errors.get(key).data);
               done();
            }
            else
            {
               done(false);
            }
         });
      }
   }

   static valid(testFuction, dirPath, isStrict = false)
   {
      const validData = FileUtil.loadFiles(`${dirPath}${path.sep}valid`);

      for (const key of validData.keys())
      {
         const test = validData.get(key);

         if (isStrict && '__strictskip' in test.data) { continue; }

         it(key, (done) =>
         {
            if (!testFuction(test.data))
            {
               done(`\n${JSON.stringify(testFuction.errors, null, 3)}`);
            }
            else
            {
               done();
            }
         });
      }
   }
}

module.exports = TestUtil;
