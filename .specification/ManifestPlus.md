The Manifest+ specification is an unofficial community developed extension of the official Foundry manifest intended to add additional data which can be used by packages within Foundry and by external application.

This specification was developed by The League of FVTT developers. While the Core Foundry software simply ignores these additions, the full data of the manifest is still available to packages running within Foundry. Additionally, a number of external applications including The Bazaar package browser on The Forge use this extended data to give users a more rich experience by adding cover images, icons, enhanced contact details, and more.

## Package Manifest Standard Fields
The Foundry manifest contains a number of required and optional fields which act as metadata for your package. The official properties are documented in the official Core docs at the [Introduction to Module Development](https://foundryvtt.com/article/module-development/) page.

Manifest+ does not replace the standard manifest, but enhances it. Most of the properties added here don't touch any of the Core files at all. The exception is the `authors` field.

{"gitdown": "include", "file": "./sections/authors.md"}

## Manifest+

All Manifest+ properties are *optional* but they are all usful. We recommend including as many of these properties as reasonable in order to provide enriched metadata.

{"gitdown": "include", "file": "./sections/version.md"}

{"gitdown": "include", "file": "./sections/media.md"}

{"gitdown": "include", "file": "./sections/library.md"}

{"gitdown": "include", "file": "./sections/includes.md"}

{"gitdown": "include", "file": "./sections/deprecated.md"}

{"gitdown": "include", "file": "./sections/conflicts.md"}
