"use strict";
exports.validateModule = validate24;
const schema27 = {
  $id: "validateModule",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  type: "object",
  allOf: [{ $ref: "../shared/properties/module.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema28 = {
  $id: "shared/properties/module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  type: "object",
  allOf: [{ $ref: "base-module.json" }],
  properties: {
    authors: { $ref: "../definitions/authors.json#/definitions/authors" },
  },
};
const schema29 = {
  $id: "shared/properties/base-module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared base for module.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: { $ref: "../definitions/module.json#/definitions/manifest" },
    packs: { $ref: "../definitions/module.json#/definitions/packs" },
    system: { $ref: "../definitions/module.json#/definitions/system" },
  },
};
const schema52 = {
  description:
    "A stable URL that describes the latest release version of your manifest file.",
  examples: ["https://someaddress.com/module.json"],
  title: "Manifest",
  type: "string",
};
const schema53 = {
  items: {
    required: ["module", "name", "label", "path", "entity"],
    properties: {
      system: {
        description:
          'A system ID or array of system IDs which are required in order to use this module. For example, specifying "system": "dnd5e" will only allow the module to be used by Worlds which are running the dnd5e game system.',
        examples: ["dnd5e"],
        oneOf: [
          { type: "string" },
          { items: { type: "string" }, type: "array" },
        ],
        title: "Pack System",
        errorMessage: "should be a string or array of strings",
      },
      entity: {
        description:
          "Each compendium pack must designate a specific Entity type that it contains.",
        examples: [
          "Actor",
          "Item",
          "Scene",
          "JournalEntry",
          "Macro",
          "RollTable",
          "Playlist",
        ],
        title: "Pack Entity",
        type: "string",
      },
      label: {
        description:
          "The compendium pack label - this should be a human readable string label which is displayed in the Compendium sidebar in-game.",
        examples: ["Pack Title"],
        title: "Pack Label",
        type: "string",
      },
      module: {
        description:
          "The module attribute of each compendium pack designates which content module provided the pack. If coming from a system this field can be excluded or list the system name.",
        examples: ["module-name", "system-name"],
        title: "Pack Module",
        type: "string",
      },
      name: {
        description:
          "The compendium pack name - this should be a unique lower-case string with no special characters.",
        examples: ["pack-name"],
        title: "Pack Name",
        type: "string",
      },
      path: {
        description:
          "The path for each compendium pack should designate a database file with the .db extension.",
        examples: ["./packs/pack-name.db"],
        title: "Pack Path",
        type: "string",
      },
    },
    description: "An object defining a single compendium pack.",
    title: "Pack",
    type: "object",
  },
  description: "An array of objects that define all compendium packs.",
  title: "Packs",
  type: "array",
};
const schema54 = {
  description:
    'A system ID or array of system IDs which are required in order to use this module. For example, specifying "system": "dnd5e" will only allow the module to be used by Worlds which are running the dnd5e game system.',
  examples: ["dnd5e"],
  oneOf: [{ type: "string" }, { items: { type: "string" }, type: "array" }],
  title: "System",
  errorMessage: "should be a string or array of strings",
};
const schema30 = {
  $id: "shared/properties/base.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for module.json & system.json",
  type: "object",
  required: [
    "name",
    "title",
    "description",
    "author",
    "version",
    "minimumCoreVersion",
  ],
  properties: {
    author: { $ref: "../definitions/base.json#/definitions/author" },
    bugs: { $ref: "../definitions/base.json#/definitions/bugs" },
    changelog: { $ref: "../definitions/base.json#/definitions/changelog" },
    compatibleCoreVersion: {
      $ref: "../definitions/base.json#/definitions/compatibleCoreVersion",
    },
    dependencies: {
      $ref: "../definitions/base.json#/definitions/dependencies",
    },
    description: { $ref: "../definitions/base.json#/definitions/description" },
    download: { $ref: "../definitions/base.json#/definitions/download" },
    esmodules: { $ref: "../definitions/base.json#/definitions/esmodules" },
    languages: { $ref: "../definitions/base.json#/definitions/languages" },
    license: { $ref: "../definitions/base.json#/definitions/license" },
    minimumCoreVersion: {
      $ref: "../definitions/base.json#/definitions/minimumCoreVersion",
    },
    name: { $ref: "../definitions/base.json#/definitions/name" },
    readme: { $ref: "../definitions/base.json#/definitions/readme" },
    scripts: { $ref: "../definitions/base.json#/definitions/scripts" },
    socket: { $ref: "../definitions/base.json#/definitions/socket" },
    styles: { $ref: "../definitions/base.json#/definitions/styles" },
    title: { $ref: "../definitions/base.json#/definitions/title" },
    url: { $ref: "../definitions/base.json#/definitions/url" },
    version: { $ref: "../definitions/base.json#/definitions/version" },
  },
};
const schema32 = {
  description:
    "Provide your name as the package creator. This field can be any string if you wish to include an email address or other contact information also.",
  title: "Package Author",
  type: "string",
};
const schema33 = {
  description:
    "A publicly accessible URL where issues, suggestions, and bug reports may be filed.",
  title: "Bugs URL",
  type: "string",
};
const schema34 = {
  description:
    "A publicly accessible URL where update and release notes about the package may be found.",
  title: "Changelog URL",
  type: "string",
};
const schema35 = {
  description:
    "Specify the latest Foundry VTT version with which this system's features are confirmed to function properly.",
  examples: ["0.7.9"],
  title: "Compatible Core Version",
  type: "string",
};
const schema36 = {
  description:
    "Packages can require other modules, systems, or worlds be installed to allow their use. If a package has been installed with dependencies, but its dependencies are missing it cannot be enabled.",
  items: {
    properties: {
      manifest: {
        description:
          "The manifest attribute provides an explicit manifest URL to be used for downloading the dependency. If a manifest is not provided, the dependency package must exist in the Foundry VTT website directory.",
        examples: [
          "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/master/module/module.json",
        ],
        title: "Manifest URL",
        type: "string",
      },
      name: {
        description:
          "Dependency entries require the name attribute. If only a name is provided, additional details about the package will be discovered from the Foundry VTT website listing.",
        examples: ["dice-so-nice"],
        title: "Package Name",
        type: "string",
      },
      type: {
        description:
          "The type attribute instructs Foundry VTT that the dependency may be on a different type of package. By default dependencies are assumed to be module, so if you want to depend on a system or world you should be explicit.",
        enum: ["module", "system", "world"],
        examples: ["module", "system", "world"],
        title: "Package Type",
      },
    },
    required: ["name"],
    title: "Dependency Entry",
    type: "object",
  },
  title: "Dependencies",
  type: "array",
};
const schema37 = {
  description:
    "This field can contain a more lengthy description of the module. This text can be used to describe the functionality, list contact information, provide recommendations to contributors or testers, or any other information you feel is important to provide. This field can contain HTML to structure and style your text.",
  title: "Package Description",
  type: "string",
};
const schema38 = {
  description:
    "A public URL that provides a zip archive of the package for the manifest version which points to it. The archive at this URL is retrieved during the installation or update process.",
  title: "Download URL",
  type: "string",
};
const schema39 = {
  description:
    "In addition to including traditional JavaScript script files, you may also include JS files which use the newer ES module specification. These files are identified separately in the manifest so they may be correctly loaded as an ES module rather than a script.",
  items: {
    description:
      "An ES module file path relative to the root directory of the manifest.",
    examples: ["index.js"],
    title: "ES Module File",
    type: "string",
  },
  title: "ES Modules",
  type: "array",
};
const schema40 = {
  description:
    "The package may designate an array of languages specifications that it supports by default. Each element in the languages array is an object which defines the language tag, label, and path to its localization file.",
  items: {
    properties: {
      lang: {
        description:
          "A language code in lower-case letters, for example 'en' for English. See: https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes",
        examples: ["en"],
        title: "Language Code",
        type: "string",
      },
      name: {
        description: "The formal and readable name for the language.",
        examples: ["English"],
        title: "Language Name",
        type: "string",
      },
      path: {
        description:
          "A file path relative to the root directory of the manifest where localization strings are provided in JSON format.",
        examples: ["lang/en.json"],
        title: "Language Path",
        type: "string",
      },
    },
    required: ["lang", "name", "path"],
    title: "Language Entry",
    type: "object",
  },
  title: "Languages",
  type: "array",
};
const schema41 = {
  description:
    "A path to a license file relative to the root directory of the manifest or a publicly accessible URL which contains the software license that applies to this package.\n\n",
  examples: ["LICENSE"],
  title: "License",
  type: "string",
};
const schema42 = {
  description:
    "Specify the latest Foundry VTT version which this package features are confirmed to function properly.",
  examples: ["0.7.9"],
  title: "Minimum Core Version",
  type: "string",
};
const schema43 = {
  description:
    "Choose a unique package identifier. This should be an all lower-case string with no special characters. This name must align with the name of the parent directory within which you create the package.",
  examples: ["my-package-name"],
  title: "Package Name",
  type: "string",
};
const schema44 = {
  description:
    "A path to a readme file relative to the root package folder or a publicly accessible URL which contains instructions or information about the package.",
  examples: [
    "README.md",
    "https://github.com/my-user-or-org/my-package/blob/main/README.md",
  ],
  title: "Read Me",
  type: "string",
};
const schema45 = {
  description:
    "An array of JavaScript file paths included whenever this package is enabled. Each listed script path should be relative to the package root directory. All scripts which exist will be automatically included in the game session and loaded in their listed order.",
  items: {
    description:
      "JavaScript file path; should be relative to the package root directory.",
    examples: ["ascript.js"],
    title: "Script Entry",
    type: "string",
  },
  title: "Scripts",
  type: "array",
};
const schema46 = {
  description:
    "A package may request a specialized socket namespace to be provided allowing data messages to be passed between connected clients. If set to true, a socket event will be handled by the server with the event name `module.{name}` or `system.{name}` depending on your package type. This event name relays arbitrary data packets between the sending client and all other connected clients.",
  examples: [true],
  title: "Socket",
  type: "boolean",
};
const schema47 = {
  description:
    "You can designate CSS files which are included in the game session whenever this package is enabled. Each listed stylesheet file path should be relative to the system root directory. All stylesheets which exist will be automatically included in the game session and loaded in their listed order.",
  items: {
    description:
      "CSS file path; should be relative to the system root directory.",
    examples: ["styles.css"],
    title: "Style Entry",
    type: "string",
  },
  title: "Styles",
  type: "array",
};
const schema48 = {
  description:
    "Provide a human readable title for the package which is displayed as the visible name in the Foundry VTT setup menu and elsewhere.",
  examples: ["A Module ...", "A System ..."],
  title: "Title",
  type: "string",
};
const schema49 = {
  description:
    "A public URL that links to the repository or documentation pages for the package. This link is displayed to users allowing them to find more information about your package. If your package is hosted in version control like GitHub or GitLab, linking to the repository in this field is a good choice.",
  examples: ["https://github.com/my-user-or-org/my-package"],
  title: "URL",
  type: "string",
};
const schema50 = {
  description:
    "The package version number can be a number or a string which denotes the version of your package. We recommend using semantic versioning but this is not strictly required. When making changes to your package, incrementing the version number in your manifest file is used to signal to users that an update is available.",
  errorMessage: "should be a string or number",
  examples: ["1.0.0"],
  oneOf: [{ type: "string" }, { type: "number" }],
  title: "Version",
};
function validate27(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "name" },
        message: "must have required property '" + "name" + "'",
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.title === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "title" },
        message: "must have required property '" + "title" + "'",
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.description === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "description" },
        message: "must have required property '" + "description" + "'",
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.author === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "author" },
        message: "must have required property '" + "author" + "'",
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.version === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "version" },
        message: "must have required property '" + "version" + "'",
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.minimumCoreVersion === undefined) {
      const err5 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: "minimumCoreVersion" },
        message: "must have required property '" + "minimumCoreVersion" + "'",
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.author !== undefined) {
      if (typeof data.author !== "string") {
        const err6 = {
          instancePath: instancePath + "/author",
          schemaPath: "../definitions/base.json#/definitions/author/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.bugs !== undefined) {
      if (typeof data.bugs !== "string") {
        const err7 = {
          instancePath: instancePath + "/bugs",
          schemaPath: "../definitions/base.json#/definitions/bugs/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.changelog !== undefined) {
      if (typeof data.changelog !== "string") {
        const err8 = {
          instancePath: instancePath + "/changelog",
          schemaPath: "../definitions/base.json#/definitions/changelog/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (typeof data.compatibleCoreVersion !== "string") {
        const err9 = {
          instancePath: instancePath + "/compatibleCoreVersion",
          schemaPath:
            "../definitions/base.json#/definitions/compatibleCoreVersion/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
    if (data.dependencies !== undefined) {
      let data4 = data.dependencies;
      if (Array.isArray(data4)) {
        const len0 = data4.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data5 = data4[i0];
          if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
            if (data5.name === undefined) {
              const err10 = {
                instancePath: instancePath + "/dependencies/" + i0,
                schemaPath:
                  "../definitions/base.json#/definitions/dependencies/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            }
            if (data5.manifest !== undefined) {
              if (typeof data5.manifest !== "string") {
                const err11 = {
                  instancePath:
                    instancePath + "/dependencies/" + i0 + "/manifest",
                  schemaPath:
                    "../definitions/base.json#/definitions/dependencies/items/properties/manifest/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            if (data5.name !== undefined) {
              if (typeof data5.name !== "string") {
                const err12 = {
                  instancePath: instancePath + "/dependencies/" + i0 + "/name",
                  schemaPath:
                    "../definitions/base.json#/definitions/dependencies/items/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
            }
            if (data5.type !== undefined) {
              let data8 = data5.type;
              if (
                !(data8 === "module" || data8 === "system" || data8 === "world")
              ) {
                const err13 = {
                  instancePath: instancePath + "/dependencies/" + i0 + "/type",
                  schemaPath:
                    "../definitions/base.json#/definitions/dependencies/items/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues: schema36.items.properties.type.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err13];
                } else {
                  vErrors.push(err13);
                }
                errors++;
              }
            }
          } else {
            const err14 = {
              instancePath: instancePath + "/dependencies/" + i0,
              schemaPath:
                "../definitions/base.json#/definitions/dependencies/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err14];
            } else {
              vErrors.push(err14);
            }
            errors++;
          }
        }
      } else {
        const err15 = {
          instancePath: instancePath + "/dependencies",
          schemaPath: "../definitions/base.json#/definitions/dependencies/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err15];
        } else {
          vErrors.push(err15);
        }
        errors++;
      }
    }
    if (data.description !== undefined) {
      if (typeof data.description !== "string") {
        const err16 = {
          instancePath: instancePath + "/description",
          schemaPath: "../definitions/base.json#/definitions/description/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    if (data.download !== undefined) {
      if (typeof data.download !== "string") {
        const err17 = {
          instancePath: instancePath + "/download",
          schemaPath: "../definitions/base.json#/definitions/download/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
    }
    if (data.esmodules !== undefined) {
      let data11 = data.esmodules;
      if (Array.isArray(data11)) {
        const len1 = data11.length;
        for (let i1 = 0; i1 < len1; i1++) {
          if (typeof data11[i1] !== "string") {
            const err18 = {
              instancePath: instancePath + "/esmodules/" + i1,
              schemaPath:
                "../definitions/base.json#/definitions/esmodules/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
      } else {
        const err19 = {
          instancePath: instancePath + "/esmodules",
          schemaPath: "../definitions/base.json#/definitions/esmodules/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.languages !== undefined) {
      let data13 = data.languages;
      if (Array.isArray(data13)) {
        const len2 = data13.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data14 = data13[i2];
          if (data14 && typeof data14 == "object" && !Array.isArray(data14)) {
            if (data14.lang === undefined) {
              const err20 = {
                instancePath: instancePath + "/languages/" + i2,
                schemaPath:
                  "../definitions/base.json#/definitions/languages/items/required",
                keyword: "required",
                params: { missingProperty: "lang" },
                message: "must have required property '" + "lang" + "'",
              };
              if (vErrors === null) {
                vErrors = [err20];
              } else {
                vErrors.push(err20);
              }
              errors++;
            }
            if (data14.name === undefined) {
              const err21 = {
                instancePath: instancePath + "/languages/" + i2,
                schemaPath:
                  "../definitions/base.json#/definitions/languages/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err21];
              } else {
                vErrors.push(err21);
              }
              errors++;
            }
            if (data14.path === undefined) {
              const err22 = {
                instancePath: instancePath + "/languages/" + i2,
                schemaPath:
                  "../definitions/base.json#/definitions/languages/items/required",
                keyword: "required",
                params: { missingProperty: "path" },
                message: "must have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err22];
              } else {
                vErrors.push(err22);
              }
              errors++;
            }
            if (data14.lang !== undefined) {
              if (typeof data14.lang !== "string") {
                const err23 = {
                  instancePath: instancePath + "/languages/" + i2 + "/lang",
                  schemaPath:
                    "../definitions/base.json#/definitions/languages/items/properties/lang/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err23];
                } else {
                  vErrors.push(err23);
                }
                errors++;
              }
            }
            if (data14.name !== undefined) {
              if (typeof data14.name !== "string") {
                const err24 = {
                  instancePath: instancePath + "/languages/" + i2 + "/name",
                  schemaPath:
                    "../definitions/base.json#/definitions/languages/items/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err24];
                } else {
                  vErrors.push(err24);
                }
                errors++;
              }
            }
            if (data14.path !== undefined) {
              if (typeof data14.path !== "string") {
                const err25 = {
                  instancePath: instancePath + "/languages/" + i2 + "/path",
                  schemaPath:
                    "../definitions/base.json#/definitions/languages/items/properties/path/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err25];
                } else {
                  vErrors.push(err25);
                }
                errors++;
              }
            }
          } else {
            const err26 = {
              instancePath: instancePath + "/languages/" + i2,
              schemaPath:
                "../definitions/base.json#/definitions/languages/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          }
        }
      } else {
        const err27 = {
          instancePath: instancePath + "/languages",
          schemaPath: "../definitions/base.json#/definitions/languages/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err27];
        } else {
          vErrors.push(err27);
        }
        errors++;
      }
    }
    if (data.license !== undefined) {
      if (typeof data.license !== "string") {
        const err28 = {
          instancePath: instancePath + "/license",
          schemaPath: "../definitions/base.json#/definitions/license/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err28];
        } else {
          vErrors.push(err28);
        }
        errors++;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (typeof data.minimumCoreVersion !== "string") {
        const err29 = {
          instancePath: instancePath + "/minimumCoreVersion",
          schemaPath:
            "../definitions/base.json#/definitions/minimumCoreVersion/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err29];
        } else {
          vErrors.push(err29);
        }
        errors++;
      }
    }
    if (data.name !== undefined) {
      if (typeof data.name !== "string") {
        const err30 = {
          instancePath: instancePath + "/name",
          schemaPath: "../definitions/base.json#/definitions/name/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
    }
    if (data.readme !== undefined) {
      if (typeof data.readme !== "string") {
        const err31 = {
          instancePath: instancePath + "/readme",
          schemaPath: "../definitions/base.json#/definitions/readme/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err31];
        } else {
          vErrors.push(err31);
        }
        errors++;
      }
    }
    if (data.scripts !== undefined) {
      let data22 = data.scripts;
      if (Array.isArray(data22)) {
        const len3 = data22.length;
        for (let i3 = 0; i3 < len3; i3++) {
          if (typeof data22[i3] !== "string") {
            const err32 = {
              instancePath: instancePath + "/scripts/" + i3,
              schemaPath:
                "../definitions/base.json#/definitions/scripts/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err32];
            } else {
              vErrors.push(err32);
            }
            errors++;
          }
        }
      } else {
        const err33 = {
          instancePath: instancePath + "/scripts",
          schemaPath: "../definitions/base.json#/definitions/scripts/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err33];
        } else {
          vErrors.push(err33);
        }
        errors++;
      }
    }
    if (data.socket !== undefined) {
      if (typeof data.socket !== "boolean") {
        const err34 = {
          instancePath: instancePath + "/socket",
          schemaPath: "../definitions/base.json#/definitions/socket/type",
          keyword: "type",
          params: { type: "boolean" },
          message: "must be boolean",
        };
        if (vErrors === null) {
          vErrors = [err34];
        } else {
          vErrors.push(err34);
        }
        errors++;
      }
    }
    if (data.styles !== undefined) {
      let data25 = data.styles;
      if (Array.isArray(data25)) {
        const len4 = data25.length;
        for (let i4 = 0; i4 < len4; i4++) {
          if (typeof data25[i4] !== "string") {
            const err35 = {
              instancePath: instancePath + "/styles/" + i4,
              schemaPath:
                "../definitions/base.json#/definitions/styles/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err35];
            } else {
              vErrors.push(err35);
            }
            errors++;
          }
        }
      } else {
        const err36 = {
          instancePath: instancePath + "/styles",
          schemaPath: "../definitions/base.json#/definitions/styles/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err36];
        } else {
          vErrors.push(err36);
        }
        errors++;
      }
    }
    if (data.title !== undefined) {
      if (typeof data.title !== "string") {
        const err37 = {
          instancePath: instancePath + "/title",
          schemaPath: "../definitions/base.json#/definitions/title/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err37];
        } else {
          vErrors.push(err37);
        }
        errors++;
      }
    }
    if (data.url !== undefined) {
      if (typeof data.url !== "string") {
        const err38 = {
          instancePath: instancePath + "/url",
          schemaPath: "../definitions/base.json#/definitions/url/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err38];
        } else {
          vErrors.push(err38);
        }
        errors++;
      }
    }
    if (data.version !== undefined) {
      let data29 = data.version;
      const _errs78 = errors;
      let valid32 = false;
      let passing0 = null;
      const _errs79 = errors;
      if (typeof data29 !== "string") {
        const err39 = {
          instancePath: instancePath + "/version",
          schemaPath:
            "../definitions/base.json#/definitions/version/oneOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err39];
        } else {
          vErrors.push(err39);
        }
        errors++;
      }
      var _valid0 = _errs79 === errors;
      if (_valid0) {
        valid32 = true;
        passing0 = 0;
      }
      const _errs81 = errors;
      if (!(typeof data29 == "number" && isFinite(data29))) {
        const err40 = {
          instancePath: instancePath + "/version",
          schemaPath:
            "../definitions/base.json#/definitions/version/oneOf/1/type",
          keyword: "type",
          params: { type: "number" },
          message: "must be number",
        };
        if (vErrors === null) {
          vErrors = [err40];
        } else {
          vErrors.push(err40);
        }
        errors++;
      }
      var _valid0 = _errs81 === errors;
      if (_valid0 && valid32) {
        valid32 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid32 = true;
          passing0 = 1;
        }
      }
      if (!valid32) {
        const err41 = {
          instancePath: instancePath + "/version",
          schemaPath: "../definitions/base.json#/definitions/version/oneOf",
          keyword: "oneOf",
          params: { passingSchemas: passing0 },
          message: "must match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err41];
        } else {
          vErrors.push(err41);
        }
        errors++;
      } else {
        errors = _errs78;
        if (vErrors !== null) {
          if (_errs78) {
            vErrors.length = _errs78;
          } else {
            vErrors = null;
          }
        }
      }
      if (errors > 0) {
        const emErrs0 = [];
        for (const err42 of vErrors) {
          if (
            err42.keyword !== "errorMessage" &&
            !err42.emUsed &&
            (err42.instancePath === instancePath + "/version" ||
              (err42.instancePath.indexOf(instancePath + "/version") === 0 &&
                err42.instancePath[instancePath + "/version".length] ===
                  "/")) &&
            err42.schemaPath.indexOf(
              "../definitions/base.json#/definitions/version"
            ) === 0 &&
            err42.schemaPath[
              "../definitions/base.json#/definitions/version".length
            ] === "/"
          ) {
            emErrs0.push(err42);
            err42.emUsed = true;
          }
        }
        if (emErrs0.length) {
          const err43 = {
            instancePath: instancePath + "/version",
            schemaPath:
              "../definitions/base.json#/definitions/version/errorMessage",
            keyword: "errorMessage",
            params: { errors: emErrs0 },
            message: "should be a string or number",
          };
          if (vErrors === null) {
            vErrors = [err43];
          } else {
            vErrors.push(err43);
          }
          errors++;
        }
        const emErrs1 = [];
        for (const err44 of vErrors) {
          if (!err44.emUsed) {
            emErrs1.push(err44);
          }
        }
        vErrors = emErrs1;
        errors = emErrs1.length;
      }
    }
  } else {
    const err45 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err45];
    } else {
      vErrors.push(err45);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
function validate26(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/base-module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (typeof data.manifest !== "string") {
        const err0 = {
          instancePath: instancePath + "/manifest",
          schemaPath: "../definitions/module.json#/definitions/manifest/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.packs !== undefined) {
      let data1 = data.packs;
      if (Array.isArray(data1)) {
        const len0 = data1.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data2 = data1[i0];
          if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
            if (data2.module === undefined) {
              const err1 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/module.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "module" },
                message: "must have required property '" + "module" + "'",
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (data2.name === undefined) {
              const err2 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/module.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if (data2.label === undefined) {
              const err3 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/module.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "label" },
                message: "must have required property '" + "label" + "'",
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            if (data2.path === undefined) {
              const err4 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/module.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "path" },
                message: "must have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
            if (data2.entity === undefined) {
              const err5 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/module.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "entity" },
                message: "must have required property '" + "entity" + "'",
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            if (data2.system !== undefined) {
              let data3 = data2.system;
              const _errs11 = errors;
              let valid7 = false;
              let passing0 = null;
              const _errs12 = errors;
              if (typeof data3 !== "string") {
                const err6 = {
                  instancePath: instancePath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/system/oneOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err6];
                } else {
                  vErrors.push(err6);
                }
                errors++;
              }
              var _valid0 = _errs12 === errors;
              if (_valid0) {
                valid7 = true;
                passing0 = 0;
              }
              const _errs14 = errors;
              if (Array.isArray(data3)) {
                const len1 = data3.length;
                for (let i1 = 0; i1 < len1; i1++) {
                  if (typeof data3[i1] !== "string") {
                    const err7 = {
                      instancePath:
                        instancePath + "/packs/" + i0 + "/system/" + i1,
                      schemaPath:
                        "../definitions/module.json#/definitions/packs/items/properties/system/oneOf/1/items/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err7];
                    } else {
                      vErrors.push(err7);
                    }
                    errors++;
                  }
                }
              } else {
                const err8 = {
                  instancePath: instancePath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/system/oneOf/1/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array",
                };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var _valid0 = _errs14 === errors;
              if (_valid0 && valid7) {
                valid7 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid7 = true;
                  passing0 = 1;
                }
              }
              if (!valid7) {
                const err9 = {
                  instancePath: instancePath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/system/oneOf",
                  keyword: "oneOf",
                  params: { passingSchemas: passing0 },
                  message: "must match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              } else {
                errors = _errs11;
                if (vErrors !== null) {
                  if (_errs11) {
                    vErrors.length = _errs11;
                  } else {
                    vErrors = null;
                  }
                }
              }
              if (errors > 0) {
                const emErrs0 = [];
                for (const err10 of vErrors) {
                  if (
                    err10.keyword !== "errorMessage" &&
                    !err10.emUsed &&
                    (err10.instancePath ===
                      instancePath + "/packs/" + i0 + "/system" ||
                      (err10.instancePath.indexOf(
                        instancePath + "/packs/" + i0 + "/system"
                      ) === 0 &&
                        err10.instancePath[
                          instancePath + "/packs/" + i0 + "/system".length
                        ] === "/")) &&
                    err10.schemaPath.indexOf(
                      "../definitions/module.json#/definitions/packs/items/properties/system"
                    ) === 0 &&
                    err10.schemaPath[
                      "../definitions/module.json#/definitions/packs/items/properties/system"
                        .length
                    ] === "/"
                  ) {
                    emErrs0.push(err10);
                    err10.emUsed = true;
                  }
                }
                if (emErrs0.length) {
                  const err11 = {
                    instancePath: instancePath + "/packs/" + i0 + "/system",
                    schemaPath:
                      "../definitions/module.json#/definitions/packs/items/properties/system/errorMessage",
                    keyword: "errorMessage",
                    params: { errors: emErrs0 },
                    message: "should be a string or array of strings",
                  };
                  if (vErrors === null) {
                    vErrors = [err11];
                  } else {
                    vErrors.push(err11);
                  }
                  errors++;
                }
                const emErrs1 = [];
                for (const err12 of vErrors) {
                  if (!err12.emUsed) {
                    emErrs1.push(err12);
                  }
                }
                vErrors = emErrs1;
                errors = emErrs1.length;
              }
            }
            if (data2.entity !== undefined) {
              if (typeof data2.entity !== "string") {
                const err13 = {
                  instancePath: instancePath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/entity/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err13];
                } else {
                  vErrors.push(err13);
                }
                errors++;
              }
            }
            if (data2.label !== undefined) {
              if (typeof data2.label !== "string") {
                const err14 = {
                  instancePath: instancePath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/label/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
            }
            if (data2.module !== undefined) {
              if (typeof data2.module !== "string") {
                const err15 = {
                  instancePath: instancePath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/module/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err15];
                } else {
                  vErrors.push(err15);
                }
                errors++;
              }
            }
            if (data2.name !== undefined) {
              if (typeof data2.name !== "string") {
                const err16 = {
                  instancePath: instancePath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
                }
                errors++;
              }
            }
            if (data2.path !== undefined) {
              if (typeof data2.path !== "string") {
                const err17 = {
                  instancePath: instancePath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../definitions/module.json#/definitions/packs/items/properties/path/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err17];
                } else {
                  vErrors.push(err17);
                }
                errors++;
              }
            }
          } else {
            const err18 = {
              instancePath: instancePath + "/packs/" + i0,
              schemaPath:
                "../definitions/module.json#/definitions/packs/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
      } else {
        const err19 = {
          instancePath: instancePath + "/packs",
          schemaPath: "../definitions/module.json#/definitions/packs/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
    if (data.system !== undefined) {
      let data10 = data.system;
      const _errs30 = errors;
      let valid11 = false;
      let passing1 = null;
      const _errs31 = errors;
      if (typeof data10 !== "string") {
        const err20 = {
          instancePath: instancePath + "/system",
          schemaPath:
            "../definitions/module.json#/definitions/system/oneOf/0/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err20];
        } else {
          vErrors.push(err20);
        }
        errors++;
      }
      var _valid1 = _errs31 === errors;
      if (_valid1) {
        valid11 = true;
        passing1 = 0;
      }
      const _errs33 = errors;
      if (Array.isArray(data10)) {
        const len2 = data10.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (typeof data10[i2] !== "string") {
            const err21 = {
              instancePath: instancePath + "/system/" + i2,
              schemaPath:
                "../definitions/module.json#/definitions/system/oneOf/1/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err21];
            } else {
              vErrors.push(err21);
            }
            errors++;
          }
        }
      } else {
        const err22 = {
          instancePath: instancePath + "/system",
          schemaPath:
            "../definitions/module.json#/definitions/system/oneOf/1/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err22];
        } else {
          vErrors.push(err22);
        }
        errors++;
      }
      var _valid1 = _errs33 === errors;
      if (_valid1 && valid11) {
        valid11 = false;
        passing1 = [passing1, 1];
      } else {
        if (_valid1) {
          valid11 = true;
          passing1 = 1;
        }
      }
      if (!valid11) {
        const err23 = {
          instancePath: instancePath + "/system",
          schemaPath: "../definitions/module.json#/definitions/system/oneOf",
          keyword: "oneOf",
          params: { passingSchemas: passing1 },
          message: "must match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err23];
        } else {
          vErrors.push(err23);
        }
        errors++;
      } else {
        errors = _errs30;
        if (vErrors !== null) {
          if (_errs30) {
            vErrors.length = _errs30;
          } else {
            vErrors = null;
          }
        }
      }
      if (errors > 0) {
        const emErrs2 = [];
        for (const err24 of vErrors) {
          if (
            err24.keyword !== "errorMessage" &&
            !err24.emUsed &&
            (err24.instancePath === instancePath + "/system" ||
              (err24.instancePath.indexOf(instancePath + "/system") === 0 &&
                err24.instancePath[instancePath + "/system".length] === "/")) &&
            err24.schemaPath.indexOf(
              "../definitions/module.json#/definitions/system"
            ) === 0 &&
            err24.schemaPath[
              "../definitions/module.json#/definitions/system".length
            ] === "/"
          ) {
            emErrs2.push(err24);
            err24.emUsed = true;
          }
        }
        if (emErrs2.length) {
          const err25 = {
            instancePath: instancePath + "/system",
            schemaPath:
              "../definitions/module.json#/definitions/system/errorMessage",
            keyword: "errorMessage",
            params: { errors: emErrs2 },
            message: "should be a string or array of strings",
          };
          if (vErrors === null) {
            vErrors = [err25];
          } else {
            vErrors.push(err25);
          }
          errors++;
        }
        const emErrs3 = [];
        for (const err26 of vErrors) {
          if (!err26.emUsed) {
            emErrs3.push(err26);
          }
        }
        vErrors = emErrs3;
        errors = emErrs3.length;
      }
    }
  } else {
    const err27 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err27];
    } else {
      vErrors.push(err27);
    }
    errors++;
  }
  validate26.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  description:
    "Instead of listing a single author name you may also provide an array of authors, each of which is an object that can contain the keys: 'name', 'email', and 'url'.",
  items: {
    $ref: "#/definitions/properties-author",
    title: "Author Entry",
    type: "object",
  },
  title: "Authors",
  type: "array",
};
const schema57 = {
  properties: {
    email: {
      description: "An email address.",
      examples: ["admin@foundryvtt.com"],
      title: "Author Email",
      type: "string",
    },
    name: {
      description: "An author name.",
      examples: ["Atropos"],
      title: "Author Name",
      type: "string",
    },
    url: {
      description: "An URL for the author.",
      examples: ["https://foundryvtt.com"],
      title: "Author URL",
      type: "string",
    },
  },
  required: ["name"],
};
function validate33(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          instancePath: instancePath + "/" + i0,
          schemaPath: "#/items/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err1 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            keyword: "required",
            params: { missingProperty: "name" },
            message: "must have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err2 = {
              instancePath: instancePath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err3 = {
              instancePath: instancePath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err4 = {
              instancePath: instancePath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err5 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "array" },
      message: "must be array",
    };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate25(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate33(data.authors, {
          instancePath: instancePath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate33.errors
            : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate25.errors = vErrors;
  return errors === 0;
}
function validate24(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModule" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate25(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.instancePath === instancePath &&
        err1.keyword in emErrors0 &&
        err1.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err1.schemaPath.slice(1))
      ) {
        emErrors0[err1.keyword].push(err1);
        err1.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err2 = {
          instancePath,
          schemaPath: "#/errorMessage",
          keyword: "errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema27.errorMessage[key0],
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    const emErrs0 = [];
    for (const err3 of vErrors) {
      if (!err3.emUsed) {
        emErrs0.push(err3);
      }
    }
    vErrors = emErrs0;
    errors = emErrs0.length;
  }
  validate24.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate36;
const schema58 = {
  $id: "validateModulePlus",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  type: "object",
  allOf: [{ $ref: "../shared/properties/module+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema59 = {
  $id: "shared/properties/module+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-module.json" }],
  properties: {
    authors: { $ref: "../definitions/authors.json#/definitions/authors+" },
  },
};
const schema60 = {
  $id: "shared/properties/base-manifest+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared base for manifest+",
  type: "object",
  properties: {
    conflicts: {
      $ref: "../definitions/base-manifest+.json#/definitions/conflicts",
    },
    deprecated: {
      $ref: "../definitions/base-manifest+.json#/definitions/deprecated",
    },
    includes: {
      $ref: "../definitions/base-manifest+.json#/definitions/includes",
    },
    library: {
      $ref: "../definitions/base-manifest+.json#/definitions/library",
    },
    manifestPlusVersion: {
      $ref: "../definitions/base-manifest+.json#/definitions/manifestPlusVersion",
    },
    media: { $ref: "../definitions/base-manifest+.json#/definitions/media" },
  },
};
const schema62 = {
  description:
    "The `conflicts` field is similar to the `dependencies` field in the core Foundry VTT manifest specification, but provides a mapping of packages which can not interoperate with the given package.",
  items: {
    properties: {
      name: {
        description: "The name of the conflict package.",
        examples: ["dice-so-nice"],
        title: "Conflict Package Name",
        type: "string",
      },
      type: {
        description: "The type of the conflict package",
        enum: ["module", "system", "world"],
        examples: ["module", "system", "world"],
        title: "Conflict Package Type",
      },
      versionMax: {
        description:
          "Defines a maximum version number for the package within which the conflict occurs.",
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "Conflict Maximum Version",
      },
      versionMin: {
        description:
          "Defines a minimum version number for the package within which the conflict occurs.",
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "Conflict Minimum Version",
      },
    },
    required: ["name", "type"],
    title: "Conflict Entry",
    type: "object",
  },
  title: "Conflicts",
  type: "array",
};
const schema63 = {
  description:
    "This field is intended to be added to the manifest of a package that is no longer being maintained and / or is no longer functional / useful.",
  properties: {
    alternatives: {
      description:
        "An array of objects each providing data about another package which could act as a replacement for the deprecated package.",
      items: {
        properties: {
          name: {
            description: "Deprecated package name",
            examples: ["module-name"],
            title: "Alternate Package Name",
            type: "string",
          },
          manifest: {
            description:
              "The URL of the manifest for the alternative package from which it can be downloaded.",
            examples: ["https://link.com/to/module.json"],
            title: "Alternate Package Manifest",
            type: "string",
          },
        },
        required: ["name", "manifest"],
        title: "Alternative Entry",
        type: "object",
      },
      title: "Alternatives",
      type: "array",
    },
    coreVersion: {
      description:
        "If set the package is assumed to be a module that has been deprecated by a Foundry VTT core update. This field is the core version number as a string.",
      examples: ["0.7.9"],
      title: "Core Version",
      type: "string",
    },
    reason: {
      description:
        "A human-readable string explaining why the package was deprecated.",
      examples: ["This was added to foundry core."],
      title: "Reason",
      type: "string",
    },
  },
  title: "Deprecated",
  type: "object",
};
const schema64 = {
  description:
    "The `includes` field is an array of strings where each string is a relative file path that should be included in the package zip archive.",
  items: {
    examples: [
      "relative/path/to/files/script.js",
      "relative/path/to/templates/template.html",
      "path/to/image/assets/folder",
    ],
    title: "Include Entry",
    type: "string",
  },
  title: "Includes",
  type: "array",
};
const schema65 = {
  description:
    "The `library` field is a boolean that indicates whether the package is a library intended for other packages to depend on and consume.",
  examples: [true],
  title: "Library",
  type: "boolean",
};
const schema66 = {
  description: "Denotes which version of Manifest+ you have implemented.",
  examples: ["1.1.0"],
  title: "Manifest+ Version",
  type: "string",
};
const schema67 = {
  description:
    "An array of objects that each provide data for a single multimedia item. This data includes a `type` field which indicates what kind of media is being provided as well as an `url` field which provides the address of the media resource.",
  items: { $ref: "#/definitions/media-item-loose" },
  title: "Media",
  type: "array",
};
const schema68 = {
  description: "An object that provides data for a single multimedia item.",
  required: ["type", "url"],
  title: "Media Entry",
  type: "object",
  properties: {
    type: {
      description: "Indicates what kind of media.",
      enum: ["cover", "icon", "screenshot", "video"],
      title: "Media Type",
    },
    url: {
      description: "Public URL of the media resource.",
      title: "Media URL",
      type: "string",
    },
    loop: {
      description:
        "Optional field specific to video media. If loop is set to true, the video is expected to be treated as an animated image, like a GIF (i.e. muted and looped).",
      title: "Video Loop",
      type: "boolean",
    },
    thumbnail: {
      description: "Optional URL to provide a video thumbnail.",
      title: "Video Thumbnail",
      type: "string",
    },
  },
};
function validate40(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.type === undefined) {
          const err0 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/media-item-loose/required",
            keyword: "required",
            params: { missingProperty: "type" },
            message: "must have required property '" + "type" + "'",
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (data0.url === undefined) {
          const err1 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/media-item-loose/required",
            keyword: "required",
            params: { missingProperty: "url" },
            message: "must have required property '" + "url" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.type !== undefined) {
          let data1 = data0.type;
          if (
            !(
              data1 === "cover" ||
              data1 === "icon" ||
              data1 === "screenshot" ||
              data1 === "video"
            )
          ) {
            const err2 = {
              instancePath: instancePath + "/" + i0 + "/type",
              schemaPath: "#/definitions/media-item-loose/properties/type/enum",
              keyword: "enum",
              params: { allowedValues: schema68.properties.type.enum },
              message: "must be equal to one of the allowed values",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err3 = {
              instancePath: instancePath + "/" + i0 + "/url",
              schemaPath: "#/definitions/media-item-loose/properties/url/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data0.loop !== undefined) {
          if (typeof data0.loop !== "boolean") {
            const err4 = {
              instancePath: instancePath + "/" + i0 + "/loop",
              schemaPath: "#/definitions/media-item-loose/properties/loop/type",
              keyword: "type",
              params: { type: "boolean" },
              message: "must be boolean",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
        if (data0.thumbnail !== undefined) {
          if (typeof data0.thumbnail !== "string") {
            const err5 = {
              instancePath: instancePath + "/" + i0 + "/thumbnail",
              schemaPath:
                "#/definitions/media-item-loose/properties/thumbnail/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
      } else {
        const err6 = {
          instancePath: instancePath + "/" + i0,
          schemaPath: "#/definitions/media-item-loose/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
  } else {
    const err7 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "array" },
      message: "must be array",
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
  }
  validate40.errors = vErrors;
  return errors === 0;
}
function validate38(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/base-manifest+.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.conflicts !== undefined) {
      let data0 = data.conflicts;
      if (Array.isArray(data0)) {
        const len0 = data0.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data1 = data0[i0];
          if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
            if (data1.name === undefined) {
              const err0 = {
                instancePath: instancePath + "/conflicts/" + i0,
                schemaPath:
                  "../definitions/base-manifest+.json#/definitions/conflicts/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
            if (data1.type === undefined) {
              const err1 = {
                instancePath: instancePath + "/conflicts/" + i0,
                schemaPath:
                  "../definitions/base-manifest+.json#/definitions/conflicts/items/required",
                keyword: "required",
                params: { missingProperty: "type" },
                message: "must have required property '" + "type" + "'",
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (data1.name !== undefined) {
              if (typeof data1.name !== "string") {
                const err2 = {
                  instancePath: instancePath + "/conflicts/" + i0 + "/name",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
            if (data1.type !== undefined) {
              let data3 = data1.type;
              if (
                !(data3 === "module" || data3 === "system" || data3 === "world")
              ) {
                const err3 = {
                  instancePath: instancePath + "/conflicts/" + i0 + "/type",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/type/enum",
                  keyword: "enum",
                  params: {
                    allowedValues: schema62.items.properties.type.enum,
                  },
                  message: "must be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
            }
            if (data1.versionMax !== undefined) {
              let data4 = data1.versionMax;
              const _errs10 = errors;
              let valid5 = false;
              let passing0 = null;
              const _errs11 = errors;
              if (typeof data4 !== "string") {
                const err4 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
              }
              var _valid0 = _errs11 === errors;
              if (_valid0) {
                valid5 = true;
                passing0 = 0;
              }
              const _errs13 = errors;
              if (!(typeof data4 == "number" && isFinite(data4))) {
                const err5 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
              var _valid0 = _errs13 === errors;
              if (_valid0 && valid5) {
                valid5 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid5 = true;
                  passing0 = 1;
                }
              }
              if (!valid5) {
                const err6 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf",
                  keyword: "oneOf",
                  params: { passingSchemas: passing0 },
                  message: "must match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err6];
                } else {
                  vErrors.push(err6);
                }
                errors++;
              } else {
                errors = _errs10;
                if (vErrors !== null) {
                  if (_errs10) {
                    vErrors.length = _errs10;
                  } else {
                    vErrors = null;
                  }
                }
              }
              if (errors > 0) {
                const emErrs0 = [];
                for (const err7 of vErrors) {
                  if (
                    err7.keyword !== "errorMessage" &&
                    !err7.emUsed &&
                    (err7.instancePath ===
                      instancePath + "/conflicts/" + i0 + "/versionMax" ||
                      (err7.instancePath.indexOf(
                        instancePath + "/conflicts/" + i0 + "/versionMax"
                      ) === 0 &&
                        err7.instancePath[
                          instancePath +
                            "/conflicts/" +
                            i0 +
                            "/versionMax".length
                        ] === "/")) &&
                    err7.schemaPath.indexOf(
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                    ) === 0 &&
                    err7.schemaPath[
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                        .length
                    ] === "/"
                  ) {
                    emErrs0.push(err7);
                    err7.emUsed = true;
                  }
                }
                if (emErrs0.length) {
                  const err8 = {
                    instancePath:
                      instancePath + "/conflicts/" + i0 + "/versionMax",
                    schemaPath:
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/errorMessage",
                    keyword: "errorMessage",
                    params: { errors: emErrs0 },
                    message: "should be a string or number",
                  };
                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }
                  errors++;
                }
                const emErrs1 = [];
                for (const err9 of vErrors) {
                  if (!err9.emUsed) {
                    emErrs1.push(err9);
                  }
                }
                vErrors = emErrs1;
                errors = emErrs1.length;
              }
            }
            if (data1.versionMin !== undefined) {
              let data5 = data1.versionMin;
              const _errs16 = errors;
              let valid6 = false;
              let passing1 = null;
              const _errs17 = errors;
              if (typeof data5 !== "string") {
                const err10 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/0/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err10];
                } else {
                  vErrors.push(err10);
                }
                errors++;
              }
              var _valid1 = _errs17 === errors;
              if (_valid1) {
                valid6 = true;
                passing1 = 0;
              }
              const _errs19 = errors;
              if (!(typeof data5 == "number" && isFinite(data5))) {
                const err11 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/1/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              var _valid1 = _errs19 === errors;
              if (_valid1 && valid6) {
                valid6 = false;
                passing1 = [passing1, 1];
              } else {
                if (_valid1) {
                  valid6 = true;
                  passing1 = 1;
                }
              }
              if (!valid6) {
                const err12 = {
                  instancePath:
                    instancePath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf",
                  keyword: "oneOf",
                  params: { passingSchemas: passing1 },
                  message: "must match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              } else {
                errors = _errs16;
                if (vErrors !== null) {
                  if (_errs16) {
                    vErrors.length = _errs16;
                  } else {
                    vErrors = null;
                  }
                }
              }
              if (errors > 0) {
                const emErrs2 = [];
                for (const err13 of vErrors) {
                  if (
                    err13.keyword !== "errorMessage" &&
                    !err13.emUsed &&
                    (err13.instancePath ===
                      instancePath + "/conflicts/" + i0 + "/versionMin" ||
                      (err13.instancePath.indexOf(
                        instancePath + "/conflicts/" + i0 + "/versionMin"
                      ) === 0 &&
                        err13.instancePath[
                          instancePath +
                            "/conflicts/" +
                            i0 +
                            "/versionMin".length
                        ] === "/")) &&
                    err13.schemaPath.indexOf(
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                    ) === 0 &&
                    err13.schemaPath[
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                        .length
                    ] === "/"
                  ) {
                    emErrs2.push(err13);
                    err13.emUsed = true;
                  }
                }
                if (emErrs2.length) {
                  const err14 = {
                    instancePath:
                      instancePath + "/conflicts/" + i0 + "/versionMin",
                    schemaPath:
                      "../definitions/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/errorMessage",
                    keyword: "errorMessage",
                    params: { errors: emErrs2 },
                    message: "should be a string or number",
                  };
                  if (vErrors === null) {
                    vErrors = [err14];
                  } else {
                    vErrors.push(err14);
                  }
                  errors++;
                }
                const emErrs3 = [];
                for (const err15 of vErrors) {
                  if (!err15.emUsed) {
                    emErrs3.push(err15);
                  }
                }
                vErrors = emErrs3;
                errors = emErrs3.length;
              }
            }
          } else {
            const err16 = {
              instancePath: instancePath + "/conflicts/" + i0,
              schemaPath:
                "../definitions/base-manifest+.json#/definitions/conflicts/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err16];
            } else {
              vErrors.push(err16);
            }
            errors++;
          }
        }
      } else {
        const err17 = {
          instancePath: instancePath + "/conflicts",
          schemaPath:
            "../definitions/base-manifest+.json#/definitions/conflicts/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
    }
    if (data.deprecated !== undefined) {
      let data6 = data.deprecated;
      if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
        if (data6.alternatives !== undefined) {
          let data7 = data6.alternatives;
          if (Array.isArray(data7)) {
            const len1 = data7.length;
            for (let i1 = 0; i1 < len1; i1++) {
              let data8 = data7[i1];
              if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                if (data8.name === undefined) {
                  const err18 = {
                    instancePath:
                      instancePath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    keyword: "required",
                    params: { missingProperty: "name" },
                    message: "must have required property '" + "name" + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err18];
                  } else {
                    vErrors.push(err18);
                  }
                  errors++;
                }
                if (data8.manifest === undefined) {
                  const err19 = {
                    instancePath:
                      instancePath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    keyword: "required",
                    params: { missingProperty: "manifest" },
                    message: "must have required property '" + "manifest" + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err19];
                  } else {
                    vErrors.push(err19);
                  }
                  errors++;
                }
                if (data8.name !== undefined) {
                  if (typeof data8.name !== "string") {
                    const err20 = {
                      instancePath:
                        instancePath +
                        "/deprecated/alternatives/" +
                        i1 +
                        "/name",
                      schemaPath:
                        "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err20];
                    } else {
                      vErrors.push(err20);
                    }
                    errors++;
                  }
                }
                if (data8.manifest !== undefined) {
                  if (typeof data8.manifest !== "string") {
                    const err21 = {
                      instancePath:
                        instancePath +
                        "/deprecated/alternatives/" +
                        i1 +
                        "/manifest",
                      schemaPath:
                        "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err21];
                    } else {
                      vErrors.push(err21);
                    }
                    errors++;
                  }
                }
              } else {
                const err22 = {
                  instancePath: instancePath + "/deprecated/alternatives/" + i1,
                  schemaPath:
                    "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
          } else {
            const err23 = {
              instancePath: instancePath + "/deprecated/alternatives",
              schemaPath:
                "../definitions/base-manifest+.json#/definitions/deprecated/properties/alternatives/type",
              keyword: "type",
              params: { type: "array" },
              message: "must be array",
            };
            if (vErrors === null) {
              vErrors = [err23];
            } else {
              vErrors.push(err23);
            }
            errors++;
          }
        }
        if (data6.coreVersion !== undefined) {
          if (typeof data6.coreVersion !== "string") {
            const err24 = {
              instancePath: instancePath + "/deprecated/coreVersion",
              schemaPath:
                "../definitions/base-manifest+.json#/definitions/deprecated/properties/coreVersion/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err24];
            } else {
              vErrors.push(err24);
            }
            errors++;
          }
        }
        if (data6.reason !== undefined) {
          if (typeof data6.reason !== "string") {
            const err25 = {
              instancePath: instancePath + "/deprecated/reason",
              schemaPath:
                "../definitions/base-manifest+.json#/definitions/deprecated/properties/reason/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
        }
      } else {
        const err26 = {
          instancePath: instancePath + "/deprecated",
          schemaPath:
            "../definitions/base-manifest+.json#/definitions/deprecated/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err26];
        } else {
          vErrors.push(err26);
        }
        errors++;
      }
    }
    if (data.includes !== undefined) {
      let data13 = data.includes;
      if (Array.isArray(data13)) {
        const len2 = data13.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (typeof data13[i2] !== "string") {
            const err27 = {
              instancePath: instancePath + "/includes/" + i2,
              schemaPath:
                "../definitions/base-manifest+.json#/definitions/includes/items/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err27];
            } else {
              vErrors.push(err27);
            }
            errors++;
          }
        }
      } else {
        const err28 = {
          instancePath: instancePath + "/includes",
          schemaPath:
            "../definitions/base-manifest+.json#/definitions/includes/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err28];
        } else {
          vErrors.push(err28);
        }
        errors++;
      }
    }
    if (data.library !== undefined) {
      if (typeof data.library !== "boolean") {
        const err29 = {
          instancePath: instancePath + "/library",
          schemaPath:
            "../definitions/base-manifest+.json#/definitions/library/type",
          keyword: "type",
          params: { type: "boolean" },
          message: "must be boolean",
        };
        if (vErrors === null) {
          vErrors = [err29];
        } else {
          vErrors.push(err29);
        }
        errors++;
      }
    }
    if (data.manifestPlusVersion !== undefined) {
      if (typeof data.manifestPlusVersion !== "string") {
        const err30 = {
          instancePath: instancePath + "/manifestPlusVersion",
          schemaPath:
            "../definitions/base-manifest+.json#/definitions/manifestPlusVersion/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
    }
    if (data.media !== undefined) {
      if (
        !validate40(data.media, {
          instancePath: instancePath + "/media",
          parentData: data,
          parentDataProperty: "media",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate40.errors
            : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err31 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err31];
    } else {
      vErrors.push(err31);
    }
    errors++;
  }
  validate38.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  description:
    "Instead of listing a single author name you may also provide an array of authors, each of which is an object that can contain the keys: 'name', 'discord', 'email', 'patreon', 'reddit', 'twitter', and 'url'.",
  items: {
    allOf: [
      { $ref: "#/definitions/properties-author" },
      { $ref: "#/definitions/properties-author+" },
    ],
    type: "object",
    title: "Author Entry",
  },
  title: "Authors",
  type: "array",
};
const schema71 = {
  properties: {
    discord: {
      description: "A Discord user ID.",
      examples: ["discordID#0001"],
      title: "Author Discord",
      type: "string",
    },
    "ko-fi": {
      description: "A Ko-fi user name.",
      examples: ["kofiName"],
      title: "Author Ko-fi",
      type: "string",
    },
    patreon: {
      description: "A Patreon user name.",
      examples: ["patreonName"],
      title: "Author Patreon",
      type: "string",
    },
    reddit: {
      description: "A Reddit user name.",
      examples: ["u/RedditUsername"],
      title: "Author Reddit",
      type: "string",
    },
    twitter: {
      description: "A Twitter user handle.",
      examples: ["@TwitterHandle"],
      title: "Author Twitter",
      type: "string",
    },
  },
};
function validate44(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          instancePath: instancePath + "/" + i0,
          schemaPath: "#/items/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err1 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            keyword: "required",
            params: { missingProperty: "name" },
            message: "must have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err2 = {
              instancePath: instancePath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err3 = {
              instancePath: instancePath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err4 = {
              instancePath: instancePath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.discord !== undefined) {
          if (typeof data0.discord !== "string") {
            const err5 = {
              instancePath: instancePath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data0["ko-fi"] !== undefined) {
          if (typeof data0["ko-fi"] !== "string") {
            const err6 = {
              instancePath: instancePath + "/" + i0 + "/ko-fi",
              schemaPath:
                "#/definitions/properties-author+/properties/ko-fi/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err7 = {
              instancePath: instancePath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          if (typeof data0.reddit !== "string") {
            const err8 = {
              instancePath: instancePath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
        if (data0.twitter !== undefined) {
          if (typeof data0.twitter !== "string") {
            const err9 = {
              instancePath: instancePath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err10 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "array" },
      message: "must be array",
    };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate44.errors = vErrors;
  return errors === 0;
}
function validate37(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate38(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
    errors = vErrors.length;
  }
  if (
    !validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate44(data.authors, {
          instancePath: instancePath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate44.errors
            : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate37.errors = vErrors;
  return errors === 0;
}
function validate36(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate37(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.instancePath === instancePath &&
        err1.keyword in emErrors0 &&
        err1.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err1.schemaPath.slice(1))
      ) {
        emErrors0[err1.keyword].push(err1);
        err1.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err2 = {
          instancePath,
          schemaPath: "#/errorMessage",
          keyword: "errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema58.errorMessage[key0],
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    const emErrs0 = [];
    for (const err3 of vErrors) {
      if (!err3.emUsed) {
        emErrs0.push(err3);
      }
    }
    vErrors = emErrs0;
    errors = emErrs0.length;
  }
  validate36.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate47;
const schema72 = {
  $id: "validateSystem",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  type: "object",
  allOf: [{ $ref: "../shared/properties/system.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema73 = {
  $id: "shared/properties/system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  type: "object",
  allOf: [{ $ref: "base-system.json" }],
  properties: {
    authors: { $ref: "../definitions/authors.json#/definitions/authors" },
  },
};
const schema74 = {
  $id: "shared/properties/base-system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared base for system.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    gridDistance: {
      $ref: "../definitions/system.json#/definitions/gridDistance",
    },
    gridUnits: { $ref: "../definitions/system.json#/definitions/gridUnits" },
    initiative: { $ref: "../definitions/system.json#/definitions/initiative" },
    manifest: { $ref: "../definitions/system.json#/definitions/manifest" },
    packs: { $ref: "../definitions/system.json#/definitions/packs" },
    primaryTokenAttribute: {
      $ref: "../definitions/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref: "../definitions/system.json#/definitions/secondaryTokenAttribute",
    },
    templateVersion: {
      $ref: "../definitions/system.json#/definitions/templateVersion",
    },
  },
};
const schema76 = {
  description:
    "This field designates the default amount of distance that a single grid space should typically represent under this game system. This value configures the default value used when a new Scene is created, but can always be changed for each Scene independently.",
  examples: [5],
  title: "Grid Distance",
  type: "integer",
};
const schema77 = {
  description:
    "This field designates the standard unit of measure used to describe distances under this game system. This defines the default value used when new a new Scene is created, but can always be changed for each Scene independently.",
  examples: ["ft, m"],
  title: "Grid Units",
  type: "string",
};
const schema78 = {
  description:
    "Not every game system uses the concept of initiative, but this field provides the default dice rolling formula that can be used to determine the turn order of Tokens within the combat tracker.",
  examples: ["1d20"],
  title: "Initiative",
  type: "string",
};
const schema79 = {
  description:
    "A stable URL that describes the latest release version of your manifest file.",
  examples: ["https://someaddress.com/system.json"],
  title: "Manifest",
  type: "string",
};
const schema80 = {
  items: {
    required: ["system", "name", "label", "path", "entity"],
    properties: {
      system: {
        description:
          "Since you are creating compendium content specifically for your system, be sure to reference that the content inside each compendium pack requires the system by providing the system name that you chose.",
        examples: ["system-name"],
        title: "Pack System",
        type: "string",
      },
      entity: {
        description:
          "Each compendium pack must designate a specific Entity type that it contains.",
        examples: [
          "Actor",
          "Item",
          "Scene",
          "JournalEntry",
          "Macro",
          "RollTable",
          "Playlist",
        ],
        title: "Pack Entity",
        type: "string",
      },
      label: {
        description:
          "The compendium pack label - this should be a human readable string label which is displayed in the Compendium sidebar in-game.",
        examples: ["Pack Title"],
        title: "Pack Label",
        type: "string",
      },
      module: {
        description:
          "The module attribute of each compendium pack designates which content module provided the pack. If coming from a system this field can be excluded or list the system name.",
        examples: ["module-name", "system-name"],
        title: "Pack Module",
        type: "string",
      },
      name: {
        description:
          "The compendium pack name - this should be a unique lower-case string with no special characters.",
        examples: ["pack-name"],
        title: "Pack Name",
        type: "string",
      },
      path: {
        description:
          "The path for each compendium pack should designate a database file with the .db extension.",
        examples: ["./packs/pack-name.db"],
        title: "Pack Path",
        type: "string",
      },
    },
    description: "An object defining a single compendium pack.",
    title: "Pack",
    type: "object",
  },
  description: "An array of objects that define all compendium packs.",
  title: "Packs",
  type: "array",
};
const schema81 = {
  description:
    "An attribute path within the system data model that points to an object that contains both a value and max key. The prototype Token for each Actor created in this system will automatically have this resource assigned as it's primary bar. Omit this key or set it to null for no default attribute.",
  examples: ["resources.health"],
  title: "Primary Token Attribute",
  type: ["null", "string"],
};
const schema82 = {
  description:
    "An attribute path within the system data model that points to an object that contains both a value and max key. The prototype Token for each Actor created in this system will automatically have this resource assigned as it's secondary bar. Omit this key or set it to null for no default attribute.",
  examples: ["resources.power"],
  title: "Secondary Token Attribute",
  type: ["null", "string"],
};
const schema83 = {
  description:
    "The version of the system `template.json`; increment this value when the schema changes.",
  examples: [2],
  title: "Template Version",
  type: "integer",
};
function validate49(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/base-system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gridDistance !== undefined) {
      let data0 = data.gridDistance;
      if (
        !(
          typeof data0 == "number" &&
          !(data0 % 1) &&
          !isNaN(data0) &&
          isFinite(data0)
        )
      ) {
        const err0 = {
          instancePath: instancePath + "/gridDistance",
          schemaPath:
            "../definitions/system.json#/definitions/gridDistance/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
    if (data.gridUnits !== undefined) {
      if (typeof data.gridUnits !== "string") {
        const err1 = {
          instancePath: instancePath + "/gridUnits",
          schemaPath: "../definitions/system.json#/definitions/gridUnits/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    if (data.initiative !== undefined) {
      if (typeof data.initiative !== "string") {
        const err2 = {
          instancePath: instancePath + "/initiative",
          schemaPath: "../definitions/system.json#/definitions/initiative/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    if (data.manifest !== undefined) {
      if (typeof data.manifest !== "string") {
        const err3 = {
          instancePath: instancePath + "/manifest",
          schemaPath: "../definitions/system.json#/definitions/manifest/type",
          keyword: "type",
          params: { type: "string" },
          message: "must be string",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
    }
    if (data.packs !== undefined) {
      let data4 = data.packs;
      if (Array.isArray(data4)) {
        const len0 = data4.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data5 = data4[i0];
          if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
            if (data5.system === undefined) {
              const err4 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/system.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "system" },
                message: "must have required property '" + "system" + "'",
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
            if (data5.name === undefined) {
              const err5 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/system.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "name" },
                message: "must have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            if (data5.label === undefined) {
              const err6 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/system.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "label" },
                message: "must have required property '" + "label" + "'",
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
            if (data5.path === undefined) {
              const err7 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/system.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "path" },
                message: "must have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err7];
              } else {
                vErrors.push(err7);
              }
              errors++;
            }
            if (data5.entity === undefined) {
              const err8 = {
                instancePath: instancePath + "/packs/" + i0,
                schemaPath:
                  "../definitions/system.json#/definitions/packs/items/required",
                keyword: "required",
                params: { missingProperty: "entity" },
                message: "must have required property '" + "entity" + "'",
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
            if (data5.system !== undefined) {
              if (typeof data5.system !== "string") {
                const err9 = {
                  instancePath: instancePath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/system/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              }
            }
            if (data5.entity !== undefined) {
              if (typeof data5.entity !== "string") {
                const err10 = {
                  instancePath: instancePath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/entity/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err10];
                } else {
                  vErrors.push(err10);
                }
                errors++;
              }
            }
            if (data5.label !== undefined) {
              if (typeof data5.label !== "string") {
                const err11 = {
                  instancePath: instancePath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/label/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            if (data5.module !== undefined) {
              if (typeof data5.module !== "string") {
                const err12 = {
                  instancePath: instancePath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/module/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
            }
            if (data5.name !== undefined) {
              if (typeof data5.name !== "string") {
                const err13 = {
                  instancePath: instancePath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err13];
                } else {
                  vErrors.push(err13);
                }
                errors++;
              }
            }
            if (data5.path !== undefined) {
              if (typeof data5.path !== "string") {
                const err14 = {
                  instancePath: instancePath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../definitions/system.json#/definitions/packs/items/properties/path/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
            }
          } else {
            const err15 = {
              instancePath: instancePath + "/packs/" + i0,
              schemaPath:
                "../definitions/system.json#/definitions/packs/items/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
      } else {
        const err16 = {
          instancePath: instancePath + "/packs",
          schemaPath: "../definitions/system.json#/definitions/packs/type",
          keyword: "type",
          params: { type: "array" },
          message: "must be array",
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      let data12 = data.primaryTokenAttribute;
      if (data12 !== null && typeof data12 !== "string") {
        const err17 = {
          instancePath: instancePath + "/primaryTokenAttribute",
          schemaPath:
            "../definitions/system.json#/definitions/primaryTokenAttribute/type",
          keyword: "type",
          params: { type: schema81.type },
          message: "must be null,string",
        };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
        }
        errors++;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      let data13 = data.secondaryTokenAttribute;
      if (data13 !== null && typeof data13 !== "string") {
        const err18 = {
          instancePath: instancePath + "/secondaryTokenAttribute",
          schemaPath:
            "../definitions/system.json#/definitions/secondaryTokenAttribute/type",
          keyword: "type",
          params: { type: schema82.type },
          message: "must be null,string",
        };
        if (vErrors === null) {
          vErrors = [err18];
        } else {
          vErrors.push(err18);
        }
        errors++;
      }
    }
    if (data.templateVersion !== undefined) {
      let data14 = data.templateVersion;
      if (
        !(
          typeof data14 == "number" &&
          !(data14 % 1) &&
          !isNaN(data14) &&
          isFinite(data14)
        )
      ) {
        const err19 = {
          instancePath: instancePath + "/templateVersion",
          schemaPath:
            "../definitions/system.json#/definitions/templateVersion/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer",
        };
        if (vErrors === null) {
          vErrors = [err19];
        } else {
          vErrors.push(err19);
        }
        errors++;
      }
    }
  } else {
    const err20 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err20];
    } else {
      vErrors.push(err20);
    }
    errors++;
  }
  validate49.errors = vErrors;
  return errors === 0;
}
function validate53(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          instancePath: instancePath + "/" + i0,
          schemaPath: "#/items/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err1 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            keyword: "required",
            params: { missingProperty: "name" },
            message: "must have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err2 = {
              instancePath: instancePath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err3 = {
              instancePath: instancePath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err4 = {
              instancePath: instancePath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err5 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "array" },
      message: "must be array",
    };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
  }
  validate53.errors = vErrors;
  return errors === 0;
}
function validate48(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate49(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate53(data.authors, {
          instancePath: instancePath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate53.errors
            : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate48.errors = vErrors;
  return errors === 0;
}
function validate47(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystem" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate48(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.instancePath === instancePath &&
        err1.keyword in emErrors0 &&
        err1.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err1.schemaPath.slice(1))
      ) {
        emErrors0[err1.keyword].push(err1);
        err1.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err2 = {
          instancePath,
          schemaPath: "#/errorMessage",
          keyword: "errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema72.errorMessage[key0],
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    const emErrs0 = [];
    for (const err3 of vErrors) {
      if (!err3.emUsed) {
        emErrs0.push(err3);
      }
    }
    vErrors = emErrs0;
    errors = emErrs0.length;
  }
  validate47.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate56;
const schema86 = {
  $id: "validateSystemPlus",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  type: "object",
  allOf: [{ $ref: "../shared/properties/system+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema87 = {
  $id: "shared/properties/system+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-system.json" }],
  properties: {
    authors: { $ref: "../definitions/authors.json#/definitions/authors+" },
  },
};
function validate60(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          instancePath: instancePath + "/" + i0,
          schemaPath: "#/items/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err1 = {
            instancePath: instancePath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            keyword: "required",
            params: { missingProperty: "name" },
            message: "must have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err2 = {
              instancePath: instancePath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err3 = {
              instancePath: instancePath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err4 = {
              instancePath: instancePath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.discord !== undefined) {
          if (typeof data0.discord !== "string") {
            const err5 = {
              instancePath: instancePath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data0["ko-fi"] !== undefined) {
          if (typeof data0["ko-fi"] !== "string") {
            const err6 = {
              instancePath: instancePath + "/" + i0 + "/ko-fi",
              schemaPath:
                "#/definitions/properties-author+/properties/ko-fi/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err7 = {
              instancePath: instancePath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          if (typeof data0.reddit !== "string") {
            const err8 = {
              instancePath: instancePath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
        if (data0.twitter !== undefined) {
          if (typeof data0.twitter !== "string") {
            const err9 = {
              instancePath: instancePath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err10 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "array" },
      message: "must be array",
    };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  validate60.errors = vErrors;
  return errors === 0;
}
function validate57(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate38(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
    errors = vErrors.length;
  }
  if (
    !validate49(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate60(data.authors, {
          instancePath: instancePath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate60.errors
            : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate57.errors = vErrors;
  return errors === 0;
}
function validate56(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate57(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData,
    })
  ) {
    vErrors =
      vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.instancePath === instancePath &&
        err1.keyword in emErrors0 &&
        err1.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err1.schemaPath.slice(1))
      ) {
        emErrors0[err1.keyword].push(err1);
        err1.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err2 = {
          instancePath,
          schemaPath: "#/errorMessage",
          keyword: "errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema86.errorMessage[key0],
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    const emErrs0 = [];
    for (const err3 of vErrors) {
      if (!err3.emUsed) {
        emErrs0.push(err3);
      }
    }
    vErrors = emErrs0;
    errors = emErrs0.length;
  }
  validate56.errors = vErrors;
  return errors === 0;
}
