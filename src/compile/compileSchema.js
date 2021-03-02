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
      let schema = await $RefParser.bundle('./src/schema/shared/properties/loose/module.json');
      schema.$id = 'loose/module.json';
      fs.writeFileSync('./schema/loose/module.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/loose/module+.json');
      schema.$id = 'loose/module+.json';
      fs.writeFileSync('./schema/loose/module+.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/loose/system.json');
      schema.$id = 'loose/system.json';
      fs.writeFileSync('./schema/loose/system.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/loose/system+.json');
      schema.$id = 'loose/system+.json';
      fs.writeFileSync('./schema/loose/system+.json', JSON.stringify(schema, null, 3));

      // Compile / bundle strict schema into single files.
      schema = await $RefParser.bundle('./src/schema/shared/properties/strict/module.json');
      schema.$id = 'strict/module.json';
      fs.writeFileSync('./schema/strict/module.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/strict/module+.json');
      schema.$id = 'strict/module+.json';
      fs.writeFileSync('./schema/strict/module+.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/strict/system.json');
      schema.$id = 'strict/system.json';
      fs.writeFileSync('./schema/strict/system.json', JSON.stringify(schema, null, 3));

      schema = await $RefParser.bundle('./src/schema/shared/properties/strict/system+.json');
      schema.$id = 'strict/system+.json';
      fs.writeFileSync('./schema/strict/system+.json', JSON.stringify(schema, null, 3));
   }
   catch (err)
   {
      console.log(err);
   }
})();


