const fs       = require('fs');
const path     = require('path');

const chai     = require('chai');

const FileUtil = require('./FileUtil');
const test     = require('./test');

/**
 * Provides convenience methods to setup Mocha tests based on JSON data files.
 */
class TestUtil
{
   /**
    * Handles invalid validation tests opening a source JSON file and comparing validation errors to stored error data.
    *
    * @param {function} testFunction - The ajv validation function to test.
    * @param {string}   dirPath - The directory to open error and invalid data.
    * @param {boolean}  [isStrict=false] - Optional boolean to indicate for strict skip checks.
    */
   static invalid(testFunction, dirPath, isStrict = false)
   {
      const errors = FileUtil.loadFiles(`${dirPath}${path.sep}errors`);
      const invalidData = FileUtil.loadFiles(`${dirPath}${path.sep}invalid`);

      for (const key of invalidData.keys())
      {
         const invalid = invalidData.get(key);

         if (isStrict && '__strictskip' in invalid.data) { continue; }

         it(key, (done) =>
         {
            if (!testFunction(invalid.data))
            {
               const error = errors.get(key);

               if (error === void 0)
               {
                  if (test.createErrorData)
                  {
                     fs.writeFileSync(`${dirPath}${path.sep}errors${path.sep}${key}`,
                      JSON.stringify(testFunction.errors, null, 3));
                  }

                  const msg = test.createErrorData ? ' - creating it' : '';

                  done(new Error(
                   `Error data for'${key}' missing${msg}:\n${JSON.stringify(testFunction.errors, null, 3)}`));
               }

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

   /**
    * Handles valid validation tests opening a source JSON file and expecting it to validate.
    *
    * @param {function} testFunction - The ajv validation function to test.
    * @param {string}   dirPath - The directory to open valid data.
    * @param {boolean}  [isStrict=false] - Optional boolean to indicate for strict skip checks.
    */
   static valid(testFunction, dirPath, isStrict = false)
   {
      const validData = FileUtil.loadFiles(`${dirPath}${path.sep}valid`);

      for (const key of validData.keys())
      {
         const test = validData.get(key);

         if (isStrict && '__strictskip' in test.data) { continue; }

         it(key, (done) =>
         {
            if (!testFunction(test.data))
            {
               done(`\n${JSON.stringify(testFunction.errors, null, 3)}`);
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
