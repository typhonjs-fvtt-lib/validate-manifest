import fs         from 'fs';

import $RefParser from '@apidevtools/json-schema-ref-parser';

/**
 * The Async IIFE below invokes `json-schema-ref-parser` to bundle / dereference the various shared JSON schema
 * files single files for each module.json / system.json variation and stores them in `./schema`.
 */
(async () =>
{
   try
   {
      // Compile / bundle loose schema into single files.
      let schema = await $RefParser.bundle('./src/schema/shared/properties/module.json');
      schema.$id = 'module.json';
      fs.writeFileSync('./schema/module.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/module+.json');
      schema.$id = 'module+.json';
      fs.writeFileSync('./schema/module+.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/system.json');
      schema.$id = 'system.json';
      fs.writeFileSync('./schema/system.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/system+.json');
      schema.$id = 'system+.json';
      fs.writeFileSync('./schema/system+.json', JSON.stringify(schema, null, 3));
   }
   catch (err)
   {
      console.log(err);
   }
})();


