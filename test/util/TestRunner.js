import * as validators     from '../../dist/validators.js';

import fs                  from 'fs';
import path                from 'path';

import BetterErrors        from '@typhonjs-utils/better-ajv-errors';
import chai                from 'chai';
import stripJsonComments   from 'strip-json-comments';

import test                from './test.js';

/**
 * Captures the right hand schema path data for sanitizing error data.
 *
 * @type {RegExp}
 */
const s_SCHEMAPATH_REGEX = /^.*(#.*)$/;

/**
 * Provides convenience methods to setup Mocha tests based on JSON data files.
 */
export default class TestRunner
{
   /**
    * Handles invalid validation tests opening a source JSON file and comparing validation errors to stored error data.
    *
    * @param {Function} testFunction - The ajv validation function to test.
    *
    * @param {string}   dirPath - The directory to open error and invalid data.
    */
   static invalid(testFunction, dirPath)
   {
      const betterErrorPath = `${dirPath}${path.sep}bettererrors`;
      const errorPath = `${dirPath}${path.sep}errors`;
      const invalidPath = `${dirPath}${path.sep}invalid`;

      if (!fs.existsSync(betterErrorPath)) { return; }

      if (!fs.existsSync(errorPath) || !fs.existsSync(invalidPath)) { return; }

      const errors = TestRunner.loadFiles(errorPath);
      const invalidData = TestRunner.loadFiles(invalidPath);

      for (const key of invalidData.keys())
      {
         const invalid = invalidData.get(key);

         it(key, (done) =>
         {
            if (!testFunction(invalid.data))
            {
               // Sanitize / remove left hand inlineRef data.
               TestRunner.removeLefthandSchemaPath(testFunction.errors);

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

               const betterErrorFilepath = `${dirPath}${path.sep}bettererrors${path.sep}${key}.log`;

               // if (test.createErrorData)   // Always write better errors files.
               if (!fs.existsSync(betterErrorFilepath) && test.createErrorData)
               {
                  fs.writeFileSync(betterErrorFilepath, BetterErrors.toString(BetterErrors.asArray(testFunction.errors,
                   { file: invalid.file, highlightCode: false, wrapLength: 80 })));
               }

               chai.expect(testFunction.errors).to.be.deep.equal(errors.get(key).data);
               done();
            }
            else
            {
               done(new Error(`Data should have been invalid:\n${JSON.stringify(invalid.data, null, 3)}`));
            }
         });
      }
   }

   /**
    * Returns a Map of all files found in the directory provided.
    *
    * @param {string} dir - Directory to read.
    *
    * @param {string} extension - File extension to read.
    *
    * @returns {Map<string, object>} A Map by file name and loaded JSON object.
    */
   static loadFiles(dir = '.', extension = '.json5')
   {
      const results = new Map();

      fs.readdirSync(dir).forEach((filename) =>
      {
         const absPath = path.resolve(dir, filename);
         const stat = fs.statSync(absPath);
         const isFile = stat.isFile() && path.extname(filename) === extension;

         if (isFile)
         {
            const baseName = path.basename(absPath);
            let data, file;

            try
            {
               file = stripJsonComments(fs.readFileSync(absPath, 'utf8'));
               data = JSON.parse(file);
            }
            catch (err)
            {
               process.stderr.write(`Couldn't load as JSON: ${absPath}\n`);
               throw err;
            }

            results.set(baseName, {
               absPath,
               baseName,
               data,
               file
            });
         }
      });

      return results;
   }

   /**
    * Performs a depth traversal of an object and processes `schemaPath` keys to remove the left hand inlineRefs data
    * that changes between the loose / strict / manifest+ variations.
    *
    * @param {object|Array}   data - An object to traverse for `schemaPath`.
    */
   static removeLefthandSchemaPath(data)
   {
      if (typeof data === 'object')
      {
         for (const key in data)
         {
            // eslint-disable-next-line no-prototype-builtins
            if (data.hasOwnProperty(key) && key !== 'schemaPath')
            {
               TestRunner.removeLefthandSchemaPath(data[key]);
            }
         }

         // Store only the right hand schemaPath data.
         if (data && typeof data.schemaPath === 'string')
         {
            const match = s_SCHEMAPATH_REGEX.exec(data.schemaPath);
            if (match !== null)
            {
               data.schemaPath = match[1];
            }
         }
      }
   }

   /**
    * Runs all applicable tests depending on data defined in `test.js`
    */
   static run()
   {
      for (const functionName in test.functionData)
      {
         if (!test.functionName[functionName]) { continue; }

         const testFunction = validators[functionName];

         const data = test.functionData[functionName];

         describe(functionName, () =>
         {
            for (const category of data.categories)
            {
               if (!test.categories[category]) { continue; }

               for (const type of data.type)
               {
                  if (!test.type[type]) { continue; }

                  const dirPath = `./test/fixture/manifests/${category}/${type}`;

                  if (!fs.existsSync(dirPath)) { continue; }

                  if (test.valid)
                  {
                     describe(`${category} - ${type} - valid`, () =>
                     {
                        TestRunner.valid(testFunction, dirPath, data);
                     });
                  }

                  if (test.invalid)
                  {
                     describe(`${category} - ${type} - invalid`, () =>
                     {
                        TestRunner.invalid(testFunction, dirPath, data);
                     });
                  }
               }
            }
         });
      }
   }

   /**
    * Handles valid validation tests opening a source JSON file and expecting it to validate.
    *
    * @param {Function} testFunction - The ajv validation function to test.
    *
    * @param {string}   dirPath - The directory to open valid data.
    */
   static valid(testFunction, dirPath)
   {
      const validPath = `${dirPath}${path.sep}valid`;

      if (!fs.existsSync(validPath)) { return; }

      const validData = TestRunner.loadFiles(validPath);

      for (const key of validData.keys())
      {
         const test = validData.get(key);

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
