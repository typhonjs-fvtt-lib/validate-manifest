### Deprecated
This property is intended to be added to the manifest of a package that is no longer being maintained, and is no longer functional/useful. This may be because the author created a new better alternative, because the features were integrated into Core or a System, or because the author has abandoned the package and no longer intends to keep it up to date.

The `deprecated` property is an object which contains a number of fields explaining the nature of the deprecation status.

#### Fields
- `"coreVersion"` - If set, this module is assumed to have been deprecated by a core update, this field is the core version number as a string.
- `"reason"` - A human readable string explaining why the package was deprecated.
- `"alternatives"` - An array of objects each providing data about another package which could act as a replacement for this one.
    - `alternatives.name` - The `name` property of the alternative package.
    - `alternatives.manifest` - The URL of the `manifest.json` file for the alternative package, from which it can be downloaded.

```json
"deprecated": {
  "coreVersion": "0.7.0",
  "reason": "This was added to foundry core.",
  "alternatives": [
    {
      "name": "module_name",
      "manifest": "https://link.com/to/manifest.json"
    }
  ]
}
```
