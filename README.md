# manifest-plus
Providing JSON schemas for Foundry VTT module.json / system.json manifests &amp; manifest+ extensions in addition to compiled validator functions.

There are loose and strict variations for the four schema variations. Loose variations follow the officially posted manifest and manifest plus specifications and only check that types are correct. The strict variations enforce extra rules such as ensuring semantic versioning where applicable and other aspects of correctness which will be detailed thoroughly. 

This is a current work in progress and expected to be finished this week by January 22nd. This document will be flushed out with complete information at that time.

The base source schema information is shared across all variations and located in `./src/schema` and is compiled / dereferenced into single file loose and strict variations in `./schema` by the `compile-schema` NPM script. 

The validators are compiled by `ajv` via the `compile-validators` NPM script and are located in the `./dist` directory. The main entry point for the NPM module points to the `./dist/validators.js`

There are 8 validator functions:
- validateModule
- validateModuleStrict
- validateModulePlus
- validateModulePlusStrict
- validateSystem
- validateSystemStrict
- validateSystemPlus
- validateSystemPlusStrict

While this module is not published to NPM yet you can include it as a Github module. An trivial example of using the `validateModule` function.

``` javascript
const { validateModule } = require('manifest-plus');

const moduleJSONObject = ... // load from some location.

if (!validateModule(moduleJSONObject))
{
  console.log(JSON.stringify(validateModule.errors);
}
```

Please note that ongoing work is being completed and the manifest plus and strict versions are still being completed. 100% test coverage is the goal though so please do come back later this week to check out progress, etc. 
