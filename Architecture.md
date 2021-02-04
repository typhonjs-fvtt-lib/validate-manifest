Eventually this document will discuss the architecture of this repo. 

For now just some tracking info on an issue reported to `ajv-errors`. 

Monitor this issue: https://github.com/ajv-validator/ajv-errors/issues/83

Interim solution was to exclude `pattern` keyword from filtered error output as all pattern usage includes custom
errorMessage / `ajv-errors` usage.

strict - module - invalid
packs-not-string[]-system-in-object[].json5

strict - module - invalid
packs-not-pattern-system[]-in-object[].json5
