"use strict";
exports.validateModule = validate24;
const schema27 = {
  $id: "validateModule",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/loose/module.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema28 = {
  $id: "shared/properties/loose/module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (loose)",
  type: "object",
  allOf: [{ $ref: "base-module.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/loose/authors.json#/definitions/authors",
    },
  },
};
const schema29 = {
  $id: "shared/properties/loose/base-module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared loose base for module.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/loose/module.json#/definitions/manifest",
    },
    packs: { $ref: "../../definitions/loose/module.json#/definitions/packs" },
    system: { $ref: "../../definitions/loose/module.json#/definitions/system" },
  },
};
const schema52 = {
  examples: ["https://someaddress.com/module.json"],
  title: "A string value",
  type: "string",
};
const schema53 = {
  title: "An array of items",
  items: {
    required: ["module", "name", "label", "path", "entity"],
    properties: {
      system: {
        examples: ["dnd5e"],
        oneOf: [
          { title: "A string value", type: "string" },
          {
            items: { title: "A string value", type: "string" },
            title: "An array of items",
            type: "array",
          },
        ],
        errorMessage: "should be a string or array of strings",
      },
      entity: {
        title: "A string value",
        default: "",
        examples: ["Item"],
        type: "string",
      },
      label: {
        title: "A string value",
        default: "",
        examples: ["Pack Title"],
        type: "string",
      },
      module: {
        title: "A string value",
        default: "",
        examples: ["module-name"],
        type: "string",
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["pack-name"],
        type: "string",
      },
      path: {
        title: "A string value",
        default: "",
        examples: ["./packs/pack-name.db"],
        type: "string",
      },
    },
    title: "An object value",
    type: "object",
  },
  type: "array",
};
const schema54 = {
  examples: ["dnd5e"],
  oneOf: [
    { title: "A string value", type: "string" },
    {
      items: { title: "A string value", type: "string" },
      title: "An array of items",
      type: "array",
    },
  ],
  errorMessage: "should be a string or array of strings",
};
const schema30 = {
  $id: "shared/properties/loose/base.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for loose module.json & system.json",
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
    author: { $ref: "../../definitions/loose/base.json#/definitions/author" },
    bugs: { $ref: "../../definitions/loose/base.json#/definitions/bugs" },
    changelog: {
      $ref: "../../definitions/loose/base.json#/definitions/changelog",
    },
    compatibleCoreVersion: {
      $ref:
        "../../definitions/loose/base.json#/definitions/compatibleCoreVersion",
    },
    dependencies: {
      $ref: "../../definitions/loose/base.json#/definitions/dependencies",
    },
    description: {
      $ref: "../../definitions/loose/base.json#/definitions/description",
    },
    download: {
      $ref: "../../definitions/loose/base.json#/definitions/download",
    },
    esmodules: {
      $ref: "../../definitions/loose/base.json#/definitions/esmodules",
    },
    languages: {
      $ref: "../../definitions/loose/base.json#/definitions/languages",
    },
    license: { $ref: "../../definitions/loose/base.json#/definitions/license" },
    minimumCoreVersion: {
      $ref: "../../definitions/loose/base.json#/definitions/minimumCoreVersion",
    },
    name: { $ref: "../../definitions/loose/base.json#/definitions/name" },
    readme: { $ref: "../../definitions/loose/base.json#/definitions/readme" },
    scripts: { $ref: "../../definitions/loose/base.json#/definitions/scripts" },
    socket: { $ref: "../../definitions/loose/base.json#/definitions/socket" },
    styles: { $ref: "../../definitions/loose/base.json#/definitions/styles" },
    title: { $ref: "../../definitions/loose/base.json#/definitions/title" },
    url: { $ref: "../../definitions/loose/base.json#/definitions/url" },
    version: { $ref: "../../definitions/loose/base.json#/definitions/version" },
  },
};
const schema32 = {
  default: "",
  examples: ["typhonrt"],
  title: "A string value",
  type: "string",
};
const schema33 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  title: "A string value",
  type: "string",
};
const schema34 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  title: "A string value",
  type: "string",
};
const schema35 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
};
const schema36 = {
  items: {
    properties: {
      manifest: {
        default: "",
        examples: [
          "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/2.0.3/module/module.json",
        ],
        title: "A string value",
        type: "string",
      },
      name: {
        default: "",
        examples: ["dice-so-nice"],
        title: "A string value",
        type: "string",
      },
      type: {
        default: "",
        enum: ["module", "system", "world"],
        examples: ["module"],
        title: "A string value",
      },
    },
    required: ["name"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema37 = {
  default: "",
  examples: ["Some description"],
  title: "A string value",
  type: "string",
};
const schema38 = {
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  title: "A string value",
  type: "string",
};
const schema39 = {
  items: {
    default: "",
    examples: ["index.js"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
const schema40 = {
  items: {
    properties: {
      lang: {
        default: "",
        examples: ["en"],
        title: "A string value",
        type: "string",
      },
      name: {
        default: "",
        examples: ["English"],
        title: "A string value",
        type: "string",
      },
      path: {
        examples: ["lang/en.json"],
        title: "A string value",
        type: "string",
      },
    },
    required: ["lang", "name", "path"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema41 = {
  default: "",
  examples: ["LICENSE"],
  title: "A string value",
  type: "string",
};
const schema42 = {
  default: "",
  examples: ["0.7.5"],
  title: "A string value",
  type: "string",
};
const schema43 = {
  default: "",
  examples: ["a-module"],
  title: "A string value",
  type: "string",
};
const schema44 = {
  default: "",
  examples: ["README.md"],
  title: "A string value",
  type: "string",
};
const schema45 = {
  items: {
    default: "",
    examples: ["ascript.js"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
const schema46 = {
  default: false,
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
const schema47 = {
  items: {
    default: "",
    examples: ["styles.css"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
const schema48 = {
  default: "",
  examples: ["A Module"],
  title: "A string value",
  type: "string",
};
const schema49 = {
  default: "",
  examples: ["https://someaddress.com/"],
  title: "A string value",
  type: "string",
};
const schema50 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  errorMessage: "should be a string or number",
  oneOf: [{ type: "string" }, { type: "number" }],
};
const func0 = require("ajv/dist/compile/equal");
function validate27(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property '" + "name" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "title" },
        message: "should have required property '" + "title" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "description" },
        message: "should have required property '" + "description" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "author" },
        message: "should have required property '" + "author" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "version" },
        message: "should have required property '" + "version" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "minimumCoreVersion" },
        message: "should have required property '" + "minimumCoreVersion" + "'",
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
          keyword: "type",
          dataPath: dataPath + "/author",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/author/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/bugs",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/bugs/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/changelog",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/changelog/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/compatibleCoreVersion",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/compatibleCoreVersion/type",
          params: { type: "string" },
          message: "should be string",
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
                keyword: "required",
                dataPath: dataPath + "/dependencies/" + i0,
                schemaPath:
                  "../../definitions/loose/base.json#/definitions/dependencies/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                  keyword: "type",
                  dataPath: dataPath + "/dependencies/" + i0 + "/manifest",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/dependencies/items/properties/manifest/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/dependencies/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/dependencies/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "enum",
                  dataPath: dataPath + "/dependencies/" + i0 + "/type",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/dependencies/items/properties/type/enum",
                  params: {
                    allowedValues: schema36.items.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
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
              keyword: "type",
              dataPath: dataPath + "/dependencies/" + i0,
              schemaPath:
                "../../definitions/loose/base.json#/definitions/dependencies/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/dependencies",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/dependencies/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/description",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/description/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/download",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/download/type",
          params: { type: "string" },
          message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/esmodules/" + i1,
              schemaPath:
                "../../definitions/loose/base.json#/definitions/esmodules/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/esmodules",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/esmodules/type",
          params: { type: "array" },
          message: "should be array",
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
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/loose/base.json#/definitions/languages/items/required",
                params: { missingProperty: "lang" },
                message: "should have required property '" + "lang" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/loose/base.json#/definitions/languages/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/loose/base.json#/definitions/languages/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
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
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/lang",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/languages/items/properties/lang/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/name",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/languages/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/path",
                  schemaPath:
                    "../../definitions/loose/base.json#/definitions/languages/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/languages/" + i2,
              schemaPath:
                "../../definitions/loose/base.json#/definitions/languages/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/languages",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/languages/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/license",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/license/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/minimumCoreVersion",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/minimumCoreVersion/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/name",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/name/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/readme",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/readme/type",
          params: { type: "string" },
          message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/scripts/" + i3,
              schemaPath:
                "../../definitions/loose/base.json#/definitions/scripts/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/scripts",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/scripts/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/socket",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/socket/type",
          params: { type: "boolean" },
          message: "should be boolean",
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
              keyword: "type",
              dataPath: dataPath + "/styles/" + i4,
              schemaPath:
                "../../definitions/loose/base.json#/definitions/styles/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/styles",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/styles/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/title",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/title/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/url",
          schemaPath: "../../definitions/loose/base.json#/definitions/url/type",
          params: { type: "string" },
          message: "should be string",
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
      const _errs49 = errors;
      let valid27 = false;
      let passing0 = null;
      const _errs50 = errors;
      if (typeof data29 !== "string") {
        const err39 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/version/oneOf/0/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err39];
        } else {
          vErrors.push(err39);
        }
        errors++;
      }
      var _valid0 = _errs50 === errors;
      if (_valid0) {
        valid27 = true;
        passing0 = 0;
      }
      const _errs51 = errors;
      if (!(typeof data29 == "number" && isFinite(data29))) {
        const err40 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/version/oneOf/1/type",
          params: { type: "number" },
          message: "should be number",
        };
        if (vErrors === null) {
          vErrors = [err40];
        } else {
          vErrors.push(err40);
        }
        errors++;
      }
      var _valid0 = _errs51 === errors;
      if (_valid0 && valid27) {
        valid27 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid27 = true;
          passing0 = 1;
        }
      }
      if (!valid27) {
        const err41 = {
          keyword: "oneOf",
          dataPath: dataPath + "/version",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/version/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err41];
        } else {
          vErrors.push(err41);
        }
        errors++;
      } else {
        errors = _errs49;
        if (vErrors !== null) {
          if (_errs49) {
            vErrors.length = _errs49;
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
            (err42.dataPath === dataPath + "/version" ||
              (err42.dataPath.indexOf(dataPath + "/version") === 0 &&
                err42.dataPath[dataPath + "/version".length] === "/")) &&
            err42.schemaPath.indexOf(
              "../../definitions/loose/base.json#/definitions/version"
            ) === 0 &&
            err42.schemaPath[
              "../../definitions/loose/base.json#/definitions/version".length
            ] === "/"
          ) {
            emErrs0.push(err42);
            err42.emUsed = true;
          }
        }
        if (emErrs0.length) {
          const err43 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/version",
            schemaPath:
              "../../definitions/loose/base.json#/definitions/version/errorMessage",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/base-module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate27(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (typeof data.manifest !== "string") {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath:
            "../../definitions/loose/module.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/module.json#/definitions/packs/items/required",
                params: { missingProperty: "module" },
                message: "should have required property '" + "module" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/module.json#/definitions/packs/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/module.json#/definitions/packs/items/required",
                params: { missingProperty: "label" },
                message: "should have required property '" + "label" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/module.json#/definitions/packs/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/module.json#/definitions/packs/items/required",
                params: { missingProperty: "entity" },
                message: "should have required property '" + "entity" + "'",
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
              const _errs7 = errors;
              let valid6 = false;
              let passing0 = null;
              const _errs8 = errors;
              if (typeof data3 !== "string") {
                const err6 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/system/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err6];
                } else {
                  vErrors.push(err6);
                }
                errors++;
              }
              var _valid0 = _errs8 === errors;
              if (_valid0) {
                valid6 = true;
                passing0 = 0;
              }
              const _errs9 = errors;
              if (Array.isArray(data3)) {
                const len1 = data3.length;
                for (let i1 = 0; i1 < len1; i1++) {
                  if (typeof data3[i1] !== "string") {
                    const err7 = {
                      keyword: "type",
                      dataPath: dataPath + "/packs/" + i0 + "/system/" + i1,
                      schemaPath:
                        "../../definitions/loose/module.json#/definitions/packs/items/properties/system/oneOf/1/items/type",
                      params: { type: "string" },
                      message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/system/oneOf/1/type",
                  params: { type: "array" },
                  message: "should be array",
                };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var _valid0 = _errs9 === errors;
              if (_valid0 && valid6) {
                valid6 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid6 = true;
                  passing0 = 1;
                }
              }
              if (!valid6) {
                const err9 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/system/oneOf",
                  params: { passingSchemas: passing0 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              } else {
                errors = _errs7;
                if (vErrors !== null) {
                  if (_errs7) {
                    vErrors.length = _errs7;
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
                    (err10.dataPath === dataPath + "/packs/" + i0 + "/system" ||
                      (err10.dataPath.indexOf(
                        dataPath + "/packs/" + i0 + "/system"
                      ) === 0 &&
                        err10.dataPath[
                          dataPath + "/packs/" + i0 + "/system".length
                        ] === "/")) &&
                    err10.schemaPath.indexOf(
                      "../../definitions/loose/module.json#/definitions/packs/items/properties/system"
                    ) === 0 &&
                    err10.schemaPath[
                      "../../definitions/loose/module.json#/definitions/packs/items/properties/system"
                        .length
                    ] === "/"
                  ) {
                    emErrs0.push(err10);
                    err10.emUsed = true;
                  }
                }
                if (emErrs0.length) {
                  const err11 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/packs/" + i0 + "/system",
                    schemaPath:
                      "../../definitions/loose/module.json#/definitions/packs/items/properties/system/errorMessage",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/entity/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/label/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/module/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../../definitions/loose/module.json#/definitions/packs/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/packs/" + i0,
              schemaPath:
                "../../definitions/loose/module.json#/definitions/packs/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/packs",
          schemaPath:
            "../../definitions/loose/module.json#/definitions/packs/type",
          params: { type: "array" },
          message: "should be array",
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
      const _errs18 = errors;
      let valid9 = false;
      let passing1 = null;
      const _errs19 = errors;
      if (typeof data10 !== "string") {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/loose/module.json#/definitions/system/oneOf/0/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err20];
        } else {
          vErrors.push(err20);
        }
        errors++;
      }
      var _valid1 = _errs19 === errors;
      if (_valid1) {
        valid9 = true;
        passing1 = 0;
      }
      const _errs20 = errors;
      if (Array.isArray(data10)) {
        const len2 = data10.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (typeof data10[i2] !== "string") {
            const err21 = {
              keyword: "type",
              dataPath: dataPath + "/system/" + i2,
              schemaPath:
                "../../definitions/loose/module.json#/definitions/system/oneOf/1/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/loose/module.json#/definitions/system/oneOf/1/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err22];
        } else {
          vErrors.push(err22);
        }
        errors++;
      }
      var _valid1 = _errs20 === errors;
      if (_valid1 && valid9) {
        valid9 = false;
        passing1 = [passing1, 1];
      } else {
        if (_valid1) {
          valid9 = true;
          passing1 = 1;
        }
      }
      if (!valid9) {
        const err23 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/loose/module.json#/definitions/system/oneOf",
          params: { passingSchemas: passing1 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err23];
        } else {
          vErrors.push(err23);
        }
        errors++;
      } else {
        errors = _errs18;
        if (vErrors !== null) {
          if (_errs18) {
            vErrors.length = _errs18;
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
            (err24.dataPath === dataPath + "/system" ||
              (err24.dataPath.indexOf(dataPath + "/system") === 0 &&
                err24.dataPath[dataPath + "/system".length] === "/")) &&
            err24.schemaPath.indexOf(
              "../../definitions/loose/module.json#/definitions/system"
            ) === 0 &&
            err24.schemaPath[
              "../../definitions/loose/module.json#/definitions/system".length
            ] === "/"
          ) {
            emErrs2.push(err24);
            err24.emUsed = true;
          }
        }
        if (emErrs2.length) {
          const err25 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/system",
            schemaPath:
              "../../definitions/loose/module.json#/definitions/system/errorMessage",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  items: {
    $ref: "#/definitions/properties-author",
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema57 = {
  properties: {
    email: {
      default: "",
      examples: ["admin@foundryvtt.com"],
      title: "A string value",
      type: "string",
    },
    name: {
      default: "",
      examples: ["Atropos"],
      title: "A string value",
      type: "string",
    },
    url: {
      default: "",
      examples: ["https://foundryvtt.com"],
      title: "A string value",
      type: "string",
    },
  },
  required: ["name"],
};
function validate33(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate26(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate33(data.authors, {
          dataPath: dataPath + "/authors",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModule" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate25(data, { dataPath, parentData, parentDataProperty, rootData })
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
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
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
  allOf: [{ $ref: "../../shared/properties/loose/module+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema59 = {
  $id: "shared/properties/loose/module+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (loose)",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-module.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/loose/authors.json#/definitions/authors+",
    },
  },
};
const schema60 = {
  $id: "shared/properties/loose/base-manifest+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared loose base for manifest+",
  type: "object",
  properties: {
    conflicts: {
      $ref:
        "../../definitions/loose/base-manifest+.json#/definitions/conflicts",
    },
    deprecated: {
      $ref:
        "../../definitions/loose/base-manifest+.json#/definitions/deprecated",
    },
    includes: {
      $ref: "../../definitions/loose/base-manifest+.json#/definitions/includes",
    },
    library: {
      $ref: "../../definitions/loose/base-manifest+.json#/definitions/library",
    },
    manifestPlusVersion: {
      $ref:
        "../../definitions/loose/base-manifest+.json#/definitions/manifestPlusVersion",
    },
    media: {
      $ref: "../../definitions/loose/base-manifest+.json#/definitions/media",
    },
  },
};
const schema62 = {
  items: {
    properties: {
      name: {
        examples: ["dice-so-nice"],
        title: "A string value",
        type: "string",
      },
      type: {
        enum: ["module", "system", "world"],
        examples: ["module"],
        title: "A string value",
      },
      versionMax: {
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "A string value",
      },
      versionMin: {
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "A string value",
      },
    },
    required: ["name", "type"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema63 = {
  properties: {
    alternatives: {
      items: {
        properties: {
          name: {
            examples: ["dice-so-nice"],
            title: "A string value",
            type: "string",
          },
          manifest: {
            examples: ["https://link.com/to/manifest.json"],
            title: "A string value",
            type: "string",
          },
        },
        required: ["name", "manifest"],
        title: "An object value",
        type: "object",
      },
      title: "An array of items",
      type: "array",
    },
    coreVersion: {
      examples: ["0.7.5"],
      title: "A string value",
      type: "string",
    },
    reason: {
      examples: ["This was added to foundry core."],
      title: "A string value",
      type: "string",
    },
  },
  title: "An object",
  type: "object",
};
const schema64 = {
  items: {
    examples: [
      "relative/path/to/files/script.js",
      "relative/path/to/templates/template.html",
      "path/to/image/assets/folder",
    ],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
const schema65 = {
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
const schema66 = {
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
};
const schema67 = {
  items: { $ref: "#/definitions/media-item-loose" },
  title: "An array of items",
  type: "array",
};
const schema68 = {
  type: "object",
  required: ["type", "url"],
  properties: {
    type: { enum: ["cover", "icon", "screenshot", "video"] },
    url: { type: "string" },
    loop: { type: "boolean" },
    thumbnail: { type: "string" },
  },
};
function validate40(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/media-item-loose/required",
            params: { missingProperty: "type" },
            message: "should have required property '" + "type" + "'",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/media-item-loose/required",
            params: { missingProperty: "url" },
            message: "should have required property '" + "url" + "'",
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
              keyword: "enum",
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/definitions/media-item-loose/properties/type/enum",
              params: { allowedValues: schema68.properties.type.enum },
              message: "should be equal to one of the allowed values",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/media-item-loose/properties/url/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/loop",
              schemaPath: "#/definitions/media-item-loose/properties/loop/type",
              params: { type: "boolean" },
              message: "should be boolean",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/thumbnail",
              schemaPath:
                "#/definitions/media-item-loose/properties/thumbnail/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/definitions/media-item-loose/type",
          params: { type: "object" },
          message: "should be object",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/base-manifest+.json" */ let vErrors = null;
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
                keyword: "required",
                dataPath: dataPath + "/conflicts/" + i0,
                schemaPath:
                  "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/conflicts/" + i0,
                schemaPath:
                  "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/required",
                params: { missingProperty: "type" },
                message: "should have required property '" + "type" + "'",
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
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "enum",
                  dataPath: dataPath + "/conflicts/" + i0 + "/type",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/type/enum",
                  params: {
                    allowedValues: schema62.items.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
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
              const _errs6 = errors;
              let valid4 = false;
              let passing0 = null;
              const _errs7 = errors;
              if (typeof data4 !== "string") {
                const err4 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
              }
              var _valid0 = _errs7 === errors;
              if (_valid0) {
                valid4 = true;
                passing0 = 0;
              }
              const _errs8 = errors;
              if (!(typeof data4 == "number" && isFinite(data4))) {
                const err5 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/1/type",
                  params: { type: "number" },
                  message: "should be number",
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
              var _valid0 = _errs8 === errors;
              if (_valid0 && valid4) {
                valid4 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid4 = true;
                  passing0 = 1;
                }
              }
              if (!valid4) {
                const err6 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf",
                  params: { passingSchemas: passing0 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err6];
                } else {
                  vErrors.push(err6);
                }
                errors++;
              } else {
                errors = _errs6;
                if (vErrors !== null) {
                  if (_errs6) {
                    vErrors.length = _errs6;
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
                    (err7.dataPath ===
                      dataPath + "/conflicts/" + i0 + "/versionMax" ||
                      (err7.dataPath.indexOf(
                        dataPath + "/conflicts/" + i0 + "/versionMax"
                      ) === 0 &&
                        err7.dataPath[
                          dataPath + "/conflicts/" + i0 + "/versionMax".length
                        ] === "/")) &&
                    err7.schemaPath.indexOf(
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                    ) === 0 &&
                    err7.schemaPath[
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                        .length
                    ] === "/"
                  ) {
                    emErrs0.push(err7);
                    err7.emUsed = true;
                  }
                }
                if (emErrs0.length) {
                  const err8 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                    schemaPath:
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/errorMessage",
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
              const _errs10 = errors;
              let valid5 = false;
              let passing1 = null;
              const _errs11 = errors;
              if (typeof data5 !== "string") {
                const err10 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err10];
                } else {
                  vErrors.push(err10);
                }
                errors++;
              }
              var _valid1 = _errs11 === errors;
              if (_valid1) {
                valid5 = true;
                passing1 = 0;
              }
              const _errs12 = errors;
              if (!(typeof data5 == "number" && isFinite(data5))) {
                const err11 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/1/type",
                  params: { type: "number" },
                  message: "should be number",
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              var _valid1 = _errs12 === errors;
              if (_valid1 && valid5) {
                valid5 = false;
                passing1 = [passing1, 1];
              } else {
                if (_valid1) {
                  valid5 = true;
                  passing1 = 1;
                }
              }
              if (!valid5) {
                const err12 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf",
                  params: { passingSchemas: passing1 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
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
                const emErrs2 = [];
                for (const err13 of vErrors) {
                  if (
                    err13.keyword !== "errorMessage" &&
                    !err13.emUsed &&
                    (err13.dataPath ===
                      dataPath + "/conflicts/" + i0 + "/versionMin" ||
                      (err13.dataPath.indexOf(
                        dataPath + "/conflicts/" + i0 + "/versionMin"
                      ) === 0 &&
                        err13.dataPath[
                          dataPath + "/conflicts/" + i0 + "/versionMin".length
                        ] === "/")) &&
                    err13.schemaPath.indexOf(
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                    ) === 0 &&
                    err13.schemaPath[
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                        .length
                    ] === "/"
                  ) {
                    emErrs2.push(err13);
                    err13.emUsed = true;
                  }
                }
                if (emErrs2.length) {
                  const err14 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                    schemaPath:
                      "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/errorMessage",
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
              keyword: "type",
              dataPath: dataPath + "/conflicts/" + i0,
              schemaPath:
                "../../definitions/loose/base-manifest+.json#/definitions/conflicts/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/conflicts",
          schemaPath:
            "../../definitions/loose/base-manifest+.json#/definitions/conflicts/type",
          params: { type: "array" },
          message: "should be array",
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
                    keyword: "required",
                    dataPath: dataPath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    params: { missingProperty: "name" },
                    message: "should have required property '" + "name" + "'",
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
                    keyword: "required",
                    dataPath: dataPath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    params: { missingProperty: "manifest" },
                    message:
                      "should have required property '" + "manifest" + "'",
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
                      keyword: "type",
                      dataPath:
                        dataPath + "/deprecated/alternatives/" + i1 + "/name",
                      schemaPath:
                        "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name/type",
                      params: { type: "string" },
                      message: "should be string",
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
                      keyword: "type",
                      dataPath:
                        dataPath +
                        "/deprecated/alternatives/" +
                        i1 +
                        "/manifest",
                      schemaPath:
                        "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest/type",
                      params: { type: "string" },
                      message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/deprecated/alternatives/" + i1,
                  schemaPath:
                    "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/type",
                  params: { type: "object" },
                  message: "should be object",
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
              keyword: "type",
              dataPath: dataPath + "/deprecated/alternatives",
              schemaPath:
                "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/alternatives/type",
              params: { type: "array" },
              message: "should be array",
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
              keyword: "type",
              dataPath: dataPath + "/deprecated/coreVersion",
              schemaPath:
                "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/coreVersion/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/deprecated/reason",
              schemaPath:
                "../../definitions/loose/base-manifest+.json#/definitions/deprecated/properties/reason/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/deprecated",
          schemaPath:
            "../../definitions/loose/base-manifest+.json#/definitions/deprecated/type",
          params: { type: "object" },
          message: "should be object",
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
              keyword: "type",
              dataPath: dataPath + "/includes/" + i2,
              schemaPath:
                "../../definitions/loose/base-manifest+.json#/definitions/includes/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/includes",
          schemaPath:
            "../../definitions/loose/base-manifest+.json#/definitions/includes/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/library",
          schemaPath:
            "../../definitions/loose/base-manifest+.json#/definitions/library/type",
          params: { type: "boolean" },
          message: "should be boolean",
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
          keyword: "type",
          dataPath: dataPath + "/manifestPlusVersion",
          schemaPath:
            "../../definitions/loose/base-manifest+.json#/definitions/manifestPlusVersion/type",
          params: { type: "string" },
          message: "should be string",
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
          dataPath: dataPath + "/media",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  items: {
    allOf: [
      { $ref: "#/definitions/properties-author" },
      { $ref: "#/definitions/properties-author+" },
    ],
    type: "object",
    title: "An object value",
  },
  title: "An array of items",
  type: "array",
};
const schema71 = {
  properties: {
    discord: {
      default: "",
      examples: ["discordID#0001"],
      title: "A string value",
      type: "string",
    },
    patreon: {
      default: "",
      examples: ["patreonName"],
      title: "A string value",
      type: "string",
    },
    reddit: {
      default: "",
      examples: ["u/RedditUsername"],
      title: "A string value",
      type: "string",
    },
    twitter: {
      default: "",
      examples: ["@TwitterHandle"],
      title: "A string value",
      type: "string",
    },
  },
};
function validate44(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err6 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          if (typeof data0.reddit !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.twitter !== undefined) {
          if (typeof data0.twitter !== "string") {
            const err8 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err9 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err9];
    } else {
      vErrors.push(err9);
    }
    errors++;
  }
  validate44.errors = vErrors;
  return errors === 0;
}
function validate37(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate38(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
    errors = vErrors.length;
  }
  if (
    !validate26(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate44(data.authors, {
          dataPath: dataPath + "/authors",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate37(data, { dataPath, parentData, parentDataProperty, rootData })
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
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
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
  allOf: [{ $ref: "../../shared/properties/loose/system.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema73 = {
  $id: "shared/properties/loose/system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (loose)",
  type: "object",
  allOf: [{ $ref: "base-system.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/loose/authors.json#/definitions/authors",
    },
  },
};
const schema74 = {
  $id: "shared/properties/loose/base-system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared loose base for system.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    gridDistance: {
      $ref: "../../definitions/loose/system.json#/definitions/gridDistance",
    },
    gridUnits: {
      $ref: "../../definitions/loose/system.json#/definitions/gridUnits",
    },
    initiative: {
      $ref: "../../definitions/loose/system.json#/definitions/initiative",
    },
    manifest: {
      $ref: "../../definitions/loose/system.json#/definitions/manifest",
    },
    packs: { $ref: "../../definitions/loose/system.json#/definitions/packs" },
    primaryTokenAttribute: {
      $ref:
        "../../definitions/loose/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref:
        "../../definitions/loose/system.json#/definitions/secondaryTokenAttribute",
    },
    templateVersion: {
      $ref: "../../definitions/loose/system.json#/definitions/templateVersion",
    },
  },
};
const schema76 = {
  default: 0,
  examples: [5],
  title: "An integer value",
  type: "integer",
};
const schema77 = {
  default: "",
  examples: ["ft, m"],
  title: "A string value",
  type: "string",
};
const schema78 = {
  default: "",
  examples: ["1d20"],
  title: "A string value",
  type: "string",
};
const schema79 = {
  default: "",
  examples: ["https://someaddress.com/system.json"],
  title: "A string value",
  type: "string",
};
const schema80 = {
  title: "An array of items",
  items: {
    required: ["system", "name", "label", "path", "entity"],
    properties: {
      system: {
        title: "A string value",
        default: "",
        examples: ["system-name"],
        type: "string",
      },
      entity: {
        title: "A string value",
        default: "",
        examples: ["Item"],
        type: "string",
      },
      label: {
        title: "A string value",
        default: "",
        examples: ["Pack Title"],
        type: "string",
      },
      module: {
        title: "A string value",
        default: "",
        examples: ["module-name"],
        type: "string",
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["pack-name"],
        type: "string",
      },
      path: {
        title: "A string value",
        default: "",
        examples: ["./packs/pack-name.db"],
        type: "string",
      },
    },
    title: "An object value",
    type: "object",
  },
  type: "array",
};
const schema81 = {
  default: "",
  examples: ["resources.health"],
  title: "A string value or null",
  type: ["null", "string"],
};
const schema82 = {
  default: "",
  examples: ["resources.power"],
  title: "A string value or null",
  type: ["null", "string"],
};
const schema83 = {
  default: 0,
  examples: [2],
  title: "An integer value",
  type: "integer",
};
function validate49(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/base-system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate27(data, { dataPath, parentData, parentDataProperty, rootData })
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
          keyword: "type",
          dataPath: dataPath + "/gridDistance",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/gridDistance/type",
          params: { type: "integer" },
          message: "should be integer",
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
          keyword: "type",
          dataPath: dataPath + "/gridUnits",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/gridUnits/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/initiative",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/initiative/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/system.json#/definitions/packs/items/required",
                params: { missingProperty: "system" },
                message: "should have required property '" + "system" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/system.json#/definitions/packs/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/system.json#/definitions/packs/items/required",
                params: { missingProperty: "label" },
                message: "should have required property '" + "label" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/system.json#/definitions/packs/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/loose/system.json#/definitions/packs/items/required",
                params: { missingProperty: "entity" },
                message: "should have required property '" + "entity" + "'",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/system/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/entity/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/label/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/module/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
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
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../../definitions/loose/system.json#/definitions/packs/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/packs/" + i0,
              schemaPath:
                "../../definitions/loose/system.json#/definitions/packs/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/packs",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/packs/type",
          params: { type: "array" },
          message: "should be array",
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
          keyword: "type",
          dataPath: dataPath + "/primaryTokenAttribute",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/primaryTokenAttribute/type",
          params: { type: schema81.type },
          message: "should be null,string",
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
          keyword: "type",
          dataPath: dataPath + "/secondaryTokenAttribute",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/secondaryTokenAttribute/type",
          params: { type: schema82.type },
          message: "should be null,string",
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
          keyword: "type",
          dataPath: dataPath + "/templateVersion",
          schemaPath:
            "../../definitions/loose/system.json#/definitions/templateVersion/type",
          params: { type: "integer" },
          message: "should be integer",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate49(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate53(data.authors, {
          dataPath: dataPath + "/authors",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystem" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate48(data, { dataPath, parentData, parentDataProperty, rootData })
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
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
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
  allOf: [{ $ref: "../../shared/properties/loose/system+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema87 = {
  $id: "shared/properties/loose/system+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (loose)",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-system.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/loose/authors.json#/definitions/authors+",
    },
  },
};
function validate60(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
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
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err6 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          if (typeof data0.reddit !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.twitter !== undefined) {
          if (typeof data0.twitter !== "string") {
            const err8 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
      }
    }
  } else {
    const err9 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err9];
    } else {
      vErrors.push(err9);
    }
    errors++;
  }
  validate60.errors = vErrors;
  return errors === 0;
}
function validate57(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate38(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
    errors = vErrors.length;
  }
  if (
    !validate49(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate60(data.authors, {
          dataPath: dataPath + "/authors",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
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
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate57(data, { dataPath, parentData, parentDataProperty, rootData })
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
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
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
exports.validateModuleStrict = validate63;
const schema91 = {
  $id: "validateModuleStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/module.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema92 = {
  $id: "shared/properties/strict/module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (strict)",
  type: "object",
  allOf: [{ $ref: "base-module.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/strict/authors.json#/definitions/authors",
    },
  },
};
const schema93 = {
  $id: "shared/properties/strict/base-module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base for module.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/strict/module.json#/definitions/manifest",
    },
    packs: { $ref: "../../definitions/strict/module.json#/definitions/packs" },
    system: {
      $ref: "../../definitions/strict/module.json#/definitions/system",
    },
  },
};
const schema116 = {
  examples: ["https://someaddress.com/module.json"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$",
  errorMessage: { pattern: "should be an URL string ending in 'module.json'" },
};
const schema117 = {
  title: "An array of items",
  items: {
    required: ["module", "name", "label", "path", "entity"],
    properties: {
      system: {
        examples: ["dnd5e"],
        oneOf: [
          {
            title: "A string value",
            type: "string",
            pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
            errorMessage: {
              pattern:
                "should be a string that is alpha-numeric with only underscore and hyphen separators",
            },
          },
          {
            items: {
              title: "A string value",
              type: "string",
              pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
              errorMessage: {
                pattern:
                  "should be a string that is alpha-numeric with only underscore and hyphen separators",
              },
            },
            title: "An array of items",
            type: "array",
          },
        ],
        errorMessage: "should be a string or array of strings",
      },
      entity: {
        title: "A string value",
        default: "",
        examples: ["Item"],
        enum: [
          "Actor",
          "ChatMessage",
          "Combat",
          "Item",
          "Folder",
          "JournalEntry",
          "Macro",
          "Playlist",
          "RollTable",
          "Scene",
          "User",
        ],
      },
      label: {
        title: "A string value",
        default: "",
        examples: ["Pack Title"],
        type: "string",
      },
      module: {
        title: "A string value",
        default: "",
        examples: ["module-name"],
        type: "string",
        pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is lowercase alpha-numeric with only separating hyphens",
        },
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["pack-name"],
        type: "string",
        pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is lowercase alpha-numeric with only separating hyphens",
        },
      },
      path: {
        title: "A string value",
        default: "",
        examples: ["./packs/pack-name.db"],
        type: "string",
        pattern: "^(.+).db$",
      },
    },
    title: "An object value",
    type: "object",
  },
  type: "array",
};
const schema118 = {
  examples: ["dnd5e"],
  oneOf: [
    {
      title: "A string value",
      type: "string",
      pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
      errorMessage: {
        pattern:
          "should be a string that is alpha-numeric with only underscore and hyphen separators",
      },
    },
    {
      items: {
        title: "A string value",
        type: "string",
        pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is alpha-numeric with only underscore and hyphen separators",
        },
      },
      title: "An array of items",
      type: "array",
    },
  ],
  errorMessage: "should be a string or array of strings",
};
const schema94 = {
  $id: "shared/properties/strict/base.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base between module & system.json",
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
    author: { $ref: "../../definitions/strict/base.json#/definitions/author" },
    bugs: { $ref: "../../definitions/strict/base.json#/definitions/bugs" },
    changelog: {
      $ref: "../../definitions/strict/base.json#/definitions/changelog",
    },
    compatibleCoreVersion: {
      $ref:
        "../../definitions/strict/base.json#/definitions/compatibleCoreVersion",
    },
    dependencies: {
      $ref: "../../definitions/strict/base.json#/definitions/dependencies",
    },
    description: {
      $ref: "../../definitions/strict/base.json#/definitions/description",
    },
    download: {
      $ref: "../../definitions/strict/base.json#/definitions/download",
    },
    esmodules: {
      $ref: "../../definitions/strict/base.json#/definitions/esmodules",
    },
    languages: {
      $ref: "../../definitions/strict/base.json#/definitions/languages",
    },
    license: {
      $ref: "../../definitions/strict/base.json#/definitions/license",
    },
    minimumCoreVersion: {
      $ref:
        "../../definitions/strict/base.json#/definitions/minimumCoreVersion",
    },
    name: { $ref: "../../definitions/strict/base.json#/definitions/name" },
    readme: { $ref: "../../definitions/loose/base.json#/definitions/readme" },
    scripts: {
      $ref: "../../definitions/strict/base.json#/definitions/scripts",
    },
    socket: { $ref: "../../definitions/strict/base.json#/definitions/socket" },
    styles: { $ref: "../../definitions/strict/base.json#/definitions/styles" },
    title: { $ref: "../../definitions/strict/base.json#/definitions/title" },
    url: { $ref: "../../definitions/strict/base.json#/definitions/url" },
    version: {
      $ref: "../../definitions/strict/base.json#/definitions/version",
    },
  },
};
const schema96 = {
  default: "",
  examples: ["typhonrt"],
  title: "A string value",
  type: "string",
};
const schema97 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: { pattern: "should be an URL string" },
};
const schema98 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: { pattern: "should be an URL string" },
};
const schema99 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: { pattern: "should be a string that uses semantic versioning" },
};
const schema100 = {
  items: {
    properties: {
      manifest: {
        default: "",
        examples: [
          "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/2.0.3/module/module.json",
        ],
        title: "A string value",
        type: "string",
      },
      name: {
        default: "",
        examples: ["dice-so-nice"],
        title: "A string value",
        type: "string",
      },
      type: {
        default: "",
        enum: ["module", "system", "world"],
        examples: ["module"],
        title: "A string value",
      },
    },
    required: ["name"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema101 = {
  default: "",
  examples: ["Some description"],
  title: "A string value",
  type: "string",
};
const schema102 = {
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$",
  errorMessage: { pattern: "should be an URL string ending in '.zip'" },
};
const schema103 = {
  items: {
    default: "",
    examples: ["index.js"],
    title: "A string value",
    type: "string",
    pattern: "^(.+).js$",
  },
  title: "An array of items",
  type: "array",
};
const schema104 = {
  items: {
    properties: {
      lang: {
        default: "",
        examples: ["en"],
        title: "A string value",
        type: "string",
      },
      name: {
        default: "",
        examples: ["English"],
        title: "A string value",
        type: "string",
      },
      path: {
        examples: ["lang/en.json"],
        title: "A string value",
        type: "string",
        pattern: "^(.+).json$",
      },
    },
    required: ["lang", "name", "path"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema105 = {
  default: "",
  examples: ["LICENSE"],
  title: "A string value",
  type: "string",
};
const schema106 = {
  default: "",
  examples: ["0.7.5"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: { pattern: "should be a string that uses semantic versioning" },
};
const schema107 = {
  default: "",
  examples: ["a-module"],
  title: "A string value",
  type: "string",
  pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
  errorMessage: {
    pattern:
      "should be a string that is lowercase alpha-numeric with only separating hyphens",
  },
};
const schema109 = {
  items: {
    default: "",
    examples: ["ascript.js"],
    title: "A string value",
    type: "string",
    pattern: "^(.+).js$",
  },
  title: "An array of items",
  type: "array",
};
const schema110 = {
  default: false,
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
const schema111 = {
  items: {
    default: "",
    examples: ["styles.css"],
    title: "A string value",
    type: "string",
    pattern: "^(.+).css$",
  },
  title: "An array of items",
  type: "array",
};
const schema112 = {
  default: "",
  examples: ["A Module"],
  title: "A string value",
  type: "string",
};
const schema113 = {
  default: "",
  examples: ["https://someaddress.com/"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: { pattern: "should be an URL string" },
};
const schema114 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: { pattern: "should be a string that uses semantic versioning" },
};
const pattern0 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  "u"
);
const pattern2 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
const pattern3 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$",
  "u"
);
const pattern4 = new RegExp("^(.+).js$", "u");
const pattern5 = new RegExp("^(.+).json$", "u");
const pattern7 = new RegExp("^([a-z0-9]+-?)*[a-z0-9]+$", "u");
const pattern9 = new RegExp("^(.+).css$", "u");
function validate66(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property '" + "name" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "title" },
        message: "should have required property '" + "title" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "description" },
        message: "should have required property '" + "description" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "author" },
        message: "should have required property '" + "author" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "version" },
        message: "should have required property '" + "version" + "'",
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
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: { missingProperty: "minimumCoreVersion" },
        message: "should have required property '" + "minimumCoreVersion" + "'",
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
          keyword: "type",
          dataPath: dataPath + "/author",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/author/type",
          params: { type: "string" },
          message: "should be string",
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
      let data1 = data.bugs;
      if (typeof data1 === "string") {
        if (!pattern0.test(data1)) {
          const err7 = {
            keyword: "pattern",
            dataPath: dataPath + "/bugs",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/bugs/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
      } else {
        const err8 = {
          keyword: "type",
          dataPath: dataPath + "/bugs",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/bugs/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors0 = { pattern: [] };
        const templates0 = {};
        for (const err9 of vErrors) {
          if (
            err9.keyword !== "errorMessage" &&
            !err9.emUsed &&
            err9.dataPath === dataPath + "/bugs" &&
            err9.keyword in emErrors0 &&
            err9.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/bugs"
            ) === 0 &&
            /^\/[^\/]*$/.test(err9.schemaPath.slice(52))
          ) {
            emErrors0[err9.keyword].push(err9);
            err9.emUsed = true;
          }
        }
        for (const key0 in emErrors0) {
          if (emErrors0[key0].length) {
            const err10 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/bugs",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/bugs/errorMessage",
              params: { errors: emErrors0[key0] },
              message:
                key0 in templates0
                  ? templates0[key0]()
                  : schema97.errorMessage[key0],
            };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        const emErrs0 = [];
        for (const err11 of vErrors) {
          if (!err11.emUsed) {
            emErrs0.push(err11);
          }
        }
        vErrors = emErrs0;
        errors = emErrs0.length;
      }
    }
    if (data.changelog !== undefined) {
      let data2 = data.changelog;
      if (typeof data2 === "string") {
        if (!pattern0.test(data2)) {
          const err12 = {
            keyword: "pattern",
            dataPath: dataPath + "/changelog",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/changelog/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err12];
          } else {
            vErrors.push(err12);
          }
          errors++;
        }
      } else {
        const err13 = {
          keyword: "type",
          dataPath: dataPath + "/changelog",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/changelog/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors1 = { pattern: [] };
        const templates1 = {};
        for (const err14 of vErrors) {
          if (
            err14.keyword !== "errorMessage" &&
            !err14.emUsed &&
            err14.dataPath === dataPath + "/changelog" &&
            err14.keyword in emErrors1 &&
            err14.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/changelog"
            ) === 0 &&
            /^\/[^\/]*$/.test(err14.schemaPath.slice(57))
          ) {
            emErrors1[err14.keyword].push(err14);
            err14.emUsed = true;
          }
        }
        for (const key1 in emErrors1) {
          if (emErrors1[key1].length) {
            const err15 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/changelog",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/changelog/errorMessage",
              params: { errors: emErrors1[key1] },
              message:
                key1 in templates1
                  ? templates1[key1]()
                  : schema98.errorMessage[key1],
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
          }
        }
        const emErrs1 = [];
        for (const err16 of vErrors) {
          if (!err16.emUsed) {
            emErrs1.push(err16);
          }
        }
        vErrors = emErrs1;
        errors = emErrs1.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      let data3 = data.compatibleCoreVersion;
      if (typeof data3 === "string") {
        if (!pattern2.test(data3)) {
          const err17 = {
            keyword: "pattern",
            dataPath: dataPath + "/compatibleCoreVersion",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/compatibleCoreVersion/pattern",
            params: {
              pattern:
                "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            },
            message:
              'should match pattern "' +
              "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err17];
          } else {
            vErrors.push(err17);
          }
          errors++;
        }
      } else {
        const err18 = {
          keyword: "type",
          dataPath: dataPath + "/compatibleCoreVersion",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/compatibleCoreVersion/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err18];
        } else {
          vErrors.push(err18);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors2 = { pattern: [] };
        const templates2 = {};
        for (const err19 of vErrors) {
          if (
            err19.keyword !== "errorMessage" &&
            !err19.emUsed &&
            err19.dataPath === dataPath + "/compatibleCoreVersion" &&
            err19.keyword in emErrors2 &&
            err19.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/compatibleCoreVersion"
            ) === 0 &&
            /^\/[^\/]*$/.test(err19.schemaPath.slice(69))
          ) {
            emErrors2[err19.keyword].push(err19);
            err19.emUsed = true;
          }
        }
        for (const key2 in emErrors2) {
          if (emErrors2[key2].length) {
            const err20 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/compatibleCoreVersion",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/compatibleCoreVersion/errorMessage",
              params: { errors: emErrors2[key2] },
              message:
                key2 in templates2
                  ? templates2[key2]()
                  : schema99.errorMessage[key2],
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
        const emErrs2 = [];
        for (const err21 of vErrors) {
          if (!err21.emUsed) {
            emErrs2.push(err21);
          }
        }
        vErrors = emErrs2;
        errors = emErrs2.length;
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
              const err22 = {
                keyword: "required",
                dataPath: dataPath + "/dependencies/" + i0,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/dependencies/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err22];
              } else {
                vErrors.push(err22);
              }
              errors++;
            }
            if (data5.manifest !== undefined) {
              if (typeof data5.manifest !== "string") {
                const err23 = {
                  keyword: "type",
                  dataPath: dataPath + "/dependencies/" + i0 + "/manifest",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/dependencies/items/properties/manifest/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err23];
                } else {
                  vErrors.push(err23);
                }
                errors++;
              }
            }
            if (data5.name !== undefined) {
              if (typeof data5.name !== "string") {
                const err24 = {
                  keyword: "type",
                  dataPath: dataPath + "/dependencies/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/dependencies/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err24];
                } else {
                  vErrors.push(err24);
                }
                errors++;
              }
            }
            if (data5.type !== undefined) {
              let data8 = data5.type;
              if (
                !(data8 === "module" || data8 === "system" || data8 === "world")
              ) {
                const err25 = {
                  keyword: "enum",
                  dataPath: dataPath + "/dependencies/" + i0 + "/type",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/dependencies/items/properties/type/enum",
                  params: {
                    allowedValues: schema100.items.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
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
              keyword: "type",
              dataPath: dataPath + "/dependencies/" + i0,
              schemaPath:
                "../../definitions/strict/base.json#/definitions/dependencies/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/dependencies",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/dependencies/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err27];
        } else {
          vErrors.push(err27);
        }
        errors++;
      }
    }
    if (data.description !== undefined) {
      if (typeof data.description !== "string") {
        const err28 = {
          keyword: "type",
          dataPath: dataPath + "/description",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/description/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err28];
        } else {
          vErrors.push(err28);
        }
        errors++;
      }
    }
    if (data.download !== undefined) {
      let data10 = data.download;
      if (typeof data10 === "string") {
        if (!pattern3.test(data10)) {
          const err29 = {
            keyword: "pattern",
            dataPath: dataPath + "/download",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/download/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err29];
          } else {
            vErrors.push(err29);
          }
          errors++;
        }
      } else {
        const err30 = {
          keyword: "type",
          dataPath: dataPath + "/download",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/download/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors3 = { pattern: [] };
        const templates3 = {};
        for (const err31 of vErrors) {
          if (
            err31.keyword !== "errorMessage" &&
            !err31.emUsed &&
            err31.dataPath === dataPath + "/download" &&
            err31.keyword in emErrors3 &&
            err31.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/download"
            ) === 0 &&
            /^\/[^\/]*$/.test(err31.schemaPath.slice(56))
          ) {
            emErrors3[err31.keyword].push(err31);
            err31.emUsed = true;
          }
        }
        for (const key3 in emErrors3) {
          if (emErrors3[key3].length) {
            const err32 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/download",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/download/errorMessage",
              params: { errors: emErrors3[key3] },
              message:
                key3 in templates3
                  ? templates3[key3]()
                  : schema102.errorMessage[key3],
            };
            if (vErrors === null) {
              vErrors = [err32];
            } else {
              vErrors.push(err32);
            }
            errors++;
          }
        }
        const emErrs3 = [];
        for (const err33 of vErrors) {
          if (!err33.emUsed) {
            emErrs3.push(err33);
          }
        }
        vErrors = emErrs3;
        errors = emErrs3.length;
      }
    }
    if (data.esmodules !== undefined) {
      let data11 = data.esmodules;
      if (Array.isArray(data11)) {
        const len1 = data11.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data12 = data11[i1];
          if (typeof data12 === "string") {
            if (!pattern4.test(data12)) {
              const err34 = {
                keyword: "pattern",
                dataPath: dataPath + "/esmodules/" + i1,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/esmodules/items/pattern",
                params: { pattern: "^(.+).js$" },
                message: 'should match pattern "' + "^(.+).js$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err34];
              } else {
                vErrors.push(err34);
              }
              errors++;
            }
          } else {
            const err35 = {
              keyword: "type",
              dataPath: dataPath + "/esmodules/" + i1,
              schemaPath:
                "../../definitions/strict/base.json#/definitions/esmodules/items/type",
              params: { type: "string" },
              message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/esmodules",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/esmodules/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err36];
        } else {
          vErrors.push(err36);
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
              const err37 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/languages/items/required",
                params: { missingProperty: "lang" },
                message: "should have required property '" + "lang" + "'",
              };
              if (vErrors === null) {
                vErrors = [err37];
              } else {
                vErrors.push(err37);
              }
              errors++;
            }
            if (data14.name === undefined) {
              const err38 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/languages/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err38];
              } else {
                vErrors.push(err38);
              }
              errors++;
            }
            if (data14.path === undefined) {
              const err39 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i2,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/languages/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err39];
              } else {
                vErrors.push(err39);
              }
              errors++;
            }
            if (data14.lang !== undefined) {
              if (typeof data14.lang !== "string") {
                const err40 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/lang",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/languages/items/properties/lang/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err40];
                } else {
                  vErrors.push(err40);
                }
                errors++;
              }
            }
            if (data14.name !== undefined) {
              if (typeof data14.name !== "string") {
                const err41 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/name",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/languages/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err41];
                } else {
                  vErrors.push(err41);
                }
                errors++;
              }
            }
            if (data14.path !== undefined) {
              let data17 = data14.path;
              if (typeof data17 === "string") {
                if (!pattern5.test(data17)) {
                  const err42 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i2 + "/path",
                    schemaPath:
                      "../../definitions/strict/base.json#/definitions/languages/items/properties/path/pattern",
                    params: { pattern: "^(.+).json$" },
                    message: 'should match pattern "' + "^(.+).json$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err42];
                  } else {
                    vErrors.push(err42);
                  }
                  errors++;
                }
              } else {
                const err43 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i2 + "/path",
                  schemaPath:
                    "../../definitions/strict/base.json#/definitions/languages/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err43];
                } else {
                  vErrors.push(err43);
                }
                errors++;
              }
            }
          } else {
            const err44 = {
              keyword: "type",
              dataPath: dataPath + "/languages/" + i2,
              schemaPath:
                "../../definitions/strict/base.json#/definitions/languages/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err44];
            } else {
              vErrors.push(err44);
            }
            errors++;
          }
        }
      } else {
        const err45 = {
          keyword: "type",
          dataPath: dataPath + "/languages",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/languages/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err45];
        } else {
          vErrors.push(err45);
        }
        errors++;
      }
    }
    if (data.license !== undefined) {
      if (typeof data.license !== "string") {
        const err46 = {
          keyword: "type",
          dataPath: dataPath + "/license",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/license/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err46];
        } else {
          vErrors.push(err46);
        }
        errors++;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      let data19 = data.minimumCoreVersion;
      if (typeof data19 === "string") {
        if (!pattern2.test(data19)) {
          const err47 = {
            keyword: "pattern",
            dataPath: dataPath + "/minimumCoreVersion",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/minimumCoreVersion/pattern",
            params: {
              pattern:
                "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            },
            message:
              'should match pattern "' +
              "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err47];
          } else {
            vErrors.push(err47);
          }
          errors++;
        }
      } else {
        const err48 = {
          keyword: "type",
          dataPath: dataPath + "/minimumCoreVersion",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/minimumCoreVersion/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err48];
        } else {
          vErrors.push(err48);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors4 = { pattern: [] };
        const templates4 = {};
        for (const err49 of vErrors) {
          if (
            err49.keyword !== "errorMessage" &&
            !err49.emUsed &&
            err49.dataPath === dataPath + "/minimumCoreVersion" &&
            err49.keyword in emErrors4 &&
            err49.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/minimumCoreVersion"
            ) === 0 &&
            /^\/[^\/]*$/.test(err49.schemaPath.slice(66))
          ) {
            emErrors4[err49.keyword].push(err49);
            err49.emUsed = true;
          }
        }
        for (const key4 in emErrors4) {
          if (emErrors4[key4].length) {
            const err50 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/minimumCoreVersion",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/minimumCoreVersion/errorMessage",
              params: { errors: emErrors4[key4] },
              message:
                key4 in templates4
                  ? templates4[key4]()
                  : schema106.errorMessage[key4],
            };
            if (vErrors === null) {
              vErrors = [err50];
            } else {
              vErrors.push(err50);
            }
            errors++;
          }
        }
        const emErrs4 = [];
        for (const err51 of vErrors) {
          if (!err51.emUsed) {
            emErrs4.push(err51);
          }
        }
        vErrors = emErrs4;
        errors = emErrs4.length;
      }
    }
    if (data.name !== undefined) {
      let data20 = data.name;
      if (typeof data20 === "string") {
        if (!pattern7.test(data20)) {
          const err52 = {
            keyword: "pattern",
            dataPath: dataPath + "/name",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/name/pattern",
            params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
            message:
              'should match pattern "' + "^([a-z0-9]+-?)*[a-z0-9]+$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err52];
          } else {
            vErrors.push(err52);
          }
          errors++;
        }
      } else {
        const err53 = {
          keyword: "type",
          dataPath: dataPath + "/name",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/name/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err53];
        } else {
          vErrors.push(err53);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors5 = { pattern: [] };
        const templates5 = {};
        for (const err54 of vErrors) {
          if (
            err54.keyword !== "errorMessage" &&
            !err54.emUsed &&
            err54.dataPath === dataPath + "/name" &&
            err54.keyword in emErrors5 &&
            err54.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/name"
            ) === 0 &&
            /^\/[^\/]*$/.test(err54.schemaPath.slice(52))
          ) {
            emErrors5[err54.keyword].push(err54);
            err54.emUsed = true;
          }
        }
        for (const key5 in emErrors5) {
          if (emErrors5[key5].length) {
            const err55 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/name",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/name/errorMessage",
              params: { errors: emErrors5[key5] },
              message:
                key5 in templates5
                  ? templates5[key5]()
                  : schema107.errorMessage[key5],
            };
            if (vErrors === null) {
              vErrors = [err55];
            } else {
              vErrors.push(err55);
            }
            errors++;
          }
        }
        const emErrs5 = [];
        for (const err56 of vErrors) {
          if (!err56.emUsed) {
            emErrs5.push(err56);
          }
        }
        vErrors = emErrs5;
        errors = emErrs5.length;
      }
    }
    if (data.readme !== undefined) {
      if (typeof data.readme !== "string") {
        const err57 = {
          keyword: "type",
          dataPath: dataPath + "/readme",
          schemaPath:
            "../../definitions/loose/base.json#/definitions/readme/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err57];
        } else {
          vErrors.push(err57);
        }
        errors++;
      }
    }
    if (data.scripts !== undefined) {
      let data22 = data.scripts;
      if (Array.isArray(data22)) {
        const len3 = data22.length;
        for (let i3 = 0; i3 < len3; i3++) {
          let data23 = data22[i3];
          if (typeof data23 === "string") {
            if (!pattern4.test(data23)) {
              const err58 = {
                keyword: "pattern",
                dataPath: dataPath + "/scripts/" + i3,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/scripts/items/pattern",
                params: { pattern: "^(.+).js$" },
                message: 'should match pattern "' + "^(.+).js$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err58];
              } else {
                vErrors.push(err58);
              }
              errors++;
            }
          } else {
            const err59 = {
              keyword: "type",
              dataPath: dataPath + "/scripts/" + i3,
              schemaPath:
                "../../definitions/strict/base.json#/definitions/scripts/items/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err59];
            } else {
              vErrors.push(err59);
            }
            errors++;
          }
        }
      } else {
        const err60 = {
          keyword: "type",
          dataPath: dataPath + "/scripts",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/scripts/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err60];
        } else {
          vErrors.push(err60);
        }
        errors++;
      }
    }
    if (data.socket !== undefined) {
      if (typeof data.socket !== "boolean") {
        const err61 = {
          keyword: "type",
          dataPath: dataPath + "/socket",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/socket/type",
          params: { type: "boolean" },
          message: "should be boolean",
        };
        if (vErrors === null) {
          vErrors = [err61];
        } else {
          vErrors.push(err61);
        }
        errors++;
      }
    }
    if (data.styles !== undefined) {
      let data25 = data.styles;
      if (Array.isArray(data25)) {
        const len4 = data25.length;
        for (let i4 = 0; i4 < len4; i4++) {
          let data26 = data25[i4];
          if (typeof data26 === "string") {
            if (!pattern9.test(data26)) {
              const err62 = {
                keyword: "pattern",
                dataPath: dataPath + "/styles/" + i4,
                schemaPath:
                  "../../definitions/strict/base.json#/definitions/styles/items/pattern",
                params: { pattern: "^(.+).css$" },
                message: 'should match pattern "' + "^(.+).css$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err62];
              } else {
                vErrors.push(err62);
              }
              errors++;
            }
          } else {
            const err63 = {
              keyword: "type",
              dataPath: dataPath + "/styles/" + i4,
              schemaPath:
                "../../definitions/strict/base.json#/definitions/styles/items/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err63];
            } else {
              vErrors.push(err63);
            }
            errors++;
          }
        }
      } else {
        const err64 = {
          keyword: "type",
          dataPath: dataPath + "/styles",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/styles/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err64];
        } else {
          vErrors.push(err64);
        }
        errors++;
      }
    }
    if (data.title !== undefined) {
      if (typeof data.title !== "string") {
        const err65 = {
          keyword: "type",
          dataPath: dataPath + "/title",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/title/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err65];
        } else {
          vErrors.push(err65);
        }
        errors++;
      }
    }
    if (data.url !== undefined) {
      let data28 = data.url;
      if (typeof data28 === "string") {
        if (!pattern0.test(data28)) {
          const err66 = {
            keyword: "pattern",
            dataPath: dataPath + "/url",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/url/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err66];
          } else {
            vErrors.push(err66);
          }
          errors++;
        }
      } else {
        const err67 = {
          keyword: "type",
          dataPath: dataPath + "/url",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/url/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err67];
        } else {
          vErrors.push(err67);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors6 = { pattern: [] };
        const templates6 = {};
        for (const err68 of vErrors) {
          if (
            err68.keyword !== "errorMessage" &&
            !err68.emUsed &&
            err68.dataPath === dataPath + "/url" &&
            err68.keyword in emErrors6 &&
            err68.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/url"
            ) === 0 &&
            /^\/[^\/]*$/.test(err68.schemaPath.slice(51))
          ) {
            emErrors6[err68.keyword].push(err68);
            err68.emUsed = true;
          }
        }
        for (const key6 in emErrors6) {
          if (emErrors6[key6].length) {
            const err69 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/url",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/url/errorMessage",
              params: { errors: emErrors6[key6] },
              message:
                key6 in templates6
                  ? templates6[key6]()
                  : schema113.errorMessage[key6],
            };
            if (vErrors === null) {
              vErrors = [err69];
            } else {
              vErrors.push(err69);
            }
            errors++;
          }
        }
        const emErrs6 = [];
        for (const err70 of vErrors) {
          if (!err70.emUsed) {
            emErrs6.push(err70);
          }
        }
        vErrors = emErrs6;
        errors = emErrs6.length;
      }
    }
    if (data.version !== undefined) {
      let data29 = data.version;
      if (typeof data29 === "string") {
        if (!pattern2.test(data29)) {
          const err71 = {
            keyword: "pattern",
            dataPath: dataPath + "/version",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/version/pattern",
            params: {
              pattern:
                "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            },
            message:
              'should match pattern "' +
              "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err71];
          } else {
            vErrors.push(err71);
          }
          errors++;
        }
      } else {
        const err72 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/version/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err72];
        } else {
          vErrors.push(err72);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors7 = { pattern: [] };
        const templates7 = {};
        for (const err73 of vErrors) {
          if (
            err73.keyword !== "errorMessage" &&
            !err73.emUsed &&
            err73.dataPath === dataPath + "/version" &&
            err73.keyword in emErrors7 &&
            err73.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/version"
            ) === 0 &&
            /^\/[^\/]*$/.test(err73.schemaPath.slice(55))
          ) {
            emErrors7[err73.keyword].push(err73);
            err73.emUsed = true;
          }
        }
        for (const key7 in emErrors7) {
          if (emErrors7[key7].length) {
            const err74 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/version",
              schemaPath:
                "../../definitions/strict/base.json#/definitions/version/errorMessage",
              params: { errors: emErrors7[key7] },
              message:
                key7 in templates7
                  ? templates7[key7]()
                  : schema114.errorMessage[key7],
            };
            if (vErrors === null) {
              vErrors = [err74];
            } else {
              vErrors.push(err74);
            }
            errors++;
          }
        }
        const emErrs7 = [];
        for (const err75 of vErrors) {
          if (!err75.emUsed) {
            emErrs7.push(err75);
          }
        }
        vErrors = emErrs7;
        errors = emErrs7.length;
      }
    }
  } else {
    const err76 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err76];
    } else {
      vErrors.push(err76);
    }
    errors++;
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const pattern12 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$",
  "u"
);
const pattern13 = new RegExp("^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$", "u");
const pattern17 = new RegExp("^(.+).db$", "u");
function validate65(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base-module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate66(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      let data0 = data.manifest;
      if (typeof data0 === "string") {
        if (!pattern12.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/manifest",
            schemaPath:
              "../../definitions/strict/module.json#/definitions/manifest/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
      } else {
        const err1 = {
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath:
            "../../definitions/strict/module.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors0 = { pattern: [] };
        const templates0 = {};
        for (const err2 of vErrors) {
          if (
            err2.keyword !== "errorMessage" &&
            !err2.emUsed &&
            err2.dataPath === dataPath + "/manifest" &&
            err2.keyword in emErrors0 &&
            err2.schemaPath.indexOf(
              "../../definitions/strict/module.json#/definitions/manifest"
            ) === 0 &&
            /^\/[^\/]*$/.test(err2.schemaPath.slice(58))
          ) {
            emErrors0[err2.keyword].push(err2);
            err2.emUsed = true;
          }
        }
        for (const key0 in emErrors0) {
          if (emErrors0[key0].length) {
            const err3 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/manifest",
              schemaPath:
                "../../definitions/strict/module.json#/definitions/manifest/errorMessage",
              params: { errors: emErrors0[key0] },
              message:
                key0 in templates0
                  ? templates0[key0]()
                  : schema116.errorMessage[key0],
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        const emErrs0 = [];
        for (const err4 of vErrors) {
          if (!err4.emUsed) {
            emErrs0.push(err4);
          }
        }
        vErrors = emErrs0;
        errors = emErrs0.length;
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
              const err5 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/packs/items/required",
                params: { missingProperty: "module" },
                message: "should have required property '" + "module" + "'",
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            if (data2.name === undefined) {
              const err6 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/packs/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
            if (data2.label === undefined) {
              const err7 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/packs/items/required",
                params: { missingProperty: "label" },
                message: "should have required property '" + "label" + "'",
              };
              if (vErrors === null) {
                vErrors = [err7];
              } else {
                vErrors.push(err7);
              }
              errors++;
            }
            if (data2.path === undefined) {
              const err8 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/packs/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
            if (data2.entity === undefined) {
              const err9 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/packs/items/required",
                params: { missingProperty: "entity" },
                message: "should have required property '" + "entity" + "'",
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
            if (data2.system !== undefined) {
              let data3 = data2.system;
              const _errs7 = errors;
              let valid6 = false;
              let passing0 = null;
              const _errs8 = errors;
              if (typeof data3 === "string") {
                if (!pattern13.test(data3)) {
                  const err10 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/system",
                    schemaPath:
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/0/pattern",
                    params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err10];
                  } else {
                    vErrors.push(err10);
                  }
                  errors++;
                }
              } else {
                const err11 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors1 = { pattern: [] };
                const templates1 = {};
                for (const err12 of vErrors) {
                  if (
                    err12.keyword !== "errorMessage" &&
                    !err12.emUsed &&
                    err12.dataPath === dataPath + "/packs/" + i0 + "/system" &&
                    err12.keyword in emErrors1 &&
                    err12.schemaPath.indexOf(
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/0"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err12.schemaPath.slice(87))
                  ) {
                    emErrors1[err12.keyword].push(err12);
                    err12.emUsed = true;
                  }
                }
                for (const key1 in emErrors1) {
                  if (emErrors1[key1].length) {
                    const err13 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/system",
                      schemaPath:
                        "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/0/errorMessage",
                      params: { errors: emErrors1[key1] },
                      message:
                        key1 in templates1
                          ? templates1[key1]()
                          : schema117.items.properties.system.oneOf[0]
                              .errorMessage[key1],
                    };
                    if (vErrors === null) {
                      vErrors = [err13];
                    } else {
                      vErrors.push(err13);
                    }
                    errors++;
                  }
                }
                const emErrs1 = [];
                for (const err14 of vErrors) {
                  if (!err14.emUsed) {
                    emErrs1.push(err14);
                  }
                }
                vErrors = emErrs1;
                errors = emErrs1.length;
              }
              var _valid0 = _errs8 === errors;
              if (_valid0) {
                valid6 = true;
                passing0 = 0;
              }
              const _errs9 = errors;
              if (Array.isArray(data3)) {
                const len1 = data3.length;
                for (let i1 = 0; i1 < len1; i1++) {
                  let data4 = data3[i1];
                  if (typeof data4 === "string") {
                    if (!pattern13.test(data4)) {
                      const err15 = {
                        keyword: "pattern",
                        dataPath: dataPath + "/packs/" + i0 + "/system/" + i1,
                        schemaPath:
                          "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/1/items/pattern",
                        params: {
                          pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
                        },
                        message:
                          'should match pattern "' +
                          "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
                          '"',
                      };
                      if (vErrors === null) {
                        vErrors = [err15];
                      } else {
                        vErrors.push(err15);
                      }
                      errors++;
                    }
                  } else {
                    const err16 = {
                      keyword: "type",
                      dataPath: dataPath + "/packs/" + i0 + "/system/" + i1,
                      schemaPath:
                        "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/1/items/type",
                      params: { type: "string" },
                      message: "should be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err16];
                    } else {
                      vErrors.push(err16);
                    }
                    errors++;
                  }
                  if (errors > 0) {
                    const emErrors2 = { pattern: [] };
                    const templates2 = {};
                    for (const err17 of vErrors) {
                      if (
                        err17.keyword !== "errorMessage" &&
                        !err17.emUsed &&
                        err17.dataPath ===
                          dataPath + "/packs/" + i0 + "/system/" + i1 &&
                        err17.keyword in emErrors2 &&
                        err17.schemaPath.indexOf(
                          "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/1/items"
                        ) === 0 &&
                        /^\/[^\/]*$/.test(err17.schemaPath.slice(93))
                      ) {
                        emErrors2[err17.keyword].push(err17);
                        err17.emUsed = true;
                      }
                    }
                    for (const key2 in emErrors2) {
                      if (emErrors2[key2].length) {
                        const err18 = {
                          keyword: "errorMessage",
                          dataPath: dataPath + "/packs/" + i0 + "/system/" + i1,
                          schemaPath:
                            "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/1/items/errorMessage",
                          params: { errors: emErrors2[key2] },
                          message:
                            key2 in templates2
                              ? templates2[key2]()
                              : schema117.items.properties.system.oneOf[1].items
                                  .errorMessage[key2],
                        };
                        if (vErrors === null) {
                          vErrors = [err18];
                        } else {
                          vErrors.push(err18);
                        }
                        errors++;
                      }
                    }
                    const emErrs2 = [];
                    for (const err19 of vErrors) {
                      if (!err19.emUsed) {
                        emErrs2.push(err19);
                      }
                    }
                    vErrors = emErrs2;
                    errors = emErrs2.length;
                  }
                }
              } else {
                const err20 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf/1/type",
                  params: { type: "array" },
                  message: "should be array",
                };
                if (vErrors === null) {
                  vErrors = [err20];
                } else {
                  vErrors.push(err20);
                }
                errors++;
              }
              var _valid0 = _errs9 === errors;
              if (_valid0 && valid6) {
                valid6 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid6 = true;
                  passing0 = 1;
                }
              }
              if (!valid6) {
                const err21 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/system/oneOf",
                  params: { passingSchemas: passing0 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err21];
                } else {
                  vErrors.push(err21);
                }
                errors++;
              } else {
                errors = _errs7;
                if (vErrors !== null) {
                  if (_errs7) {
                    vErrors.length = _errs7;
                  } else {
                    vErrors = null;
                  }
                }
              }
              if (errors > 0) {
                const emErrs3 = [];
                for (const err22 of vErrors) {
                  if (
                    err22.keyword !== "errorMessage" &&
                    !err22.emUsed &&
                    (err22.dataPath === dataPath + "/packs/" + i0 + "/system" ||
                      (err22.dataPath.indexOf(
                        dataPath + "/packs/" + i0 + "/system"
                      ) === 0 &&
                        err22.dataPath[
                          dataPath + "/packs/" + i0 + "/system".length
                        ] === "/")) &&
                    err22.schemaPath.indexOf(
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/system"
                    ) === 0 &&
                    err22.schemaPath[
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/system"
                        .length
                    ] === "/"
                  ) {
                    emErrs3.push(err22);
                    err22.emUsed = true;
                  }
                }
                if (emErrs3.length) {
                  const err23 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/packs/" + i0 + "/system",
                    schemaPath:
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/system/errorMessage",
                    params: { errors: emErrs3 },
                    message: "should be a string or array of strings",
                  };
                  if (vErrors === null) {
                    vErrors = [err23];
                  } else {
                    vErrors.push(err23);
                  }
                  errors++;
                }
                const emErrs4 = [];
                for (const err24 of vErrors) {
                  if (!err24.emUsed) {
                    emErrs4.push(err24);
                  }
                }
                vErrors = emErrs4;
                errors = emErrs4.length;
              }
            }
            if (data2.entity !== undefined) {
              let data5 = data2.entity;
              if (
                !(
                  data5 === "Actor" ||
                  data5 === "ChatMessage" ||
                  data5 === "Combat" ||
                  data5 === "Item" ||
                  data5 === "Folder" ||
                  data5 === "JournalEntry" ||
                  data5 === "Macro" ||
                  data5 === "Playlist" ||
                  data5 === "RollTable" ||
                  data5 === "Scene" ||
                  data5 === "User"
                )
              ) {
                const err25 = {
                  keyword: "enum",
                  dataPath: dataPath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/entity/enum",
                  params: {
                    allowedValues: schema117.items.properties.entity.enum,
                  },
                  message: "should be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err25];
                } else {
                  vErrors.push(err25);
                }
                errors++;
              }
            }
            if (data2.label !== undefined) {
              if (typeof data2.label !== "string") {
                const err26 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/label/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err26];
                } else {
                  vErrors.push(err26);
                }
                errors++;
              }
            }
            if (data2.module !== undefined) {
              let data7 = data2.module;
              if (typeof data7 === "string") {
                if (!pattern7.test(data7)) {
                  const err27 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/module",
                    schemaPath:
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/module/pattern",
                    params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-z0-9]+-?)*[a-z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err27];
                  } else {
                    vErrors.push(err27);
                  }
                  errors++;
                }
              } else {
                const err28 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/module/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err28];
                } else {
                  vErrors.push(err28);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors3 = { pattern: [] };
                const templates3 = {};
                for (const err29 of vErrors) {
                  if (
                    err29.keyword !== "errorMessage" &&
                    !err29.emUsed &&
                    err29.dataPath === dataPath + "/packs/" + i0 + "/module" &&
                    err29.keyword in emErrors3 &&
                    err29.schemaPath.indexOf(
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/module"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err29.schemaPath.slice(79))
                  ) {
                    emErrors3[err29.keyword].push(err29);
                    err29.emUsed = true;
                  }
                }
                for (const key3 in emErrors3) {
                  if (emErrors3[key3].length) {
                    const err30 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/module",
                      schemaPath:
                        "../../definitions/strict/module.json#/definitions/packs/items/properties/module/errorMessage",
                      params: { errors: emErrors3[key3] },
                      message:
                        key3 in templates3
                          ? templates3[key3]()
                          : schema117.items.properties.module.errorMessage[
                              key3
                            ],
                    };
                    if (vErrors === null) {
                      vErrors = [err30];
                    } else {
                      vErrors.push(err30);
                    }
                    errors++;
                  }
                }
                const emErrs5 = [];
                for (const err31 of vErrors) {
                  if (!err31.emUsed) {
                    emErrs5.push(err31);
                  }
                }
                vErrors = emErrs5;
                errors = emErrs5.length;
              }
            }
            if (data2.name !== undefined) {
              let data8 = data2.name;
              if (typeof data8 === "string") {
                if (!pattern7.test(data8)) {
                  const err32 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/name",
                    schemaPath:
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/name/pattern",
                    params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-z0-9]+-?)*[a-z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err32];
                  } else {
                    vErrors.push(err32);
                  }
                  errors++;
                }
              } else {
                const err33 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err33];
                } else {
                  vErrors.push(err33);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors4 = { pattern: [] };
                const templates4 = {};
                for (const err34 of vErrors) {
                  if (
                    err34.keyword !== "errorMessage" &&
                    !err34.emUsed &&
                    err34.dataPath === dataPath + "/packs/" + i0 + "/name" &&
                    err34.keyword in emErrors4 &&
                    err34.schemaPath.indexOf(
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/name"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err34.schemaPath.slice(77))
                  ) {
                    emErrors4[err34.keyword].push(err34);
                    err34.emUsed = true;
                  }
                }
                for (const key4 in emErrors4) {
                  if (emErrors4[key4].length) {
                    const err35 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/name",
                      schemaPath:
                        "../../definitions/strict/module.json#/definitions/packs/items/properties/name/errorMessage",
                      params: { errors: emErrors4[key4] },
                      message:
                        key4 in templates4
                          ? templates4[key4]()
                          : schema117.items.properties.name.errorMessage[key4],
                    };
                    if (vErrors === null) {
                      vErrors = [err35];
                    } else {
                      vErrors.push(err35);
                    }
                    errors++;
                  }
                }
                const emErrs6 = [];
                for (const err36 of vErrors) {
                  if (!err36.emUsed) {
                    emErrs6.push(err36);
                  }
                }
                vErrors = emErrs6;
                errors = emErrs6.length;
              }
            }
            if (data2.path !== undefined) {
              let data9 = data2.path;
              if (typeof data9 === "string") {
                if (!pattern17.test(data9)) {
                  const err37 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/path",
                    schemaPath:
                      "../../definitions/strict/module.json#/definitions/packs/items/properties/path/pattern",
                    params: { pattern: "^(.+).db$" },
                    message: 'should match pattern "' + "^(.+).db$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err37];
                  } else {
                    vErrors.push(err37);
                  }
                  errors++;
                }
              } else {
                const err38 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/packs/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err38];
                } else {
                  vErrors.push(err38);
                }
                errors++;
              }
            }
          } else {
            const err39 = {
              keyword: "type",
              dataPath: dataPath + "/packs/" + i0,
              schemaPath:
                "../../definitions/strict/module.json#/definitions/packs/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err39];
            } else {
              vErrors.push(err39);
            }
            errors++;
          }
        }
      } else {
        const err40 = {
          keyword: "type",
          dataPath: dataPath + "/packs",
          schemaPath:
            "../../definitions/strict/module.json#/definitions/packs/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err40];
        } else {
          vErrors.push(err40);
        }
        errors++;
      }
    }
    if (data.system !== undefined) {
      let data10 = data.system;
      const _errs18 = errors;
      let valid9 = false;
      let passing1 = null;
      const _errs19 = errors;
      if (typeof data10 === "string") {
        if (!pattern13.test(data10)) {
          const err41 = {
            keyword: "pattern",
            dataPath: dataPath + "/system",
            schemaPath:
              "../../definitions/strict/module.json#/definitions/system/oneOf/0/pattern",
            params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
            message:
              'should match pattern "' +
              "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err41];
          } else {
            vErrors.push(err41);
          }
          errors++;
        }
      } else {
        const err42 = {
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/strict/module.json#/definitions/system/oneOf/0/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err42];
        } else {
          vErrors.push(err42);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors5 = { pattern: [] };
        const templates5 = {};
        for (const err43 of vErrors) {
          if (
            err43.keyword !== "errorMessage" &&
            !err43.emUsed &&
            err43.dataPath === dataPath + "/system" &&
            err43.keyword in emErrors5 &&
            err43.schemaPath.indexOf(
              "../../definitions/strict/module.json#/definitions/system/oneOf/0"
            ) === 0 &&
            /^\/[^\/]*$/.test(err43.schemaPath.slice(64))
          ) {
            emErrors5[err43.keyword].push(err43);
            err43.emUsed = true;
          }
        }
        for (const key5 in emErrors5) {
          if (emErrors5[key5].length) {
            const err44 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/system",
              schemaPath:
                "../../definitions/strict/module.json#/definitions/system/oneOf/0/errorMessage",
              params: { errors: emErrors5[key5] },
              message:
                key5 in templates5
                  ? templates5[key5]()
                  : schema118.oneOf[0].errorMessage[key5],
            };
            if (vErrors === null) {
              vErrors = [err44];
            } else {
              vErrors.push(err44);
            }
            errors++;
          }
        }
        const emErrs7 = [];
        for (const err45 of vErrors) {
          if (!err45.emUsed) {
            emErrs7.push(err45);
          }
        }
        vErrors = emErrs7;
        errors = emErrs7.length;
      }
      var _valid1 = _errs19 === errors;
      if (_valid1) {
        valid9 = true;
        passing1 = 0;
      }
      const _errs20 = errors;
      if (Array.isArray(data10)) {
        const len2 = data10.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data11 = data10[i2];
          if (typeof data11 === "string") {
            if (!pattern13.test(data11)) {
              const err46 = {
                keyword: "pattern",
                dataPath: dataPath + "/system/" + i2,
                schemaPath:
                  "../../definitions/strict/module.json#/definitions/system/oneOf/1/items/pattern",
                params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
                message:
                  'should match pattern "' +
                  "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err46];
              } else {
                vErrors.push(err46);
              }
              errors++;
            }
          } else {
            const err47 = {
              keyword: "type",
              dataPath: dataPath + "/system/" + i2,
              schemaPath:
                "../../definitions/strict/module.json#/definitions/system/oneOf/1/items/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err47];
            } else {
              vErrors.push(err47);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors6 = { pattern: [] };
            const templates6 = {};
            for (const err48 of vErrors) {
              if (
                err48.keyword !== "errorMessage" &&
                !err48.emUsed &&
                err48.dataPath === dataPath + "/system/" + i2 &&
                err48.keyword in emErrors6 &&
                err48.schemaPath.indexOf(
                  "../../definitions/strict/module.json#/definitions/system/oneOf/1/items"
                ) === 0 &&
                /^\/[^\/]*$/.test(err48.schemaPath.slice(70))
              ) {
                emErrors6[err48.keyword].push(err48);
                err48.emUsed = true;
              }
            }
            for (const key6 in emErrors6) {
              if (emErrors6[key6].length) {
                const err49 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/system/" + i2,
                  schemaPath:
                    "../../definitions/strict/module.json#/definitions/system/oneOf/1/items/errorMessage",
                  params: { errors: emErrors6[key6] },
                  message:
                    key6 in templates6
                      ? templates6[key6]()
                      : schema118.oneOf[1].items.errorMessage[key6],
                };
                if (vErrors === null) {
                  vErrors = [err49];
                } else {
                  vErrors.push(err49);
                }
                errors++;
              }
            }
            const emErrs8 = [];
            for (const err50 of vErrors) {
              if (!err50.emUsed) {
                emErrs8.push(err50);
              }
            }
            vErrors = emErrs8;
            errors = emErrs8.length;
          }
        }
      } else {
        const err51 = {
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/strict/module.json#/definitions/system/oneOf/1/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err51];
        } else {
          vErrors.push(err51);
        }
        errors++;
      }
      var _valid1 = _errs20 === errors;
      if (_valid1 && valid9) {
        valid9 = false;
        passing1 = [passing1, 1];
      } else {
        if (_valid1) {
          valid9 = true;
          passing1 = 1;
        }
      }
      if (!valid9) {
        const err52 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath:
            "../../definitions/strict/module.json#/definitions/system/oneOf",
          params: { passingSchemas: passing1 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err52];
        } else {
          vErrors.push(err52);
        }
        errors++;
      } else {
        errors = _errs18;
        if (vErrors !== null) {
          if (_errs18) {
            vErrors.length = _errs18;
          } else {
            vErrors = null;
          }
        }
      }
      if (errors > 0) {
        const emErrs9 = [];
        for (const err53 of vErrors) {
          if (
            err53.keyword !== "errorMessage" &&
            !err53.emUsed &&
            (err53.dataPath === dataPath + "/system" ||
              (err53.dataPath.indexOf(dataPath + "/system") === 0 &&
                err53.dataPath[dataPath + "/system".length] === "/")) &&
            err53.schemaPath.indexOf(
              "../../definitions/strict/module.json#/definitions/system"
            ) === 0 &&
            err53.schemaPath[
              "../../definitions/strict/module.json#/definitions/system".length
            ] === "/"
          ) {
            emErrs9.push(err53);
            err53.emUsed = true;
          }
        }
        if (emErrs9.length) {
          const err54 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/system",
            schemaPath:
              "../../definitions/strict/module.json#/definitions/system/errorMessage",
            params: { errors: emErrs9 },
            message: "should be a string or array of strings",
          };
          if (vErrors === null) {
            vErrors = [err54];
          } else {
            vErrors.push(err54);
          }
          errors++;
        }
        const emErrs10 = [];
        for (const err55 of vErrors) {
          if (!err55.emUsed) {
            emErrs10.push(err55);
          }
        }
        vErrors = emErrs10;
        errors = emErrs10.length;
      }
    }
  } else {
    const err56 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err56];
    } else {
      vErrors.push(err56);
    }
    errors++;
  }
  validate65.errors = vErrors;
  return errors === 0;
}
const schema120 = {
  items: {
    $ref: "#/definitions/properties-author",
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema121 = {
  properties: {
    email: {
      default: "",
      examples: ["admin@foundryvtt.com"],
      title: "A string value",
      type: "string",
      pattern:
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      errorMessage: {
        pattern: "should be a string that is a valid email address",
      },
    },
    name: {
      default: "",
      examples: ["Atropos"],
      title: "A string value",
      type: "string",
    },
    url: {
      default: "",
      examples: ["https://foundryvtt.com"],
      title: "A string value",
      type: "string",
      pattern:
        "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
      errorMessage: { pattern: "should be an URL string" },
    },
  },
  required: ["name"],
};
const pattern20 = new RegExp(
  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  "u"
);
function validate72(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          let data1 = data0.email;
          if (typeof data1 === "string") {
            if (!pattern20.test(data1)) {
              const err2 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/email",
                schemaPath:
                  "#/definitions/properties-author/properties/email/pattern",
                params: {
                  pattern:
                    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                },
                message:
                  'should match pattern "' +
                  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$' +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          } else {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors0 = { pattern: [] };
            const templates0 = {};
            for (const err4 of vErrors) {
              if (
                err4.keyword !== "errorMessage" &&
                !err4.emUsed &&
                err4.dataPath === dataPath + "/" + i0 + "/email" &&
                err4.keyword in emErrors0 &&
                err4.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/email"
                ) === 0 &&
                /^\/[^\/]*$/.test(err4.schemaPath.slice(48))
              ) {
                emErrors0[err4.keyword].push(err4);
                err4.emUsed = true;
              }
            }
            for (const key0 in emErrors0) {
              if (emErrors0[key0].length) {
                const err5 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/email",
                  schemaPath:
                    "#/definitions/properties-author/properties/email/errorMessage",
                  params: { errors: emErrors0[key0] },
                  message:
                    key0 in templates0
                      ? templates0[key0]()
                      : schema121.properties.email.errorMessage[key0],
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
            const emErrs0 = [];
            for (const err6 of vErrors) {
              if (!err6.emUsed) {
                emErrs0.push(err6);
              }
            }
            vErrors = emErrs0;
            errors = emErrs0.length;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          let data3 = data0.url;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err8 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath:
                  "#/definitions/properties-author/properties/url/pattern",
                params: {
                  pattern:
                    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
                },
                message:
                  'should match pattern "' +
                  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          } else {
            const err9 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors1 = { pattern: [] };
            const templates1 = {};
            for (const err10 of vErrors) {
              if (
                err10.keyword !== "errorMessage" &&
                !err10.emUsed &&
                err10.dataPath === dataPath + "/" + i0 + "/url" &&
                err10.keyword in emErrors1 &&
                err10.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/url"
                ) === 0 &&
                /^\/[^\/]*$/.test(err10.schemaPath.slice(46))
              ) {
                emErrors1[err10.keyword].push(err10);
                err10.emUsed = true;
              }
            }
            for (const key1 in emErrors1) {
              if (emErrors1[key1].length) {
                const err11 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/properties-author/properties/url/errorMessage",
                  params: { errors: emErrors1[key1] },
                  message:
                    key1 in templates1
                      ? templates1[key1]()
                      : schema121.properties.url.errorMessage[key1],
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
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
      }
    }
  } else {
    const err13 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err13];
    } else {
      vErrors.push(err13);
    }
    errors++;
  }
  validate72.errors = vErrors;
  return errors === 0;
}
function validate64(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate65(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate72(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate72.errors
            : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate64.errors = vErrors;
  return errors === 0;
}
function validate63(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModuleStrict" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate64(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema91.errorMessage[key0],
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
  validate63.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate75;
const schema122 = {
  $id: "validateModulePlusStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/module+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema123 = {
  $id: "shared/properties/strict/module+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (strict)",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-module.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/strict/authors.json#/definitions/authors+",
    },
  },
};
const schema124 = {
  $id: "shared/properties/strict/base-manifest+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared loose base for manifest+",
  type: "object",
  properties: {
    conflicts: {
      $ref:
        "../../definitions/strict/base-manifest+.json#/definitions/conflicts",
    },
    deprecated: {
      $ref:
        "../../definitions/strict/base-manifest+.json#/definitions/deprecated",
    },
    includes: {
      $ref:
        "../../definitions/strict/base-manifest+.json#/definitions/includes",
    },
    library: {
      $ref: "../../definitions/strict/base-manifest+.json#/definitions/library",
    },
    manifestPlusVersion: {
      $ref:
        "../../definitions/strict/base-manifest+.json#/definitions/manifestPlusVersion",
    },
    media: {
      $ref: "../../definitions/strict/base-manifest+.json#/definitions/media",
    },
  },
};
const schema126 = {
  items: {
    properties: {
      name: {
        examples: ["dice-so-nice"],
        title: "A string value",
        type: "string",
        pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is alpha-numeric with only underscore and hyphen separators",
        },
      },
      type: {
        enum: ["module", "system", "world"],
        examples: ["module"],
        title: "A string value",
      },
      versionMax: {
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "A string value",
      },
      versionMin: {
        errorMessage: "should be a string or number",
        examples: ["1.0.0"],
        oneOf: [{ type: "string" }, { type: "number" }],
        title: "A string value",
      },
    },
    required: ["name", "type"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const schema127 = {
  properties: {
    alternatives: {
      items: {
        properties: {
          name: {
            examples: ["dice-so-nice"],
            title: "A string value",
            type: "string",
            pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
            errorMessage: {
              pattern:
                "should be a string that is alpha-numeric with only underscore and hyphen separators",
            },
          },
          manifest: {
            examples: ["https://link.com/to/manifest.json"],
            title: "A string value",
            type: "string",
            pattern:
              "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$",
            errorMessage: {
              pattern:
                "should be an URL string ending in 'module.json' or 'system.json'",
            },
          },
        },
        required: ["name", "manifest"],
        title: "An object value",
        type: "object",
      },
      title: "An array of items",
      type: "array",
    },
    coreVersion: {
      examples: ["0.7.5"],
      title: "A string value",
      type: "string",
      pattern:
        "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
      errorMessage: {
        pattern: "should be a string that uses semantic versioning",
      },
    },
    reason: {
      examples: ["This was added to foundry core."],
      title: "A string value",
      type: "string",
    },
  },
  title: "An object",
  type: "object",
};
const schema128 = {
  items: {
    examples: [
      "relative/path/to/files/script.js",
      "relative/path/to/templates/template.html",
      "path/to/image/assets/folder",
    ],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
  uniqueItems: true,
};
const schema129 = {
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
const schema130 = {
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: { pattern: "should be a string that uses semantic versioning" },
};
const pattern24 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$",
  "u"
);
const schema131 = {
  items: { $ref: "#/definitions/media-item-strict" },
  title: "An array of items",
  type: "array",
};
const schema132 = {
  type: "object",
  required: ["type", "url"],
  if: { properties: { type: { const: "video" } } },
  then: {
    properties: {
      type: { const: "video" },
      loop: { type: "boolean" },
      thumbnail: {
        type: "string",
        pattern:
          "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$",
        errorMessage: {
          pattern: "should be a valid image URL string for <img> tags",
        },
      },
      url: {
        type: "string",
        pattern:
          "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
        errorMessage: { pattern: "should be an URL string" },
      },
    },
    additionalProperties: false,
  },
  else: {
    if: { properties: { type: { enum: ["cover", "icon", "screenshot"] } } },
    then: {
      properties: {
        type: { enum: ["cover", "icon", "screenshot"] },
        url: {
          type: "string",
          pattern:
            "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$",
          errorMessage: {
            pattern: "should be a valid image URL string for <img> tags",
          },
        },
      },
      additionalProperties: false,
    },
    else: {
      properties: { type: { enum: ["cover", "icon", "screenshot", "video"] } },
    },
  },
};
const pattern27 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$",
  "u"
);
function validate79(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      const _errs2 = errors;
      let valid2 = true;
      const _errs3 = errors;
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.type !== undefined) {
          if (!func0(data0.type, "video")) {
            const err0 = {};
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
      }
      var _valid0 = _errs3 === errors;
      errors = _errs2;
      if (vErrors !== null) {
        if (_errs2) {
          vErrors.length = _errs2;
        } else {
          vErrors = null;
        }
      }
      let ifClause0;
      if (_valid0) {
        const _errs5 = errors;
        if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
          for (const key0 in data0) {
            if (
              !(
                key0 === "type" ||
                key0 === "loop" ||
                key0 === "thumbnail" ||
                key0 === "url"
              )
            ) {
              const err1 = {
                keyword: "additionalProperties",
                dataPath: dataPath + "/" + i0,
                schemaPath:
                  "#/definitions/media-item-strict/then/additionalProperties",
                params: { additionalProperty: key0 },
                message: "should NOT have additional properties",
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
          }
          if (data0.type !== undefined) {
            if (!func0(data0.type, "video")) {
              const err2 = {
                keyword: "const",
                dataPath: dataPath + "/" + i0 + "/type",
                schemaPath:
                  "#/definitions/media-item-strict/then/properties/type/const",
                params: { allowedValue: "video" },
                message: "should be equal to constant",
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          }
          if (data0.loop !== undefined) {
            if (typeof data0.loop !== "boolean") {
              const err3 = {
                keyword: "type",
                dataPath: dataPath + "/" + i0 + "/loop",
                schemaPath:
                  "#/definitions/media-item-strict/then/properties/loop/type",
                params: { type: "boolean" },
                message: "should be boolean",
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          if (data0.thumbnail !== undefined) {
            let data4 = data0.thumbnail;
            if (typeof data4 === "string") {
              if (!pattern27.test(data4)) {
                const err4 = {
                  keyword: "pattern",
                  dataPath: dataPath + "/" + i0 + "/thumbnail",
                  schemaPath:
                    "#/definitions/media-item-strict/then/properties/thumbnail/pattern",
                  params: {
                    pattern:
                      "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$",
                  },
                  message:
                    'should match pattern "' +
                    "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$" +
                    '"',
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
              }
            } else {
              const err5 = {
                keyword: "type",
                dataPath: dataPath + "/" + i0 + "/thumbnail",
                schemaPath:
                  "#/definitions/media-item-strict/then/properties/thumbnail/type",
                params: { type: "string" },
                message: "should be string",
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            if (errors > 0) {
              const emErrors0 = { pattern: [] };
              const templates0 = {};
              for (const err6 of vErrors) {
                if (
                  err6.keyword !== "errorMessage" &&
                  !err6.emUsed &&
                  err6.dataPath === dataPath + "/" + i0 + "/thumbnail" &&
                  err6.keyword in emErrors0 &&
                  err6.schemaPath.indexOf(
                    "#/definitions/media-item-strict/then/properties/thumbnail"
                  ) === 0 &&
                  /^\/[^\/]*$/.test(err6.schemaPath.slice(57))
                ) {
                  emErrors0[err6.keyword].push(err6);
                  err6.emUsed = true;
                }
              }
              for (const key1 in emErrors0) {
                if (emErrors0[key1].length) {
                  const err7 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/" + i0 + "/thumbnail",
                    schemaPath:
                      "#/definitions/media-item-strict/then/properties/thumbnail/errorMessage",
                    params: { errors: emErrors0[key1] },
                    message:
                      key1 in templates0
                        ? templates0[key1]()
                        : schema132.then.properties.thumbnail.errorMessage[
                            key1
                          ],
                  };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              const emErrs0 = [];
              for (const err8 of vErrors) {
                if (!err8.emUsed) {
                  emErrs0.push(err8);
                }
              }
              vErrors = emErrs0;
              errors = emErrs0.length;
            }
          }
          if (data0.url !== undefined) {
            let data5 = data0.url;
            if (typeof data5 === "string") {
              if (!pattern0.test(data5)) {
                const err9 = {
                  keyword: "pattern",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/media-item-strict/then/properties/url/pattern",
                  params: {
                    pattern:
                      "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
                  },
                  message:
                    'should match pattern "' +
                    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
                    '"',
                };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              }
            } else {
              const err10 = {
                keyword: "type",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath:
                  "#/definitions/media-item-strict/then/properties/url/type",
                params: { type: "string" },
                message: "should be string",
              };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            }
            if (errors > 0) {
              const emErrors1 = { pattern: [] };
              const templates1 = {};
              for (const err11 of vErrors) {
                if (
                  err11.keyword !== "errorMessage" &&
                  !err11.emUsed &&
                  err11.dataPath === dataPath + "/" + i0 + "/url" &&
                  err11.keyword in emErrors1 &&
                  err11.schemaPath.indexOf(
                    "#/definitions/media-item-strict/then/properties/url"
                  ) === 0 &&
                  /^\/[^\/]*$/.test(err11.schemaPath.slice(51))
                ) {
                  emErrors1[err11.keyword].push(err11);
                  err11.emUsed = true;
                }
              }
              for (const key2 in emErrors1) {
                if (emErrors1[key2].length) {
                  const err12 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/" + i0 + "/url",
                    schemaPath:
                      "#/definitions/media-item-strict/then/properties/url/errorMessage",
                    params: { errors: emErrors1[key2] },
                    message:
                      key2 in templates1
                        ? templates1[key2]()
                        : schema132.then.properties.url.errorMessage[key2],
                  };
                  if (vErrors === null) {
                    vErrors = [err12];
                  } else {
                    vErrors.push(err12);
                  }
                  errors++;
                }
              }
              const emErrs1 = [];
              for (const err13 of vErrors) {
                if (!err13.emUsed) {
                  emErrs1.push(err13);
                }
              }
              vErrors = emErrs1;
              errors = emErrs1.length;
            }
          }
        }
        var _valid0 = _errs5 === errors;
        valid2 = _valid0;
        ifClause0 = "then";
      } else {
        const _errs11 = errors;
        const _errs12 = errors;
        let valid5 = true;
        const _errs13 = errors;
        if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
          if (data0.type !== undefined) {
            let data6 = data0.type;
            if (
              !(data6 === "cover" || data6 === "icon" || data6 === "screenshot")
            ) {
              const err14 = {};
              if (vErrors === null) {
                vErrors = [err14];
              } else {
                vErrors.push(err14);
              }
              errors++;
            }
          }
        }
        var _valid1 = _errs13 === errors;
        errors = _errs12;
        if (vErrors !== null) {
          if (_errs12) {
            vErrors.length = _errs12;
          } else {
            vErrors = null;
          }
        }
        let ifClause1;
        if (_valid1) {
          const _errs15 = errors;
          if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
            for (const key3 in data0) {
              if (!(key3 === "type" || key3 === "url")) {
                const err15 = {
                  keyword: "additionalProperties",
                  dataPath: dataPath + "/" + i0,
                  schemaPath:
                    "#/definitions/media-item-strict/else/then/additionalProperties",
                  params: { additionalProperty: key3 },
                  message: "should NOT have additional properties",
                };
                if (vErrors === null) {
                  vErrors = [err15];
                } else {
                  vErrors.push(err15);
                }
                errors++;
              }
            }
            if (data0.type !== undefined) {
              let data7 = data0.type;
              if (
                !(
                  data7 === "cover" ||
                  data7 === "icon" ||
                  data7 === "screenshot"
                )
              ) {
                const err16 = {
                  keyword: "enum",
                  dataPath: dataPath + "/" + i0 + "/type",
                  schemaPath:
                    "#/definitions/media-item-strict/else/then/properties/type/enum",
                  params: {
                    allowedValues: schema132.else.then.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
                }
                errors++;
              }
            }
            if (data0.url !== undefined) {
              let data8 = data0.url;
              if (typeof data8 === "string") {
                if (!pattern27.test(data8)) {
                  const err17 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/" + i0 + "/url",
                    schemaPath:
                      "#/definitions/media-item-strict/else/then/properties/url/pattern",
                    params: {
                      pattern:
                        "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$",
                    },
                    message:
                      'should match pattern "' +
                      "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err17];
                  } else {
                    vErrors.push(err17);
                  }
                  errors++;
                }
              } else {
                const err18 = {
                  keyword: "type",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/media-item-strict/else/then/properties/url/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err18];
                } else {
                  vErrors.push(err18);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors2 = { pattern: [] };
                const templates2 = {};
                for (const err19 of vErrors) {
                  if (
                    err19.keyword !== "errorMessage" &&
                    !err19.emUsed &&
                    err19.dataPath === dataPath + "/" + i0 + "/url" &&
                    err19.keyword in emErrors2 &&
                    err19.schemaPath.indexOf(
                      "#/definitions/media-item-strict/else/then/properties/url"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err19.schemaPath.slice(56))
                  ) {
                    emErrors2[err19.keyword].push(err19);
                    err19.emUsed = true;
                  }
                }
                for (const key4 in emErrors2) {
                  if (emErrors2[key4].length) {
                    const err20 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/" + i0 + "/url",
                      schemaPath:
                        "#/definitions/media-item-strict/else/then/properties/url/errorMessage",
                      params: { errors: emErrors2[key4] },
                      message:
                        key4 in templates2
                          ? templates2[key4]()
                          : schema132.else.then.properties.url.errorMessage[
                              key4
                            ],
                    };
                    if (vErrors === null) {
                      vErrors = [err20];
                    } else {
                      vErrors.push(err20);
                    }
                    errors++;
                  }
                }
                const emErrs2 = [];
                for (const err21 of vErrors) {
                  if (!err21.emUsed) {
                    emErrs2.push(err21);
                  }
                }
                vErrors = emErrs2;
                errors = emErrs2.length;
              }
            }
          }
          var _valid1 = _errs15 === errors;
          valid5 = _valid1;
          ifClause1 = "then";
        } else {
          const _errs19 = errors;
          if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
            if (data0.type !== undefined) {
              let data9 = data0.type;
              if (
                !(
                  data9 === "cover" ||
                  data9 === "icon" ||
                  data9 === "screenshot" ||
                  data9 === "video"
                )
              ) {
                const err22 = {
                  keyword: "enum",
                  dataPath: dataPath + "/" + i0 + "/type",
                  schemaPath:
                    "#/definitions/media-item-strict/else/else/properties/type/enum",
                  params: {
                    allowedValues: schema132.else.else.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
          }
          var _valid1 = _errs19 === errors;
          valid5 = _valid1;
          ifClause1 = "else";
        }
        if (!valid5) {
          const err23 = {
            keyword: "if",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/media-item-strict/else/if",
            params: { failingKeyword: ifClause1 },
            message: 'should match "' + ifClause1 + '" schema',
          };
          if (vErrors === null) {
            vErrors = [err23];
          } else {
            vErrors.push(err23);
          }
          errors++;
        }
        var _valid0 = _errs11 === errors;
        valid2 = _valid0;
        ifClause0 = "else";
      }
      if (!valid2) {
        const err24 = {
          keyword: "if",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/definitions/media-item-strict/if",
          params: { failingKeyword: ifClause0 },
          message: 'should match "' + ifClause0 + '" schema',
        };
        if (vErrors === null) {
          vErrors = [err24];
        } else {
          vErrors.push(err24);
        }
        errors++;
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.type === undefined) {
          const err25 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/media-item-strict/required",
            params: { missingProperty: "type" },
            message: "should have required property '" + "type" + "'",
          };
          if (vErrors === null) {
            vErrors = [err25];
          } else {
            vErrors.push(err25);
          }
          errors++;
        }
        if (data0.url === undefined) {
          const err26 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/media-item-strict/required",
            params: { missingProperty: "url" },
            message: "should have required property '" + "url" + "'",
          };
          if (vErrors === null) {
            vErrors = [err26];
          } else {
            vErrors.push(err26);
          }
          errors++;
        }
      } else {
        const err27 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/definitions/media-item-strict/type",
          params: { type: "object" },
          message: "should be object",
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
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err28];
    } else {
      vErrors.push(err28);
    }
    errors++;
  }
  validate79.errors = vErrors;
  return errors === 0;
}
function validate77(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base-manifest+.json" */ let vErrors = null;
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
                keyword: "required",
                dataPath: dataPath + "/conflicts/" + i0,
                schemaPath:
                  "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
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
                keyword: "required",
                dataPath: dataPath + "/conflicts/" + i0,
                schemaPath:
                  "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/required",
                params: { missingProperty: "type" },
                message: "should have required property '" + "type" + "'",
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (data1.name !== undefined) {
              let data2 = data1.name;
              if (typeof data2 === "string") {
                if (!pattern13.test(data2)) {
                  const err2 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/conflicts/" + i0 + "/name",
                    schemaPath:
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/name/pattern",
                    params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err2];
                  } else {
                    vErrors.push(err2);
                  }
                  errors++;
                }
              } else {
                const err3 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors0 = { pattern: [] };
                const templates0 = {};
                for (const err4 of vErrors) {
                  if (
                    err4.keyword !== "errorMessage" &&
                    !err4.emUsed &&
                    err4.dataPath === dataPath + "/conflicts/" + i0 + "/name" &&
                    err4.keyword in emErrors0 &&
                    err4.schemaPath.indexOf(
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/name"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err4.schemaPath.slice(89))
                  ) {
                    emErrors0[err4.keyword].push(err4);
                    err4.emUsed = true;
                  }
                }
                for (const key0 in emErrors0) {
                  if (emErrors0[key0].length) {
                    const err5 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/conflicts/" + i0 + "/name",
                      schemaPath:
                        "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/name/errorMessage",
                      params: { errors: emErrors0[key0] },
                      message:
                        key0 in templates0
                          ? templates0[key0]()
                          : schema126.items.properties.name.errorMessage[key0],
                    };
                    if (vErrors === null) {
                      vErrors = [err5];
                    } else {
                      vErrors.push(err5);
                    }
                    errors++;
                  }
                }
                const emErrs0 = [];
                for (const err6 of vErrors) {
                  if (!err6.emUsed) {
                    emErrs0.push(err6);
                  }
                }
                vErrors = emErrs0;
                errors = emErrs0.length;
              }
            }
            if (data1.type !== undefined) {
              let data3 = data1.type;
              if (
                !(data3 === "module" || data3 === "system" || data3 === "world")
              ) {
                const err7 = {
                  keyword: "enum",
                  dataPath: dataPath + "/conflicts/" + i0 + "/type",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/type/enum",
                  params: {
                    allowedValues: schema126.items.properties.type.enum,
                  },
                  message: "should be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err7];
                } else {
                  vErrors.push(err7);
                }
                errors++;
              }
            }
            if (data1.versionMax !== undefined) {
              let data4 = data1.versionMax;
              const _errs6 = errors;
              let valid4 = false;
              let passing0 = null;
              const _errs7 = errors;
              if (typeof data4 !== "string") {
                const err8 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var _valid0 = _errs7 === errors;
              if (_valid0) {
                valid4 = true;
                passing0 = 0;
              }
              const _errs8 = errors;
              if (!(typeof data4 == "number" && isFinite(data4))) {
                const err9 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf/1/type",
                  params: { type: "number" },
                  message: "should be number",
                };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              }
              var _valid0 = _errs8 === errors;
              if (_valid0 && valid4) {
                valid4 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid4 = true;
                  passing0 = 1;
                }
              }
              if (!valid4) {
                const err10 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/oneOf",
                  params: { passingSchemas: passing0 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err10];
                } else {
                  vErrors.push(err10);
                }
                errors++;
              } else {
                errors = _errs6;
                if (vErrors !== null) {
                  if (_errs6) {
                    vErrors.length = _errs6;
                  } else {
                    vErrors = null;
                  }
                }
              }
              if (errors > 0) {
                const emErrs1 = [];
                for (const err11 of vErrors) {
                  if (
                    err11.keyword !== "errorMessage" &&
                    !err11.emUsed &&
                    (err11.dataPath ===
                      dataPath + "/conflicts/" + i0 + "/versionMax" ||
                      (err11.dataPath.indexOf(
                        dataPath + "/conflicts/" + i0 + "/versionMax"
                      ) === 0 &&
                        err11.dataPath[
                          dataPath + "/conflicts/" + i0 + "/versionMax".length
                        ] === "/")) &&
                    err11.schemaPath.indexOf(
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                    ) === 0 &&
                    err11.schemaPath[
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax"
                        .length
                    ] === "/"
                  ) {
                    emErrs1.push(err11);
                    err11.emUsed = true;
                  }
                }
                if (emErrs1.length) {
                  const err12 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/conflicts/" + i0 + "/versionMax",
                    schemaPath:
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMax/errorMessage",
                    params: { errors: emErrs1 },
                    message: "should be a string or number",
                  };
                  if (vErrors === null) {
                    vErrors = [err12];
                  } else {
                    vErrors.push(err12);
                  }
                  errors++;
                }
                const emErrs2 = [];
                for (const err13 of vErrors) {
                  if (!err13.emUsed) {
                    emErrs2.push(err13);
                  }
                }
                vErrors = emErrs2;
                errors = emErrs2.length;
              }
            }
            if (data1.versionMin !== undefined) {
              let data5 = data1.versionMin;
              const _errs10 = errors;
              let valid5 = false;
              let passing1 = null;
              const _errs11 = errors;
              if (typeof data5 !== "string") {
                const err14 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/0/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
              var _valid1 = _errs11 === errors;
              if (_valid1) {
                valid5 = true;
                passing1 = 0;
              }
              const _errs12 = errors;
              if (!(typeof data5 == "number" && isFinite(data5))) {
                const err15 = {
                  keyword: "type",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf/1/type",
                  params: { type: "number" },
                  message: "should be number",
                };
                if (vErrors === null) {
                  vErrors = [err15];
                } else {
                  vErrors.push(err15);
                }
                errors++;
              }
              var _valid1 = _errs12 === errors;
              if (_valid1 && valid5) {
                valid5 = false;
                passing1 = [passing1, 1];
              } else {
                if (_valid1) {
                  valid5 = true;
                  passing1 = 1;
                }
              }
              if (!valid5) {
                const err16 = {
                  keyword: "oneOf",
                  dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/oneOf",
                  params: { passingSchemas: passing1 },
                  message: "should match exactly one schema in oneOf",
                };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
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
                const emErrs3 = [];
                for (const err17 of vErrors) {
                  if (
                    err17.keyword !== "errorMessage" &&
                    !err17.emUsed &&
                    (err17.dataPath ===
                      dataPath + "/conflicts/" + i0 + "/versionMin" ||
                      (err17.dataPath.indexOf(
                        dataPath + "/conflicts/" + i0 + "/versionMin"
                      ) === 0 &&
                        err17.dataPath[
                          dataPath + "/conflicts/" + i0 + "/versionMin".length
                        ] === "/")) &&
                    err17.schemaPath.indexOf(
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                    ) === 0 &&
                    err17.schemaPath[
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin"
                        .length
                    ] === "/"
                  ) {
                    emErrs3.push(err17);
                    err17.emUsed = true;
                  }
                }
                if (emErrs3.length) {
                  const err18 = {
                    keyword: "errorMessage",
                    dataPath: dataPath + "/conflicts/" + i0 + "/versionMin",
                    schemaPath:
                      "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/properties/versionMin/errorMessage",
                    params: { errors: emErrs3 },
                    message: "should be a string or number",
                  };
                  if (vErrors === null) {
                    vErrors = [err18];
                  } else {
                    vErrors.push(err18);
                  }
                  errors++;
                }
                const emErrs4 = [];
                for (const err19 of vErrors) {
                  if (!err19.emUsed) {
                    emErrs4.push(err19);
                  }
                }
                vErrors = emErrs4;
                errors = emErrs4.length;
              }
            }
          } else {
            const err20 = {
              keyword: "type",
              dataPath: dataPath + "/conflicts/" + i0,
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/conflicts/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
        }
      } else {
        const err21 = {
          keyword: "type",
          dataPath: dataPath + "/conflicts",
          schemaPath:
            "../../definitions/strict/base-manifest+.json#/definitions/conflicts/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err21];
        } else {
          vErrors.push(err21);
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
                  const err22 = {
                    keyword: "required",
                    dataPath: dataPath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    params: { missingProperty: "name" },
                    message: "should have required property '" + "name" + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err22];
                  } else {
                    vErrors.push(err22);
                  }
                  errors++;
                }
                if (data8.manifest === undefined) {
                  const err23 = {
                    keyword: "required",
                    dataPath: dataPath + "/deprecated/alternatives/" + i1,
                    schemaPath:
                      "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/required",
                    params: { missingProperty: "manifest" },
                    message:
                      "should have required property '" + "manifest" + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err23];
                  } else {
                    vErrors.push(err23);
                  }
                  errors++;
                }
                if (data8.name !== undefined) {
                  let data9 = data8.name;
                  if (typeof data9 === "string") {
                    if (!pattern13.test(data9)) {
                      const err24 = {
                        keyword: "pattern",
                        dataPath:
                          dataPath + "/deprecated/alternatives/" + i1 + "/name",
                        schemaPath:
                          "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name/pattern",
                        params: {
                          pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
                        },
                        message:
                          'should match pattern "' +
                          "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
                          '"',
                      };
                      if (vErrors === null) {
                        vErrors = [err24];
                      } else {
                        vErrors.push(err24);
                      }
                      errors++;
                    }
                  } else {
                    const err25 = {
                      keyword: "type",
                      dataPath:
                        dataPath + "/deprecated/alternatives/" + i1 + "/name",
                      schemaPath:
                        "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name/type",
                      params: { type: "string" },
                      message: "should be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err25];
                    } else {
                      vErrors.push(err25);
                    }
                    errors++;
                  }
                  if (errors > 0) {
                    const emErrors1 = { pattern: [] };
                    const templates1 = {};
                    for (const err26 of vErrors) {
                      if (
                        err26.keyword !== "errorMessage" &&
                        !err26.emUsed &&
                        err26.dataPath ===
                          dataPath +
                            "/deprecated/alternatives/" +
                            i1 +
                            "/name" &&
                        err26.keyword in emErrors1 &&
                        err26.schemaPath.indexOf(
                          "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name"
                        ) === 0 &&
                        /^\/[^\/]*$/.test(err26.schemaPath.slice(114))
                      ) {
                        emErrors1[err26.keyword].push(err26);
                        err26.emUsed = true;
                      }
                    }
                    for (const key1 in emErrors1) {
                      if (emErrors1[key1].length) {
                        const err27 = {
                          keyword: "errorMessage",
                          dataPath:
                            dataPath +
                            "/deprecated/alternatives/" +
                            i1 +
                            "/name",
                          schemaPath:
                            "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/name/errorMessage",
                          params: { errors: emErrors1[key1] },
                          message:
                            key1 in templates1
                              ? templates1[key1]()
                              : schema127.properties.alternatives.items
                                  .properties.name.errorMessage[key1],
                        };
                        if (vErrors === null) {
                          vErrors = [err27];
                        } else {
                          vErrors.push(err27);
                        }
                        errors++;
                      }
                    }
                    const emErrs5 = [];
                    for (const err28 of vErrors) {
                      if (!err28.emUsed) {
                        emErrs5.push(err28);
                      }
                    }
                    vErrors = emErrs5;
                    errors = emErrs5.length;
                  }
                }
                if (data8.manifest !== undefined) {
                  let data10 = data8.manifest;
                  if (typeof data10 === "string") {
                    if (!pattern24.test(data10)) {
                      const err29 = {
                        keyword: "pattern",
                        dataPath:
                          dataPath +
                          "/deprecated/alternatives/" +
                          i1 +
                          "/manifest",
                        schemaPath:
                          "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest/pattern",
                        params: {
                          pattern:
                            "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$",
                        },
                        message:
                          'should match pattern "' +
                          "^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\\.)+(?:[a-z¡-￿]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$" +
                          '"',
                      };
                      if (vErrors === null) {
                        vErrors = [err29];
                      } else {
                        vErrors.push(err29);
                      }
                      errors++;
                    }
                  } else {
                    const err30 = {
                      keyword: "type",
                      dataPath:
                        dataPath +
                        "/deprecated/alternatives/" +
                        i1 +
                        "/manifest",
                      schemaPath:
                        "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest/type",
                      params: { type: "string" },
                      message: "should be string",
                    };
                    if (vErrors === null) {
                      vErrors = [err30];
                    } else {
                      vErrors.push(err30);
                    }
                    errors++;
                  }
                  if (errors > 0) {
                    const emErrors2 = { pattern: [] };
                    const templates2 = {};
                    for (const err31 of vErrors) {
                      if (
                        err31.keyword !== "errorMessage" &&
                        !err31.emUsed &&
                        err31.dataPath ===
                          dataPath +
                            "/deprecated/alternatives/" +
                            i1 +
                            "/manifest" &&
                        err31.keyword in emErrors2 &&
                        err31.schemaPath.indexOf(
                          "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest"
                        ) === 0 &&
                        /^\/[^\/]*$/.test(err31.schemaPath.slice(118))
                      ) {
                        emErrors2[err31.keyword].push(err31);
                        err31.emUsed = true;
                      }
                    }
                    for (const key2 in emErrors2) {
                      if (emErrors2[key2].length) {
                        const err32 = {
                          keyword: "errorMessage",
                          dataPath:
                            dataPath +
                            "/deprecated/alternatives/" +
                            i1 +
                            "/manifest",
                          schemaPath:
                            "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/properties/manifest/errorMessage",
                          params: { errors: emErrors2[key2] },
                          message:
                            key2 in templates2
                              ? templates2[key2]()
                              : schema127.properties.alternatives.items
                                  .properties.manifest.errorMessage[key2],
                        };
                        if (vErrors === null) {
                          vErrors = [err32];
                        } else {
                          vErrors.push(err32);
                        }
                        errors++;
                      }
                    }
                    const emErrs6 = [];
                    for (const err33 of vErrors) {
                      if (!err33.emUsed) {
                        emErrs6.push(err33);
                      }
                    }
                    vErrors = emErrs6;
                    errors = emErrs6.length;
                  }
                }
              } else {
                const err34 = {
                  keyword: "type",
                  dataPath: dataPath + "/deprecated/alternatives/" + i1,
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/items/type",
                  params: { type: "object" },
                  message: "should be object",
                };
                if (vErrors === null) {
                  vErrors = [err34];
                } else {
                  vErrors.push(err34);
                }
                errors++;
              }
            }
          } else {
            const err35 = {
              keyword: "type",
              dataPath: dataPath + "/deprecated/alternatives",
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/alternatives/type",
              params: { type: "array" },
              message: "should be array",
            };
            if (vErrors === null) {
              vErrors = [err35];
            } else {
              vErrors.push(err35);
            }
            errors++;
          }
        }
        if (data6.coreVersion !== undefined) {
          let data11 = data6.coreVersion;
          if (typeof data11 === "string") {
            if (!pattern2.test(data11)) {
              const err36 = {
                keyword: "pattern",
                dataPath: dataPath + "/deprecated/coreVersion",
                schemaPath:
                  "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/coreVersion/pattern",
                params: {
                  pattern:
                    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
                },
                message:
                  'should match pattern "' +
                  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err36];
              } else {
                vErrors.push(err36);
              }
              errors++;
            }
          } else {
            const err37 = {
              keyword: "type",
              dataPath: dataPath + "/deprecated/coreVersion",
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/coreVersion/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err37];
            } else {
              vErrors.push(err37);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors3 = { pattern: [] };
            const templates3 = {};
            for (const err38 of vErrors) {
              if (
                err38.keyword !== "errorMessage" &&
                !err38.emUsed &&
                err38.dataPath === dataPath + "/deprecated/coreVersion" &&
                err38.keyword in emErrors3 &&
                err38.schemaPath.indexOf(
                  "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/coreVersion"
                ) === 0 &&
                /^\/[^\/]*$/.test(err38.schemaPath.slice(91))
              ) {
                emErrors3[err38.keyword].push(err38);
                err38.emUsed = true;
              }
            }
            for (const key3 in emErrors3) {
              if (emErrors3[key3].length) {
                const err39 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/deprecated/coreVersion",
                  schemaPath:
                    "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/coreVersion/errorMessage",
                  params: { errors: emErrors3[key3] },
                  message:
                    key3 in templates3
                      ? templates3[key3]()
                      : schema127.properties.coreVersion.errorMessage[key3],
                };
                if (vErrors === null) {
                  vErrors = [err39];
                } else {
                  vErrors.push(err39);
                }
                errors++;
              }
            }
            const emErrs7 = [];
            for (const err40 of vErrors) {
              if (!err40.emUsed) {
                emErrs7.push(err40);
              }
            }
            vErrors = emErrs7;
            errors = emErrs7.length;
          }
        }
        if (data6.reason !== undefined) {
          if (typeof data6.reason !== "string") {
            const err41 = {
              keyword: "type",
              dataPath: dataPath + "/deprecated/reason",
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/deprecated/properties/reason/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err41];
            } else {
              vErrors.push(err41);
            }
            errors++;
          }
        }
      } else {
        const err42 = {
          keyword: "type",
          dataPath: dataPath + "/deprecated",
          schemaPath:
            "../../definitions/strict/base-manifest+.json#/definitions/deprecated/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err42];
        } else {
          vErrors.push(err42);
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
            const err43 = {
              keyword: "type",
              dataPath: dataPath + "/includes/" + i2,
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/includes/items/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err43];
            } else {
              vErrors.push(err43);
            }
            errors++;
          }
        }
        let i3 = data13.length;
        let j0;
        if (i3 > 1) {
          const indices0 = {};
          for (; i3--; ) {
            let item0 = data13[i3];
            if (typeof item0 !== "string") {
              continue;
            }
            if (typeof indices0[item0] == "number") {
              j0 = indices0[item0];
              const err44 = {
                keyword: "uniqueItems",
                dataPath: dataPath + "/includes",
                schemaPath:
                  "../../definitions/strict/base-manifest+.json#/definitions/includes/uniqueItems",
                params: { i: i3, j: j0 },
                message:
                  "should NOT have duplicate items (items ## " +
                  j0 +
                  " and " +
                  i3 +
                  " are identical)",
              };
              if (vErrors === null) {
                vErrors = [err44];
              } else {
                vErrors.push(err44);
              }
              errors++;
              break;
            }
            indices0[item0] = i3;
          }
        }
      } else {
        const err45 = {
          keyword: "type",
          dataPath: dataPath + "/includes",
          schemaPath:
            "../../definitions/strict/base-manifest+.json#/definitions/includes/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err45];
        } else {
          vErrors.push(err45);
        }
        errors++;
      }
    }
    if (data.library !== undefined) {
      if (typeof data.library !== "boolean") {
        const err46 = {
          keyword: "type",
          dataPath: dataPath + "/library",
          schemaPath:
            "../../definitions/strict/base-manifest+.json#/definitions/library/type",
          params: { type: "boolean" },
          message: "should be boolean",
        };
        if (vErrors === null) {
          vErrors = [err46];
        } else {
          vErrors.push(err46);
        }
        errors++;
      }
    }
    if (data.manifestPlusVersion !== undefined) {
      let data16 = data.manifestPlusVersion;
      if (typeof data16 === "string") {
        if (!pattern2.test(data16)) {
          const err47 = {
            keyword: "pattern",
            dataPath: dataPath + "/manifestPlusVersion",
            schemaPath:
              "../../definitions/strict/base-manifest+.json#/definitions/manifestPlusVersion/pattern",
            params: {
              pattern:
                "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            },
            message:
              'should match pattern "' +
              "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err47];
          } else {
            vErrors.push(err47);
          }
          errors++;
        }
      } else {
        const err48 = {
          keyword: "type",
          dataPath: dataPath + "/manifestPlusVersion",
          schemaPath:
            "../../definitions/strict/base-manifest+.json#/definitions/manifestPlusVersion/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err48];
        } else {
          vErrors.push(err48);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors4 = { pattern: [] };
        const templates4 = {};
        for (const err49 of vErrors) {
          if (
            err49.keyword !== "errorMessage" &&
            !err49.emUsed &&
            err49.dataPath === dataPath + "/manifestPlusVersion" &&
            err49.keyword in emErrors4 &&
            err49.schemaPath.indexOf(
              "../../definitions/strict/base-manifest+.json#/definitions/manifestPlusVersion"
            ) === 0 &&
            /^\/[^\/]*$/.test(err49.schemaPath.slice(77))
          ) {
            emErrors4[err49.keyword].push(err49);
            err49.emUsed = true;
          }
        }
        for (const key4 in emErrors4) {
          if (emErrors4[key4].length) {
            const err50 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/manifestPlusVersion",
              schemaPath:
                "../../definitions/strict/base-manifest+.json#/definitions/manifestPlusVersion/errorMessage",
              params: { errors: emErrors4[key4] },
              message:
                key4 in templates4
                  ? templates4[key4]()
                  : schema130.errorMessage[key4],
            };
            if (vErrors === null) {
              vErrors = [err50];
            } else {
              vErrors.push(err50);
            }
            errors++;
          }
        }
        const emErrs8 = [];
        for (const err51 of vErrors) {
          if (!err51.emUsed) {
            emErrs8.push(err51);
          }
        }
        vErrors = emErrs8;
        errors = emErrs8.length;
      }
    }
    if (data.media !== undefined) {
      if (
        !validate79(data.media, {
          dataPath: dataPath + "/media",
          parentData: data,
          parentDataProperty: "media",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate79.errors
            : vErrors.concat(validate79.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err52 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err52];
    } else {
      vErrors.push(err52);
    }
    errors++;
  }
  validate77.errors = vErrors;
  return errors === 0;
}
const schema133 = {
  items: {
    allOf: [
      { $ref: "#/definitions/properties-author" },
      { $ref: "#/definitions/properties-author+" },
    ],
    type: "object",
    title: "An object value",
  },
  title: "An array of items",
  type: "array",
};
const schema135 = {
  properties: {
    discord: {
      default: "",
      examples: ["discordID#0001"],
      title: "A string value",
      type: "string",
      pattern: "^.{3,32}#[0-9]{4}$",
      errorMessage: {
        pattern: "should be a string that is a valid Discord user name",
      },
    },
    patreon: {
      default: "",
      examples: ["patreonName"],
      title: "A string value",
      type: "string",
    },
    reddit: {
      default: "",
      examples: ["u/RedditUsername"],
      title: "A string value",
      type: "string",
      pattern: "^u/[A-Za-z0-9_-]+$",
      errorMessage: {
        pattern: "should be a string that is a valid Reddit user name",
      },
    },
    twitter: {
      default: "",
      examples: ["@TwitterHandle"],
      title: "A string value",
      type: "string",
      pattern: "^@[A-Za-z0-9_]{1,15}$",
      errorMessage: {
        pattern: "should be a string that is a valid twitter user name",
      },
    },
  },
};
const pattern32 = new RegExp("^.{3,32}#[0-9]{4}$", "u");
const pattern33 = new RegExp("^u/[A-Za-z0-9_-]+$", "u");
const pattern34 = new RegExp("^@[A-Za-z0-9_]{1,15}$", "u");
function validate83(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          let data1 = data0.email;
          if (typeof data1 === "string") {
            if (!pattern20.test(data1)) {
              const err2 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/email",
                schemaPath:
                  "#/definitions/properties-author/properties/email/pattern",
                params: {
                  pattern:
                    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                },
                message:
                  'should match pattern "' +
                  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$' +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          } else {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors0 = { pattern: [] };
            const templates0 = {};
            for (const err4 of vErrors) {
              if (
                err4.keyword !== "errorMessage" &&
                !err4.emUsed &&
                err4.dataPath === dataPath + "/" + i0 + "/email" &&
                err4.keyword in emErrors0 &&
                err4.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/email"
                ) === 0 &&
                /^\/[^\/]*$/.test(err4.schemaPath.slice(48))
              ) {
                emErrors0[err4.keyword].push(err4);
                err4.emUsed = true;
              }
            }
            for (const key0 in emErrors0) {
              if (emErrors0[key0].length) {
                const err5 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/email",
                  schemaPath:
                    "#/definitions/properties-author/properties/email/errorMessage",
                  params: { errors: emErrors0[key0] },
                  message:
                    key0 in templates0
                      ? templates0[key0]()
                      : schema121.properties.email.errorMessage[key0],
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
            const emErrs0 = [];
            for (const err6 of vErrors) {
              if (!err6.emUsed) {
                emErrs0.push(err6);
              }
            }
            vErrors = emErrs0;
            errors = emErrs0.length;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          let data3 = data0.url;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err8 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath:
                  "#/definitions/properties-author/properties/url/pattern",
                params: {
                  pattern:
                    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
                },
                message:
                  'should match pattern "' +
                  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          } else {
            const err9 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors1 = { pattern: [] };
            const templates1 = {};
            for (const err10 of vErrors) {
              if (
                err10.keyword !== "errorMessage" &&
                !err10.emUsed &&
                err10.dataPath === dataPath + "/" + i0 + "/url" &&
                err10.keyword in emErrors1 &&
                err10.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/url"
                ) === 0 &&
                /^\/[^\/]*$/.test(err10.schemaPath.slice(46))
              ) {
                emErrors1[err10.keyword].push(err10);
                err10.emUsed = true;
              }
            }
            for (const key1 in emErrors1) {
              if (emErrors1[key1].length) {
                const err11 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/properties-author/properties/url/errorMessage",
                  params: { errors: emErrors1[key1] },
                  message:
                    key1 in templates1
                      ? templates1[key1]()
                      : schema121.properties.url.errorMessage[key1],
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
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
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.discord !== undefined) {
          let data4 = data0.discord;
          if (typeof data4 === "string") {
            if (!pattern32.test(data4)) {
              const err13 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/discord",
                schemaPath:
                  "#/definitions/properties-author+/properties/discord/pattern",
                params: { pattern: "^.{3,32}#[0-9]{4}$" },
                message: 'should match pattern "' + "^.{3,32}#[0-9]{4}$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err13];
              } else {
                vErrors.push(err13);
              }
              errors++;
            }
          } else {
            const err14 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err14];
            } else {
              vErrors.push(err14);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors2 = { pattern: [] };
            const templates2 = {};
            for (const err15 of vErrors) {
              if (
                err15.keyword !== "errorMessage" &&
                !err15.emUsed &&
                err15.dataPath === dataPath + "/" + i0 + "/discord" &&
                err15.keyword in emErrors2 &&
                err15.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/discord"
                ) === 0 &&
                /^\/[^\/]*$/.test(err15.schemaPath.slice(51))
              ) {
                emErrors2[err15.keyword].push(err15);
                err15.emUsed = true;
              }
            }
            for (const key2 in emErrors2) {
              if (emErrors2[key2].length) {
                const err16 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/discord",
                  schemaPath:
                    "#/definitions/properties-author+/properties/discord/errorMessage",
                  params: { errors: emErrors2[key2] },
                  message:
                    key2 in templates2
                      ? templates2[key2]()
                      : schema135.properties.discord.errorMessage[key2],
                };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
                }
                errors++;
              }
            }
            const emErrs2 = [];
            for (const err17 of vErrors) {
              if (!err17.emUsed) {
                emErrs2.push(err17);
              }
            }
            vErrors = emErrs2;
            errors = emErrs2.length;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err18 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          let data6 = data0.reddit;
          if (typeof data6 === "string") {
            if (!pattern33.test(data6)) {
              const err19 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/reddit",
                schemaPath:
                  "#/definitions/properties-author+/properties/reddit/pattern",
                params: { pattern: "^u/[A-Za-z0-9_-]+$" },
                message: 'should match pattern "' + "^u/[A-Za-z0-9_-]+$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err19];
              } else {
                vErrors.push(err19);
              }
              errors++;
            }
          } else {
            const err20 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors3 = { pattern: [] };
            const templates3 = {};
            for (const err21 of vErrors) {
              if (
                err21.keyword !== "errorMessage" &&
                !err21.emUsed &&
                err21.dataPath === dataPath + "/" + i0 + "/reddit" &&
                err21.keyword in emErrors3 &&
                err21.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/reddit"
                ) === 0 &&
                /^\/[^\/]*$/.test(err21.schemaPath.slice(50))
              ) {
                emErrors3[err21.keyword].push(err21);
                err21.emUsed = true;
              }
            }
            for (const key3 in emErrors3) {
              if (emErrors3[key3].length) {
                const err22 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/reddit",
                  schemaPath:
                    "#/definitions/properties-author+/properties/reddit/errorMessage",
                  params: { errors: emErrors3[key3] },
                  message:
                    key3 in templates3
                      ? templates3[key3]()
                      : schema135.properties.reddit.errorMessage[key3],
                };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
            const emErrs3 = [];
            for (const err23 of vErrors) {
              if (!err23.emUsed) {
                emErrs3.push(err23);
              }
            }
            vErrors = emErrs3;
            errors = emErrs3.length;
          }
        }
        if (data0.twitter !== undefined) {
          let data7 = data0.twitter;
          if (typeof data7 === "string") {
            if (!pattern34.test(data7)) {
              const err24 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/twitter",
                schemaPath:
                  "#/definitions/properties-author+/properties/twitter/pattern",
                params: { pattern: "^@[A-Za-z0-9_]{1,15}$" },
                message:
                  'should match pattern "' + "^@[A-Za-z0-9_]{1,15}$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err24];
              } else {
                vErrors.push(err24);
              }
              errors++;
            }
          } else {
            const err25 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors4 = { pattern: [] };
            const templates4 = {};
            for (const err26 of vErrors) {
              if (
                err26.keyword !== "errorMessage" &&
                !err26.emUsed &&
                err26.dataPath === dataPath + "/" + i0 + "/twitter" &&
                err26.keyword in emErrors4 &&
                err26.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/twitter"
                ) === 0 &&
                /^\/[^\/]*$/.test(err26.schemaPath.slice(51))
              ) {
                emErrors4[err26.keyword].push(err26);
                err26.emUsed = true;
              }
            }
            for (const key4 in emErrors4) {
              if (emErrors4[key4].length) {
                const err27 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/twitter",
                  schemaPath:
                    "#/definitions/properties-author+/properties/twitter/errorMessage",
                  params: { errors: emErrors4[key4] },
                  message:
                    key4 in templates4
                      ? templates4[key4]()
                      : schema135.properties.twitter.errorMessage[key4],
                };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
            }
            const emErrs4 = [];
            for (const err28 of vErrors) {
              if (!err28.emUsed) {
                emErrs4.push(err28);
              }
            }
            vErrors = emErrs4;
            errors = emErrs4.length;
          }
        }
      }
    }
  } else {
    const err29 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err29];
    } else {
      vErrors.push(err29);
    }
    errors++;
  }
  validate83.errors = vErrors;
  return errors === 0;
}
function validate76(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate77(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
    errors = vErrors.length;
  }
  if (
    !validate65(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate83(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate83.errors
            : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate76.errors = vErrors;
  return errors === 0;
}
function validate75(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlusStrict" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate76(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema122.errorMessage[key0],
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
  validate75.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate86;
const schema136 = {
  $id: "validateSystemStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/system.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema137 = {
  $id: "shared/properties/strict/system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (strict)",
  type: "object",
  allOf: [{ $ref: "base-system.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/strict/authors.json#/definitions/authors",
    },
  },
};
const schema138 = {
  $id: "shared/properties/strict/base-system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base for system.json",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    gridDistance: {
      $ref: "../../definitions/strict/system.json#/definitions/gridDistance",
    },
    gridUnits: {
      $ref: "../../definitions/strict/system.json#/definitions/gridUnits",
    },
    initiative: {
      $ref: "../../definitions/strict/system.json#/definitions/initiative",
    },
    manifest: {
      $ref: "../../definitions/strict/system.json#/definitions/manifest",
    },
    packs: { $ref: "../../definitions/strict/system.json#/definitions/packs" },
    primaryTokenAttribute: {
      $ref:
        "../../definitions/strict/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref:
        "../../definitions/strict/system.json#/definitions/secondaryTokenAttribute",
    },
    templateVersion: {
      $ref: "../../definitions/strict/system.json#/definitions/templateVersion",
    },
  },
};
const schema140 = {
  default: 0,
  examples: [5],
  title: "An integer value",
  type: "integer",
};
const schema141 = {
  default: "",
  examples: ["ft, m"],
  title: "A string value",
  type: "string",
};
const schema142 = {
  default: "",
  examples: ["1d20"],
  title: "A string value",
  type: "string",
};
const schema143 = {
  default: "",
  examples: ["https://someaddress.com/system.json"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$",
  errorMessage: { pattern: "should be an URL string ending in 'system.json'" },
};
const schema144 = {
  title: "An array of items",
  items: {
    required: ["system", "name", "label", "path", "entity"],
    properties: {
      system: {
        title: "A string value",
        default: "",
        examples: ["system-name"],
        type: "string",
        pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is lowercase alpha-numeric with only separating hyphens",
        },
      },
      entity: {
        title: "A string value",
        default: "",
        examples: ["Item"],
        enum: [
          "Actor",
          "ChatMessage",
          "Combat",
          "Item",
          "Folder",
          "JournalEntry",
          "Macro",
          "Playlist",
          "RollTable",
          "Scene",
          "User",
        ],
      },
      label: {
        title: "A string value",
        default: "",
        examples: ["Pack Title"],
        type: "string",
      },
      module: {
        title: "A string value",
        default: "",
        examples: ["module-name"],
        type: "string",
        pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is lowercase alpha-numeric with only separating hyphens",
        },
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["pack-name"],
        type: "string",
        pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
        errorMessage: {
          pattern:
            "should be a string that is lowercase alpha-numeric with only separating hyphens",
        },
      },
      path: {
        title: "A string value",
        default: "",
        examples: ["./packs/pack-name.db"],
        type: "string",
        pattern: "^(.+).db$",
      },
    },
    title: "An object value",
    type: "object",
  },
  type: "array",
};
const schema145 = {
  default: "",
  examples: ["resources.health"],
  title: "A string value or null",
  type: ["null", "string"],
};
const schema146 = {
  default: "",
  examples: ["resources.power"],
  title: "A string value or null",
  type: ["null", "string"],
};
const schema147 = {
  default: 0,
  examples: [2],
  title: "An integer value",
  type: "integer",
};
const pattern35 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$",
  "u"
);
function validate88(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base-system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate66(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
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
          keyword: "type",
          dataPath: dataPath + "/gridDistance",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/gridDistance/type",
          params: { type: "integer" },
          message: "should be integer",
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
          keyword: "type",
          dataPath: dataPath + "/gridUnits",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/gridUnits/type",
          params: { type: "string" },
          message: "should be string",
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
          keyword: "type",
          dataPath: dataPath + "/initiative",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/initiative/type",
          params: { type: "string" },
          message: "should be string",
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
      let data3 = data.manifest;
      if (typeof data3 === "string") {
        if (!pattern35.test(data3)) {
          const err3 = {
            keyword: "pattern",
            dataPath: dataPath + "/manifest",
            schemaPath:
              "../../definitions/strict/system.json#/definitions/manifest/pattern",
            params: {
              pattern:
                "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$",
            },
            message:
              'should match pattern "' +
              "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$" +
              '"',
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
      } else {
        const err4 = {
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      if (errors > 0) {
        const emErrors0 = { pattern: [] };
        const templates0 = {};
        for (const err5 of vErrors) {
          if (
            err5.keyword !== "errorMessage" &&
            !err5.emUsed &&
            err5.dataPath === dataPath + "/manifest" &&
            err5.keyword in emErrors0 &&
            err5.schemaPath.indexOf(
              "../../definitions/strict/system.json#/definitions/manifest"
            ) === 0 &&
            /^\/[^\/]*$/.test(err5.schemaPath.slice(58))
          ) {
            emErrors0[err5.keyword].push(err5);
            err5.emUsed = true;
          }
        }
        for (const key0 in emErrors0) {
          if (emErrors0[key0].length) {
            const err6 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/manifest",
              schemaPath:
                "../../definitions/strict/system.json#/definitions/manifest/errorMessage",
              params: { errors: emErrors0[key0] },
              message:
                key0 in templates0
                  ? templates0[key0]()
                  : schema143.errorMessage[key0],
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
        const emErrs0 = [];
        for (const err7 of vErrors) {
          if (!err7.emUsed) {
            emErrs0.push(err7);
          }
        }
        vErrors = emErrs0;
        errors = emErrs0.length;
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
              const err8 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/system.json#/definitions/packs/items/required",
                params: { missingProperty: "system" },
                message: "should have required property '" + "system" + "'",
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
            if (data5.name === undefined) {
              const err9 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/system.json#/definitions/packs/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
            if (data5.label === undefined) {
              const err10 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/system.json#/definitions/packs/items/required",
                params: { missingProperty: "label" },
                message: "should have required property '" + "label" + "'",
              };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            }
            if (data5.path === undefined) {
              const err11 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/system.json#/definitions/packs/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
            if (data5.entity === undefined) {
              const err12 = {
                keyword: "required",
                dataPath: dataPath + "/packs/" + i0,
                schemaPath:
                  "../../definitions/strict/system.json#/definitions/packs/items/required",
                params: { missingProperty: "entity" },
                message: "should have required property '" + "entity" + "'",
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
            }
            if (data5.system !== undefined) {
              let data6 = data5.system;
              if (typeof data6 === "string") {
                if (!pattern7.test(data6)) {
                  const err13 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/system",
                    schemaPath:
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/system/pattern",
                    params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-z0-9]+-?)*[a-z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
              } else {
                const err14 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/system",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/system/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err14];
                } else {
                  vErrors.push(err14);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors1 = { pattern: [] };
                const templates1 = {};
                for (const err15 of vErrors) {
                  if (
                    err15.keyword !== "errorMessage" &&
                    !err15.emUsed &&
                    err15.dataPath === dataPath + "/packs/" + i0 + "/system" &&
                    err15.keyword in emErrors1 &&
                    err15.schemaPath.indexOf(
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/system"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err15.schemaPath.slice(79))
                  ) {
                    emErrors1[err15.keyword].push(err15);
                    err15.emUsed = true;
                  }
                }
                for (const key1 in emErrors1) {
                  if (emErrors1[key1].length) {
                    const err16 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/system",
                      schemaPath:
                        "../../definitions/strict/system.json#/definitions/packs/items/properties/system/errorMessage",
                      params: { errors: emErrors1[key1] },
                      message:
                        key1 in templates1
                          ? templates1[key1]()
                          : schema144.items.properties.system.errorMessage[
                              key1
                            ],
                    };
                    if (vErrors === null) {
                      vErrors = [err16];
                    } else {
                      vErrors.push(err16);
                    }
                    errors++;
                  }
                }
                const emErrs1 = [];
                for (const err17 of vErrors) {
                  if (!err17.emUsed) {
                    emErrs1.push(err17);
                  }
                }
                vErrors = emErrs1;
                errors = emErrs1.length;
              }
            }
            if (data5.entity !== undefined) {
              let data7 = data5.entity;
              if (
                !(
                  data7 === "Actor" ||
                  data7 === "ChatMessage" ||
                  data7 === "Combat" ||
                  data7 === "Item" ||
                  data7 === "Folder" ||
                  data7 === "JournalEntry" ||
                  data7 === "Macro" ||
                  data7 === "Playlist" ||
                  data7 === "RollTable" ||
                  data7 === "Scene" ||
                  data7 === "User"
                )
              ) {
                const err18 = {
                  keyword: "enum",
                  dataPath: dataPath + "/packs/" + i0 + "/entity",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/entity/enum",
                  params: {
                    allowedValues: schema144.items.properties.entity.enum,
                  },
                  message: "should be equal to one of the allowed values",
                };
                if (vErrors === null) {
                  vErrors = [err18];
                } else {
                  vErrors.push(err18);
                }
                errors++;
              }
            }
            if (data5.label !== undefined) {
              if (typeof data5.label !== "string") {
                const err19 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/label",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/label/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err19];
                } else {
                  vErrors.push(err19);
                }
                errors++;
              }
            }
            if (data5.module !== undefined) {
              let data9 = data5.module;
              if (typeof data9 === "string") {
                if (!pattern7.test(data9)) {
                  const err20 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/module",
                    schemaPath:
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/module/pattern",
                    params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-z0-9]+-?)*[a-z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err20];
                  } else {
                    vErrors.push(err20);
                  }
                  errors++;
                }
              } else {
                const err21 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/module",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/module/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err21];
                } else {
                  vErrors.push(err21);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors2 = { pattern: [] };
                const templates2 = {};
                for (const err22 of vErrors) {
                  if (
                    err22.keyword !== "errorMessage" &&
                    !err22.emUsed &&
                    err22.dataPath === dataPath + "/packs/" + i0 + "/module" &&
                    err22.keyword in emErrors2 &&
                    err22.schemaPath.indexOf(
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/module"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err22.schemaPath.slice(79))
                  ) {
                    emErrors2[err22.keyword].push(err22);
                    err22.emUsed = true;
                  }
                }
                for (const key2 in emErrors2) {
                  if (emErrors2[key2].length) {
                    const err23 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/module",
                      schemaPath:
                        "../../definitions/strict/system.json#/definitions/packs/items/properties/module/errorMessage",
                      params: { errors: emErrors2[key2] },
                      message:
                        key2 in templates2
                          ? templates2[key2]()
                          : schema144.items.properties.module.errorMessage[
                              key2
                            ],
                    };
                    if (vErrors === null) {
                      vErrors = [err23];
                    } else {
                      vErrors.push(err23);
                    }
                    errors++;
                  }
                }
                const emErrs2 = [];
                for (const err24 of vErrors) {
                  if (!err24.emUsed) {
                    emErrs2.push(err24);
                  }
                }
                vErrors = emErrs2;
                errors = emErrs2.length;
              }
            }
            if (data5.name !== undefined) {
              let data10 = data5.name;
              if (typeof data10 === "string") {
                if (!pattern7.test(data10)) {
                  const err25 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/name",
                    schemaPath:
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/name/pattern",
                    params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
                    message:
                      'should match pattern "' +
                      "^([a-z0-9]+-?)*[a-z0-9]+$" +
                      '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err25];
                  } else {
                    vErrors.push(err25);
                  }
                  errors++;
                }
              } else {
                const err26 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/name",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/name/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err26];
                } else {
                  vErrors.push(err26);
                }
                errors++;
              }
              if (errors > 0) {
                const emErrors3 = { pattern: [] };
                const templates3 = {};
                for (const err27 of vErrors) {
                  if (
                    err27.keyword !== "errorMessage" &&
                    !err27.emUsed &&
                    err27.dataPath === dataPath + "/packs/" + i0 + "/name" &&
                    err27.keyword in emErrors3 &&
                    err27.schemaPath.indexOf(
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/name"
                    ) === 0 &&
                    /^\/[^\/]*$/.test(err27.schemaPath.slice(77))
                  ) {
                    emErrors3[err27.keyword].push(err27);
                    err27.emUsed = true;
                  }
                }
                for (const key3 in emErrors3) {
                  if (emErrors3[key3].length) {
                    const err28 = {
                      keyword: "errorMessage",
                      dataPath: dataPath + "/packs/" + i0 + "/name",
                      schemaPath:
                        "../../definitions/strict/system.json#/definitions/packs/items/properties/name/errorMessage",
                      params: { errors: emErrors3[key3] },
                      message:
                        key3 in templates3
                          ? templates3[key3]()
                          : schema144.items.properties.name.errorMessage[key3],
                    };
                    if (vErrors === null) {
                      vErrors = [err28];
                    } else {
                      vErrors.push(err28);
                    }
                    errors++;
                  }
                }
                const emErrs3 = [];
                for (const err29 of vErrors) {
                  if (!err29.emUsed) {
                    emErrs3.push(err29);
                  }
                }
                vErrors = emErrs3;
                errors = emErrs3.length;
              }
            }
            if (data5.path !== undefined) {
              let data11 = data5.path;
              if (typeof data11 === "string") {
                if (!pattern17.test(data11)) {
                  const err30 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/packs/" + i0 + "/path",
                    schemaPath:
                      "../../definitions/strict/system.json#/definitions/packs/items/properties/path/pattern",
                    params: { pattern: "^(.+).db$" },
                    message: 'should match pattern "' + "^(.+).db$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err30];
                  } else {
                    vErrors.push(err30);
                  }
                  errors++;
                }
              } else {
                const err31 = {
                  keyword: "type",
                  dataPath: dataPath + "/packs/" + i0 + "/path",
                  schemaPath:
                    "../../definitions/strict/system.json#/definitions/packs/items/properties/path/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err31];
                } else {
                  vErrors.push(err31);
                }
                errors++;
              }
            }
          } else {
            const err32 = {
              keyword: "type",
              dataPath: dataPath + "/packs/" + i0,
              schemaPath:
                "../../definitions/strict/system.json#/definitions/packs/items/type",
              params: { type: "object" },
              message: "should be object",
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
          keyword: "type",
          dataPath: dataPath + "/packs",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/packs/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err33];
        } else {
          vErrors.push(err33);
        }
        errors++;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      let data12 = data.primaryTokenAttribute;
      if (data12 !== null && typeof data12 !== "string") {
        const err34 = {
          keyword: "type",
          dataPath: dataPath + "/primaryTokenAttribute",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/primaryTokenAttribute/type",
          params: { type: schema145.type },
          message: "should be null,string",
        };
        if (vErrors === null) {
          vErrors = [err34];
        } else {
          vErrors.push(err34);
        }
        errors++;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      let data13 = data.secondaryTokenAttribute;
      if (data13 !== null && typeof data13 !== "string") {
        const err35 = {
          keyword: "type",
          dataPath: dataPath + "/secondaryTokenAttribute",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/secondaryTokenAttribute/type",
          params: { type: schema146.type },
          message: "should be null,string",
        };
        if (vErrors === null) {
          vErrors = [err35];
        } else {
          vErrors.push(err35);
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
        const err36 = {
          keyword: "type",
          dataPath: dataPath + "/templateVersion",
          schemaPath:
            "../../definitions/strict/system.json#/definitions/templateVersion/type",
          params: { type: "integer" },
          message: "should be integer",
        };
        if (vErrors === null) {
          vErrors = [err36];
        } else {
          vErrors.push(err36);
        }
        errors++;
      }
    }
  } else {
    const err37 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err37];
    } else {
      vErrors.push(err37);
    }
    errors++;
  }
  validate88.errors = vErrors;
  return errors === 0;
}
function validate92(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          let data1 = data0.email;
          if (typeof data1 === "string") {
            if (!pattern20.test(data1)) {
              const err2 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/email",
                schemaPath:
                  "#/definitions/properties-author/properties/email/pattern",
                params: {
                  pattern:
                    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                },
                message:
                  'should match pattern "' +
                  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$' +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          } else {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors0 = { pattern: [] };
            const templates0 = {};
            for (const err4 of vErrors) {
              if (
                err4.keyword !== "errorMessage" &&
                !err4.emUsed &&
                err4.dataPath === dataPath + "/" + i0 + "/email" &&
                err4.keyword in emErrors0 &&
                err4.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/email"
                ) === 0 &&
                /^\/[^\/]*$/.test(err4.schemaPath.slice(48))
              ) {
                emErrors0[err4.keyword].push(err4);
                err4.emUsed = true;
              }
            }
            for (const key0 in emErrors0) {
              if (emErrors0[key0].length) {
                const err5 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/email",
                  schemaPath:
                    "#/definitions/properties-author/properties/email/errorMessage",
                  params: { errors: emErrors0[key0] },
                  message:
                    key0 in templates0
                      ? templates0[key0]()
                      : schema121.properties.email.errorMessage[key0],
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
            const emErrs0 = [];
            for (const err6 of vErrors) {
              if (!err6.emUsed) {
                emErrs0.push(err6);
              }
            }
            vErrors = emErrs0;
            errors = emErrs0.length;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          let data3 = data0.url;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err8 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath:
                  "#/definitions/properties-author/properties/url/pattern",
                params: {
                  pattern:
                    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
                },
                message:
                  'should match pattern "' +
                  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          } else {
            const err9 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors1 = { pattern: [] };
            const templates1 = {};
            for (const err10 of vErrors) {
              if (
                err10.keyword !== "errorMessage" &&
                !err10.emUsed &&
                err10.dataPath === dataPath + "/" + i0 + "/url" &&
                err10.keyword in emErrors1 &&
                err10.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/url"
                ) === 0 &&
                /^\/[^\/]*$/.test(err10.schemaPath.slice(46))
              ) {
                emErrors1[err10.keyword].push(err10);
                err10.emUsed = true;
              }
            }
            for (const key1 in emErrors1) {
              if (emErrors1[key1].length) {
                const err11 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/properties-author/properties/url/errorMessage",
                  params: { errors: emErrors1[key1] },
                  message:
                    key1 in templates1
                      ? templates1[key1]()
                      : schema121.properties.url.errorMessage[key1],
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
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
      }
    }
  } else {
    const err13 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err13];
    } else {
      vErrors.push(err13);
    }
    errors++;
  }
  validate92.errors = vErrors;
  return errors === 0;
}
function validate87(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate88(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate92(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate92.errors
            : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate87.errors = vErrors;
  return errors === 0;
}
function validate86(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemStrict" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate87(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema136.errorMessage[key0],
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
  validate86.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate95;
const schema150 = {
  $id: "validateSystemPlusStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+ and strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/system+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema151 = {
  $id: "shared/properties/strict/system+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (strict)",
  type: "object",
  allOf: [{ $ref: "base-manifest+.json" }, { $ref: "base-system.json" }],
  properties: {
    authors: {
      $ref: "../../definitions/strict/authors.json#/definitions/authors+",
    },
  },
};
function validate99(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (!(data0 && typeof data0 == "object" && !Array.isArray(data0))) {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/definitions/properties-author/required",
            params: { missingProperty: "name" },
            message: "should have required property '" + "name" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.email !== undefined) {
          let data1 = data0.email;
          if (typeof data1 === "string") {
            if (!pattern20.test(data1)) {
              const err2 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/email",
                schemaPath:
                  "#/definitions/properties-author/properties/email/pattern",
                params: {
                  pattern:
                    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                },
                message:
                  'should match pattern "' +
                  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$' +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          } else {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath:
                "#/definitions/properties-author/properties/email/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors0 = { pattern: [] };
            const templates0 = {};
            for (const err4 of vErrors) {
              if (
                err4.keyword !== "errorMessage" &&
                !err4.emUsed &&
                err4.dataPath === dataPath + "/" + i0 + "/email" &&
                err4.keyword in emErrors0 &&
                err4.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/email"
                ) === 0 &&
                /^\/[^\/]*$/.test(err4.schemaPath.slice(48))
              ) {
                emErrors0[err4.keyword].push(err4);
                err4.emUsed = true;
              }
            }
            for (const key0 in emErrors0) {
              if (emErrors0[key0].length) {
                const err5 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/email",
                  schemaPath:
                    "#/definitions/properties-author/properties/email/errorMessage",
                  params: { errors: emErrors0[key0] },
                  message:
                    key0 in templates0
                      ? templates0[key0]()
                      : schema121.properties.email.errorMessage[key0],
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
            const emErrs0 = [];
            for (const err6 of vErrors) {
              if (!err6.emUsed) {
                emErrs0.push(err6);
              }
            }
            vErrors = emErrs0;
            errors = emErrs0.length;
          }
        }
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err7 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath:
                "#/definitions/properties-author/properties/name/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          }
        }
        if (data0.url !== undefined) {
          let data3 = data0.url;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err8 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath:
                  "#/definitions/properties-author/properties/url/pattern",
                params: {
                  pattern:
                    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
                },
                message:
                  'should match pattern "' +
                  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$" +
                  '"',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          } else {
            const err9 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/definitions/properties-author/properties/url/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors1 = { pattern: [] };
            const templates1 = {};
            for (const err10 of vErrors) {
              if (
                err10.keyword !== "errorMessage" &&
                !err10.emUsed &&
                err10.dataPath === dataPath + "/" + i0 + "/url" &&
                err10.keyword in emErrors1 &&
                err10.schemaPath.indexOf(
                  "#/definitions/properties-author/properties/url"
                ) === 0 &&
                /^\/[^\/]*$/.test(err10.schemaPath.slice(46))
              ) {
                emErrors1[err10.keyword].push(err10);
                err10.emUsed = true;
              }
            }
            for (const key1 in emErrors1) {
              if (emErrors1[key1].length) {
                const err11 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/url",
                  schemaPath:
                    "#/definitions/properties-author/properties/url/errorMessage",
                  params: { errors: emErrors1[key1] },
                  message:
                    key1 in templates1
                      ? templates1[key1]()
                      : schema121.properties.url.errorMessage[key1],
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
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
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.discord !== undefined) {
          let data4 = data0.discord;
          if (typeof data4 === "string") {
            if (!pattern32.test(data4)) {
              const err13 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/discord",
                schemaPath:
                  "#/definitions/properties-author+/properties/discord/pattern",
                params: { pattern: "^.{3,32}#[0-9]{4}$" },
                message: 'should match pattern "' + "^.{3,32}#[0-9]{4}$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err13];
              } else {
                vErrors.push(err13);
              }
              errors++;
            }
          } else {
            const err14 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/discord",
              schemaPath:
                "#/definitions/properties-author+/properties/discord/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err14];
            } else {
              vErrors.push(err14);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors2 = { pattern: [] };
            const templates2 = {};
            for (const err15 of vErrors) {
              if (
                err15.keyword !== "errorMessage" &&
                !err15.emUsed &&
                err15.dataPath === dataPath + "/" + i0 + "/discord" &&
                err15.keyword in emErrors2 &&
                err15.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/discord"
                ) === 0 &&
                /^\/[^\/]*$/.test(err15.schemaPath.slice(51))
              ) {
                emErrors2[err15.keyword].push(err15);
                err15.emUsed = true;
              }
            }
            for (const key2 in emErrors2) {
              if (emErrors2[key2].length) {
                const err16 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/discord",
                  schemaPath:
                    "#/definitions/properties-author+/properties/discord/errorMessage",
                  params: { errors: emErrors2[key2] },
                  message:
                    key2 in templates2
                      ? templates2[key2]()
                      : schema135.properties.discord.errorMessage[key2],
                };
                if (vErrors === null) {
                  vErrors = [err16];
                } else {
                  vErrors.push(err16);
                }
                errors++;
              }
            }
            const emErrs2 = [];
            for (const err17 of vErrors) {
              if (!err17.emUsed) {
                emErrs2.push(err17);
              }
            }
            vErrors = emErrs2;
            errors = emErrs2.length;
          }
        }
        if (data0.patreon !== undefined) {
          if (typeof data0.patreon !== "string") {
            const err18 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/patreon",
              schemaPath:
                "#/definitions/properties-author+/properties/patreon/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err18];
            } else {
              vErrors.push(err18);
            }
            errors++;
          }
        }
        if (data0.reddit !== undefined) {
          let data6 = data0.reddit;
          if (typeof data6 === "string") {
            if (!pattern33.test(data6)) {
              const err19 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/reddit",
                schemaPath:
                  "#/definitions/properties-author+/properties/reddit/pattern",
                params: { pattern: "^u/[A-Za-z0-9_-]+$" },
                message: 'should match pattern "' + "^u/[A-Za-z0-9_-]+$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err19];
              } else {
                vErrors.push(err19);
              }
              errors++;
            }
          } else {
            const err20 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/reddit",
              schemaPath:
                "#/definitions/properties-author+/properties/reddit/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors3 = { pattern: [] };
            const templates3 = {};
            for (const err21 of vErrors) {
              if (
                err21.keyword !== "errorMessage" &&
                !err21.emUsed &&
                err21.dataPath === dataPath + "/" + i0 + "/reddit" &&
                err21.keyword in emErrors3 &&
                err21.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/reddit"
                ) === 0 &&
                /^\/[^\/]*$/.test(err21.schemaPath.slice(50))
              ) {
                emErrors3[err21.keyword].push(err21);
                err21.emUsed = true;
              }
            }
            for (const key3 in emErrors3) {
              if (emErrors3[key3].length) {
                const err22 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/reddit",
                  schemaPath:
                    "#/definitions/properties-author+/properties/reddit/errorMessage",
                  params: { errors: emErrors3[key3] },
                  message:
                    key3 in templates3
                      ? templates3[key3]()
                      : schema135.properties.reddit.errorMessage[key3],
                };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
              }
            }
            const emErrs3 = [];
            for (const err23 of vErrors) {
              if (!err23.emUsed) {
                emErrs3.push(err23);
              }
            }
            vErrors = emErrs3;
            errors = emErrs3.length;
          }
        }
        if (data0.twitter !== undefined) {
          let data7 = data0.twitter;
          if (typeof data7 === "string") {
            if (!pattern34.test(data7)) {
              const err24 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/twitter",
                schemaPath:
                  "#/definitions/properties-author+/properties/twitter/pattern",
                params: { pattern: "^@[A-Za-z0-9_]{1,15}$" },
                message:
                  'should match pattern "' + "^@[A-Za-z0-9_]{1,15}$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err24];
              } else {
                vErrors.push(err24);
              }
              errors++;
            }
          } else {
            const err25 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/twitter",
              schemaPath:
                "#/definitions/properties-author+/properties/twitter/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err25];
            } else {
              vErrors.push(err25);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrors4 = { pattern: [] };
            const templates4 = {};
            for (const err26 of vErrors) {
              if (
                err26.keyword !== "errorMessage" &&
                !err26.emUsed &&
                err26.dataPath === dataPath + "/" + i0 + "/twitter" &&
                err26.keyword in emErrors4 &&
                err26.schemaPath.indexOf(
                  "#/definitions/properties-author+/properties/twitter"
                ) === 0 &&
                /^\/[^\/]*$/.test(err26.schemaPath.slice(51))
              ) {
                emErrors4[err26.keyword].push(err26);
                err26.emUsed = true;
              }
            }
            for (const key4 in emErrors4) {
              if (emErrors4[key4].length) {
                const err27 = {
                  keyword: "errorMessage",
                  dataPath: dataPath + "/" + i0 + "/twitter",
                  schemaPath:
                    "#/definitions/properties-author+/properties/twitter/errorMessage",
                  params: { errors: emErrors4[key4] },
                  message:
                    key4 in templates4
                      ? templates4[key4]()
                      : schema135.properties.twitter.errorMessage[key4],
                };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
            }
            const emErrs4 = [];
            for (const err28 of vErrors) {
              if (!err28.emUsed) {
                emErrs4.push(err28);
              }
            }
            vErrors = emErrs4;
            errors = emErrs4.length;
          }
        }
      }
    }
  } else {
    const err29 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err29];
    } else {
      vErrors.push(err29);
    }
    errors++;
  }
  validate99.errors = vErrors;
  return errors === 0;
}
function validate96(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate77(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
    errors = vErrors.length;
  }
  if (
    !validate88(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authors !== undefined) {
      if (
        !validate99(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate99.errors
            : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate96.errors = vErrors;
  return errors === 0;
}
function validate95(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlusStrict" */ let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (
    !validate96(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
    errors = vErrors.length;
  }
  if (errors > 0) {
    const emErrors0 = { type: [] };
    const templates0 = {};
    for (const err1 of vErrors) {
      if (
        err1.keyword !== "errorMessage" &&
        !err1.emUsed &&
        err1.dataPath === dataPath &&
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
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema150.errorMessage[key0],
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
  validate95.errors = vErrors;
  return errors === 0;
}
