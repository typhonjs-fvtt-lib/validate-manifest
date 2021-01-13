const fs = require('fs');

const { validateModule } = require('../../dist/validators.js');

const moduleJSON = JSON.parse(fs.readFileSync('./test/fixture/manifests/module/module.json', 'utf8'));

describe('validators usage', () =>
{
   it('validateModule', () =>
   {
      if (!validateModule(moduleJSON))
      {
         // The type cast is needed to allow user-defined keywords and errors
         // You can extend this type to include your error types as needed.
         for (const err of validateModule.errors)
         {
            console.log(err);
         }
      }
   });
});
