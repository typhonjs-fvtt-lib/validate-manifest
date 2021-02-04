![@typhonjs-fvtt/validate-manifest](https://i.imgur.com/JTFchNW.png)

[![NPM](https://img.shields.io/npm/v/@typhonjs-fvtt/validate-manifest.svg?label=npm)](https://www.npmjs.com/package/@typhonjs-fvtt/validate-manifest)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-fvtt/validate-manifest/blob/main/LICENSE)

![Build Status](https://github.com/typhonjs-fvtt/validate-manifest/workflows/CI/CD/badge.svg)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-fvtt/validate-manifest.svg)](https://codecov.io/github/typhonjs-fvtt/validate-manifest)
[![Dependency Status](https://david-dm.org/typhonjs-fvtt/validate-manifest.svg)](https://david-dm.org/typhonjs-fvtt/validate-manifest)

Providing JSON schemas for Foundry VTT module.json / system.json manifests & League of Extradionary Foundry developers 
manifest plus extensions in addition to compiled validator functions.

There are loose and strict variations for the four schema variations. Loose variations follow the officially posted 
manifest and manifest plus specifications and only check that types are correct. The strict variations enforce extra 
rules such as semantic versioning where applicable and other pattern matching aspects to ensure correctness.

### JSON Schema / IDE integration

For end developers it is useful to set up the appropriate JSON schema with your IDE. Check these links for IDE info for
[Webstorm](https://www.jetbrains.com/help/rider/Settings_Languages_JSON_Schema.html) or  
[VS Code](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings). Point to the relevant JSON 
schema file found in `./schema` and enable intellisense in your IDE. For reference since this is a NPM module you will
link `./node_modules/@typhonjs-fvtt/validate-manifest/schema/strict/module+.json`. The schema files ending in `+` 
include the standard manifest and manifest plus coverage.

There are 8 schemas available:
- `./schema/loose/module.json`
- `./schema/loose/module+.json`
- `./schema/loose/system.json`
- `./schema/loose/system+.json`
- `./schema/strict/module.json`
- `./schema/strict/module+.json`
- `./schema/strict/system.json`
- `./schema/strict/system+.json`

### Foundry VTT tools developers

For Foundry VTT tools developers and anyone needing to validate manifest files. The validator functions are compiled 
by `ajv` and are located in the `./dist` directory. The main entry point for the NPM module points to the 
`./dist/validators.js`.

There are 8 validator functions:
- validateModule
- validateModuleStrict
- validateModulePlus
- validateModulePlusStrict
- validateSystem
- validateSystemStrict
- validateSystemPlus
- validateSystemPlusStrict

A trivial example of using the `validateModule` function.

``` js
const fs                 = require('fs');

const { validateModule } = require('@typhonjs-fvtt/validate-manifest');

const moduleJSONObject = JSON.parse(fs.readFileSync('./src/module.json', 'utf8'););  // load from some location.

if (!validateModule(moduleJSONObject))
{
  console.log(JSON.stringify(validateModule.errors);
}
```

Please see [ajv](https://www.npmjs.com/package/ajv) and [ajv-errors](https://www.npmjs.com/package/ajv-errors) for 
more information about the validator functions and resulting error entries stored in the `errors` array after a 
validator function is invoked. Considerable work has been done to ensure that one condition resolves to one error 
listed in the `errors` array. There is a comprehensive test suite which covers all possible errors that may occur
with data contained in the manifest files.

If you are planning on displaying error information to end users you may want to take a look at the 
[@typhonjs-node-utils/better-ajv-errors](https://www.npmjs.com/package/@typhonjs-node-utils/better-ajv-errors) module 
which formats the errors array with user readable messages and associated code frames. An example of using the 
`better-ajv-errors` module.

``` js
const fs                 = require('fs');

const betterErrors       = require('@typhonjs-node-utils/better-ajv-errors');
const { validateModule } = require('@typhonjs-fvtt/validate-manifest');

const moduleJSONFile = fs.readFileSync('./src/module.json', 'utf8');   // load the text string for the manifest.
const moduleJSONObject = JSON.parse(moduleJSONFile);                   // parse the manifest file.

if (!validateModule(moduleJSONObject))
{
   const errors = betterErrors(validateModule.errors, { file: moduleJSONFile });

   for (const entry of errors)
   {
      console.log(`${entry.message}\n${entry.codeFrame}\n\n`);
   }
}
```

###Architecture
A very brief overview... The base source schemas is shared across all variations and located in `./src/schema` and is 
compiled / dereferenced into single file loose and strict variations in `./schema` by the `compile` NPM script. There 
is a custom merge step with template includes found in `./src/schema/merge`. These are common definitions which are 
then combined into the final schema files. 

Please reach out and get in touch if you need any more assistance at the 
[issues forum](https://github.com/typhonjs-fvtt/validate-manifest/issues).

