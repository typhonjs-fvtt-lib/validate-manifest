"use strict";
exports.validateModule = validate25;
const schema28 = {
  $id: "validateModule",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  definitions: {},
  required: [
    "name",
    "title",
    "description",
    "author",
    "version",
    "minimumCoreVersion",
  ],
  properties: {
    name: { $ref: "shared/definitions/base.json#/definitions/name" },
    title: { $ref: "shared/definitions/base.json#/definitions/title" },
    description: {
      $ref: "shared/definitions/base.json#/definitions/description",
    },
    author: { $ref: "shared/definitions/base.json#/definitions/author" },
    version: { $ref: "shared/definitions/base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "shared/definitions/base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "shared/definitions/base.json#/definitions/compatibleCoreVersion",
    },
    scripts: { $ref: "shared/definitions/base.json#/definitions/scripts" },
    esmodules: { $ref: "shared/definitions/base.json#/definitions/esmodules" },
    styles: { $ref: "shared/definitions/base.json#/definitions/styles" },
    packs: { $ref: "shared/definitions/base.json#/definitions/packs" },
    dependencies: {
      $ref: "shared/definitions/base.json#/definitions/dependencies",
    },
    languages: { $ref: "shared/definitions/base.json#/definitions/languages" },
    system: {
      oneOf: [
        { $ref: "shared/definitions/base.json#/definitions/system" },
        { $ref: "shared/definitions/base.json#/definitions/systems" },
      ],
    },
    authors: { $ref: "shared/definitions/base.json#/definitions/authors" },
    socket: { $ref: "shared/definitions/base.json#/definitions/socket" },
    url: { $ref: "shared/definitions/base.json#/definitions/url" },
    manifest: { $ref: "shared/definitions/base.json#/definitions/manifest" },
    download: { $ref: "shared/definitions/base.json#/definitions/download" },
    license: { $ref: "shared/definitions/base.json#/definitions/license" },
    readme: { $ref: "shared/definitions/base.json#/definitions/readme" },
    bugs: { $ref: "shared/definitions/base.json#/definitions/bugs" },
    changelog: { $ref: "shared/definitions/base.json#/definitions/changelog" },
  },
};
const schema30 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["a-module"],
  $id: "#/definitions/name",
  type: "string",
};
const schema31 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["A Module"],
  $id: "#/definitions/title",
  type: "string",
};
const schema32 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["Some description"],
  $id: "#/definitions/description",
  type: "string",
};
const schema33 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["typhonrt"],
  $id: "#/definitions/author",
  type: "string",
};
const schema34 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/version",
  oneOf: [{ type: "string", pattern: "^(.*)$" }, { type: "number" }],
};
const schema35 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["0.7.5"],
  $id: "#/definitions/minimumCoreVersion",
  type: "string",
};
const schema36 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1.0.0"],
  $id: "#/definitions/compatibleCoreVersion",
  type: "string",
};
const schema37 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    pattern: "^(.*)$",
    examples: ["ascript.js"],
    $id: "#/properties/scripts/items",
    type: "string",
  },
  $id: "#/definitions/scripts",
  type: "array",
};
const schema38 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    pattern: "^(.*)$",
    examples: ["index.js"],
    $id: "#/definitions/esmodules/items",
    type: "string",
  },
  $id: "#/definitions/esmodules",
  type: "array",
};
const schema39 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    pattern: "^(.*)$",
    examples: ["styles.css"],
    $id: "#/definitions/styles/items",
    type: "string",
  },
  $id: "#/definitions/styles",
  type: "array",
};
const schema43 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name"],
    properties: {
      name: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["dice-so-nice"],
        $id: "#/definitions/dependencies/items/properties/name",
        type: "string",
      },
      manifest: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: [
          "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/2.0.3/module/module.json",
        ],
        $id: "#/definitions/dependencies/items/properties/manifest",
        type: "string",
      },
      type: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["module"],
        $id: "#/definitions/dependencies/items/properties/type",
        type: "string",
      },
    },
    $id: "#/definitions/dependencies/items",
    type: "object",
  },
  $id: "#/definitions/dependencies",
  type: "array",
};
const schema44 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["lang", "name", "path"],
    properties: {
      lang: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["en"],
        $id: "#/definitions/languages/items/properties/lang",
        type: "string",
      },
      name: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["English"],
        $id: "#/definitions/languages/items/properties/name",
        type: "string",
      },
      path: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["lang/en.json"],
        $id: "#/definitions/languages/items/properties/path",
        type: "string",
      },
    },
    $id: "#/definitions/languages/items",
    type: "object",
  },
  $id: "#/definitions/languages",
  type: "array",
};
const schema41 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["dnd5e"],
  $id: "#/definitions/system",
  type: "string",
};
const schema42 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    pattern: "^(.*)$",
    examples: ["dnd5e"],
    $id: "#/definitions/systems/items",
    type: "string",
  },
  $id: "#/definitions/systems",
  type: "array",
};
const schema47 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name"],
    properties: {
      name: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["Atropos"],
        $id: "#/definitions/authors/items/properties/name",
        type: "string",
      },
      email: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["admin@foundryvtt.com"],
        $id: "#/definitions/authors/items/properties/email",
        type: "string",
      },
      url: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["https://foundryvtt.com"],
        $id: "#/definitions/authors/items/properties/url",
        type: "string",
      },
    },
    $id: "#/definitions/authors/items",
    type: "object",
  },
  $id: "#/definitions/authors",
  type: "array",
};
const schema48 = {
  title: "A boolean value",
  default: false,
  examples: [true],
  $id: "#/definitions/socket",
  type: "boolean",
};
const schema49 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/"],
  $id: "#/definitions/url",
  type: "string",
};
const schema50 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.json"],
  $id: "#/definitions/manifest",
  type: "string",
};
const schema51 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.zip"],
  $id: "#/definitions/download",
  type: "string",
};
const schema52 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["LICENSE"],
  $id: "#/definitions/license",
  type: "string",
};
const schema53 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["README.md"],
  $id: "#/definitions/readme",
  type: "string",
};
const schema54 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/issues"],
  $id: "#/definitions/bugs",
  type: "string",
};
const schema55 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/releases"],
  $id: "#/definitions/changelog",
  type: "string",
};
const pattern0 = new RegExp("^(.*)$", "u");
const schema40 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name", "label", "path", "entity"],
    oneOf: [
      { required: ["module"] },
      { required: ["system"] },
      { required: ["module", "system"] },
    ],
    properties: {
      name: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["pack-name"],
        $id: "#/definitions/packs/items/properties/name",
        type: "string",
      },
      label: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["Pack Title"],
        $id: "#/definitions/packs/items/properties/label",
        type: "string",
      },
      module: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["module-name"],
        $id: "#/definitions/packs/items/properties/module",
        type: "string",
      },
      system: {
        oneOf: [
          { $ref: "#/definitions/system" },
          { $ref: "#/definitions/systems" },
        ],
      },
      path: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["./packs/pack-name.db"],
        $id: "#/definitions/packs/items/properties/path",
        type: "string",
      },
      entity: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["Item"],
        $id: "#/definitions/packs/items/properties/entity",
        type: "string",
      },
    },
    $id: "#/definitions/packs/items",
    type: "object",
  },
  $id: "#/definitions/packs",
  type: "array",
};
function validate27(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/packs" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      const _errs1 = errors;
      let valid1 = false;
      let passing0 = null;
      const _errs2 = errors;
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.module === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/oneOf/0/required",
            params: { missingProperty: "module" },
            message: "should have required property '" + "module" + "'",
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
      }
      var _valid0 = _errs2 === errors;
      if (_valid0) {
        valid1 = true;
        passing0 = 0;
      }
      const _errs3 = errors;
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.system === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/oneOf/1/required",
            params: { missingProperty: "system" },
            message: "should have required property '" + "system" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
      var _valid0 = _errs3 === errors;
      if (_valid0 && valid1) {
        valid1 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid1 = true;
          passing0 = 1;
        }
        const _errs4 = errors;
        if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
          if (data0.module === undefined) {
            const err2 = {
              keyword: "required",
              dataPath: dataPath + "/" + i0,
              schemaPath: "#/items/oneOf/2/required",
              params: { missingProperty: "module" },
              message: "should have required property '" + "module" + "'",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
          if (data0.system === undefined) {
            const err3 = {
              keyword: "required",
              dataPath: dataPath + "/" + i0,
              schemaPath: "#/items/oneOf/2/required",
              params: { missingProperty: "system" },
              message: "should have required property '" + "system" + "'",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        var _valid0 = _errs4 === errors;
        if (_valid0 && valid1) {
          valid1 = false;
          passing0 = [passing0, 2];
        } else {
          if (_valid0) {
            valid1 = true;
            passing0 = 2;
          }
        }
      }
      if (!valid1) {
        const err4 = {
          keyword: "oneOf",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      } else {
        errors = _errs1;
        if (vErrors !== null) {
          if (_errs1) {
            vErrors.length = _errs1;
          } else {
            vErrors = null;
          }
        }
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err5 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.label === undefined) {
          const err6 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.path === undefined) {
          const err7 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.entity === undefined) {
          const err8 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.name !== undefined) {
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err9 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.label !== undefined) {
          let data2 = data0.label;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err11 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/label",
                schemaPath: "#/items/properties/label/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
          } else {
            const err12 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/label",
              schemaPath: "#/items/properties/label/type",
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
        if (data0.module !== undefined) {
          let data3 = data0.module;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err13 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/module",
                schemaPath: "#/items/properties/module/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/module",
              schemaPath: "#/items/properties/module/type",
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
        if (data0.system !== undefined) {
          let data4 = data0.system;
          const _errs9 = errors;
          let valid3 = false;
          let passing1 = null;
          const _errs10 = errors;
          if (typeof data4 === "string") {
            if (!pattern0.test(data4)) {
              const err15 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/system",
                schemaPath: "#/definitions/system/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/definitions/system/type",
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs12 = errors;
          if (Array.isArray(data4)) {
            const len1 = data4.length;
            for (let i1 = 0; i1 < len1; i1++) {
              let data5 = data4[i1];
              if (typeof data5 === "string") {
                if (!pattern0.test(data5)) {
                  const err17 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/" + i0 + "/system/" + i1,
                    schemaPath: "#/definitions/systems/items/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/" + i0 + "/system/" + i1,
                  schemaPath: "#/definitions/systems/items/type",
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
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/definitions/systems/type",
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
          var _valid1 = _errs12 === errors;
          if (_valid1 && valid3) {
            valid3 = false;
            passing1 = [passing1, 1];
          } else {
            if (_valid1) {
              valid3 = true;
              passing1 = 1;
            }
          }
          if (!valid3) {
            const err20 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          } else {
            errors = _errs9;
            if (vErrors !== null) {
              if (_errs9) {
                vErrors.length = _errs9;
              } else {
                vErrors = null;
              }
            }
          }
        }
        if (data0.path !== undefined) {
          let data6 = data0.path;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err21 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err21];
              } else {
                vErrors.push(err21);
              }
              errors++;
            }
          } else {
            const err22 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
        if (data0.entity !== undefined) {
          let data7 = data0.entity;
          if (typeof data7 === "string") {
            if (!pattern0.test(data7)) {
              const err23 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err23];
              } else {
                vErrors.push(err23);
              }
              errors++;
            }
          } else {
            const err24 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err25 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err26];
    } else {
      vErrors.push(err26);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
function validate25(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModule" */ let vErrors = null;
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
    if (data.name !== undefined) {
      let data0 = data.name;
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err6 = {
            keyword: "pattern",
            dataPath: dataPath + "/name",
            schemaPath:
              "shared/definitions/base.json#/definitions/name/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
      } else {
        const err7 = {
          keyword: "type",
          dataPath: dataPath + "/name",
          schemaPath: "shared/definitions/base.json#/definitions/name/type",
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
    if (data.title !== undefined) {
      let data1 = data.title;
      if (typeof data1 === "string") {
        if (!pattern0.test(data1)) {
          const err8 = {
            keyword: "pattern",
            dataPath: dataPath + "/title",
            schemaPath:
              "shared/definitions/base.json#/definitions/title/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/title",
          schemaPath: "shared/definitions/base.json#/definitions/title/type",
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
    if (data.description !== undefined) {
      let data2 = data.description;
      if (typeof data2 === "string") {
        if (!pattern0.test(data2)) {
          const err10 = {
            keyword: "pattern",
            dataPath: dataPath + "/description",
            schemaPath:
              "shared/definitions/base.json#/definitions/description/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/description",
          schemaPath:
            "shared/definitions/base.json#/definitions/description/type",
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
    if (data.author !== undefined) {
      let data3 = data.author;
      if (typeof data3 === "string") {
        if (!pattern0.test(data3)) {
          const err12 = {
            keyword: "pattern",
            dataPath: dataPath + "/author",
            schemaPath:
              "shared/definitions/base.json#/definitions/author/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/author",
          schemaPath: "shared/definitions/base.json#/definitions/author/type",
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
    if (data.version !== undefined) {
      let data4 = data.version;
      const _errs10 = errors;
      let valid6 = false;
      let passing0 = null;
      const _errs11 = errors;
      if (typeof data4 === "string") {
        if (!pattern0.test(data4)) {
          const err14 = {
            keyword: "pattern",
            dataPath: dataPath + "/version",
            schemaPath:
              "shared/definitions/base.json#/definitions/version/oneOf/0/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
      } else {
        const err15 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "shared/definitions/base.json#/definitions/version/oneOf/0/type",
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
      var _valid0 = _errs11 === errors;
      if (_valid0) {
        valid6 = true;
        passing0 = 0;
      }
      const _errs12 = errors;
      if (!(typeof data4 == "number" && isFinite(data4))) {
        const err16 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "shared/definitions/base.json#/definitions/version/oneOf/1/type",
          params: { type: "number" },
          message: "should be number",
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
      var _valid0 = _errs12 === errors;
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
        const err17 = {
          keyword: "oneOf",
          dataPath: dataPath + "/version",
          schemaPath: "shared/definitions/base.json#/definitions/version/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
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
    }
    if (data.minimumCoreVersion !== undefined) {
      let data5 = data.minimumCoreVersion;
      if (typeof data5 === "string") {
        if (!pattern0.test(data5)) {
          const err18 = {
            keyword: "pattern",
            dataPath: dataPath + "/minimumCoreVersion",
            schemaPath:
              "shared/definitions/base.json#/definitions/minimumCoreVersion/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err18];
          } else {
            vErrors.push(err18);
          }
          errors++;
        }
      } else {
        const err19 = {
          keyword: "type",
          dataPath: dataPath + "/minimumCoreVersion",
          schemaPath:
            "shared/definitions/base.json#/definitions/minimumCoreVersion/type",
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
    if (data.compatibleCoreVersion !== undefined) {
      let data6 = data.compatibleCoreVersion;
      if (typeof data6 === "string") {
        if (!pattern0.test(data6)) {
          const err20 = {
            keyword: "pattern",
            dataPath: dataPath + "/compatibleCoreVersion",
            schemaPath:
              "shared/definitions/base.json#/definitions/compatibleCoreVersion/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/compatibleCoreVersion",
          schemaPath:
            "shared/definitions/base.json#/definitions/compatibleCoreVersion/type",
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
    if (data.scripts !== undefined) {
      let data7 = data.scripts;
      if (Array.isArray(data7)) {
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data8 = data7[i0];
          if (typeof data8 === "string") {
            if (!pattern0.test(data8)) {
              const err22 = {
                keyword: "pattern",
                dataPath: dataPath + "/scripts/" + i0,
                schemaPath:
                  "shared/definitions/base.json#/definitions/scripts/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err22];
              } else {
                vErrors.push(err22);
              }
              errors++;
            }
          } else {
            const err23 = {
              keyword: "type",
              dataPath: dataPath + "/scripts/" + i0,
              schemaPath:
                "shared/definitions/base.json#/definitions/scripts/items/type",
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
      } else {
        const err24 = {
          keyword: "type",
          dataPath: dataPath + "/scripts",
          schemaPath: "shared/definitions/base.json#/definitions/scripts/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err24];
        } else {
          vErrors.push(err24);
        }
        errors++;
      }
    }
    if (data.esmodules !== undefined) {
      let data9 = data.esmodules;
      if (Array.isArray(data9)) {
        const len1 = data9.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data10 = data9[i1];
          if (typeof data10 === "string") {
            if (!pattern0.test(data10)) {
              const err25 = {
                keyword: "pattern",
                dataPath: dataPath + "/esmodules/" + i1,
                schemaPath:
                  "shared/definitions/base.json#/definitions/esmodules/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/esmodules/" + i1,
              schemaPath:
                "shared/definitions/base.json#/definitions/esmodules/items/type",
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
      } else {
        const err27 = {
          keyword: "type",
          dataPath: dataPath + "/esmodules",
          schemaPath:
            "shared/definitions/base.json#/definitions/esmodules/type",
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
    if (data.styles !== undefined) {
      let data11 = data.styles;
      if (Array.isArray(data11)) {
        const len2 = data11.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data12 = data11[i2];
          if (typeof data12 === "string") {
            if (!pattern0.test(data12)) {
              const err28 = {
                keyword: "pattern",
                dataPath: dataPath + "/styles/" + i2,
                schemaPath:
                  "shared/definitions/base.json#/definitions/styles/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err28];
              } else {
                vErrors.push(err28);
              }
              errors++;
            }
          } else {
            const err29 = {
              keyword: "type",
              dataPath: dataPath + "/styles/" + i2,
              schemaPath:
                "shared/definitions/base.json#/definitions/styles/items/type",
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
      } else {
        const err30 = {
          keyword: "type",
          dataPath: dataPath + "/styles",
          schemaPath: "shared/definitions/base.json#/definitions/styles/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
    }
    if (data.packs !== undefined) {
      if (
        !validate27(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate27.errors
            : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      let data14 = data.dependencies;
      if (Array.isArray(data14)) {
        const len3 = data14.length;
        for (let i3 = 0; i3 < len3; i3++) {
          let data15 = data14[i3];
          if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
            if (data15.name === undefined) {
              const err31 = {
                keyword: "required",
                dataPath: dataPath + "/dependencies/" + i3,
                schemaPath:
                  "shared/definitions/base.json#/definitions/dependencies/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            }
            if (data15.name !== undefined) {
              let data16 = data15.name;
              if (typeof data16 === "string") {
                if (!pattern0.test(data16)) {
                  const err32 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/name/type",
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
            }
            if (data15.manifest !== undefined) {
              let data17 = data15.manifest;
              if (typeof data17 === "string") {
                if (!pattern0.test(data17)) {
                  const err34 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/manifest",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/manifest/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/manifest",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/manifest/type",
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
            if (data15.type !== undefined) {
              let data18 = data15.type;
              if (typeof data18 === "string") {
                if (!pattern0.test(data18)) {
                  const err36 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/type",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/type/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/type",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/type/type",
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
          } else {
            const err38 = {
              keyword: "type",
              dataPath: dataPath + "/dependencies/" + i3,
              schemaPath:
                "shared/definitions/base.json#/definitions/dependencies/items/type",
              params: { type: "object" },
              message: "should be object",
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
          dataPath: dataPath + "/dependencies",
          schemaPath:
            "shared/definitions/base.json#/definitions/dependencies/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err39];
        } else {
          vErrors.push(err39);
        }
        errors++;
      }
    }
    if (data.languages !== undefined) {
      let data19 = data.languages;
      if (Array.isArray(data19)) {
        const len4 = data19.length;
        for (let i4 = 0; i4 < len4; i4++) {
          let data20 = data19[i4];
          if (data20 && typeof data20 == "object" && !Array.isArray(data20)) {
            if (data20.lang === undefined) {
              const err40 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "lang" },
                message: "should have required property '" + "lang" + "'",
              };
              if (vErrors === null) {
                vErrors = [err40];
              } else {
                vErrors.push(err40);
              }
              errors++;
            }
            if (data20.name === undefined) {
              const err41 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err41];
              } else {
                vErrors.push(err41);
              }
              errors++;
            }
            if (data20.path === undefined) {
              const err42 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err42];
              } else {
                vErrors.push(err42);
              }
              errors++;
            }
            if (data20.lang !== undefined) {
              let data21 = data20.lang;
              if (typeof data21 === "string") {
                if (!pattern0.test(data21)) {
                  const err43 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/lang",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/lang/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err43];
                  } else {
                    vErrors.push(err43);
                  }
                  errors++;
                }
              } else {
                const err44 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i4 + "/lang",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/lang/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err44];
                } else {
                  vErrors.push(err44);
                }
                errors++;
              }
            }
            if (data20.name !== undefined) {
              let data22 = data20.name;
              if (typeof data22 === "string") {
                if (!pattern0.test(data22)) {
                  const err45 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err45];
                  } else {
                    vErrors.push(err45);
                  }
                  errors++;
                }
              } else {
                const err46 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i4 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/name/type",
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
            if (data20.path !== undefined) {
              let data23 = data20.path;
              if (typeof data23 === "string") {
                if (!pattern0.test(data23)) {
                  const err47 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/path",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/path/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/languages/" + i4 + "/path",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/path/type",
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
            }
          } else {
            const err49 = {
              keyword: "type",
              dataPath: dataPath + "/languages/" + i4,
              schemaPath:
                "shared/definitions/base.json#/definitions/languages/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err49];
            } else {
              vErrors.push(err49);
            }
            errors++;
          }
        }
      } else {
        const err50 = {
          keyword: "type",
          dataPath: dataPath + "/languages",
          schemaPath:
            "shared/definitions/base.json#/definitions/languages/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err50];
        } else {
          vErrors.push(err50);
        }
        errors++;
      }
    }
    if (data.system !== undefined) {
      let data24 = data.system;
      const _errs40 = errors;
      let valid21 = false;
      let passing1 = null;
      const _errs41 = errors;
      if (typeof data24 === "string") {
        if (!pattern0.test(data24)) {
          const err51 = {
            keyword: "pattern",
            dataPath: dataPath + "/system",
            schemaPath:
              "shared/definitions/base.json#/definitions/system/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err51];
          } else {
            vErrors.push(err51);
          }
          errors++;
        }
      } else {
        const err52 = {
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath: "shared/definitions/base.json#/definitions/system/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err52];
        } else {
          vErrors.push(err52);
        }
        errors++;
      }
      var _valid1 = _errs41 === errors;
      if (_valid1) {
        valid21 = true;
        passing1 = 0;
      }
      const _errs43 = errors;
      if (Array.isArray(data24)) {
        const len5 = data24.length;
        for (let i5 = 0; i5 < len5; i5++) {
          let data25 = data24[i5];
          if (typeof data25 === "string") {
            if (!pattern0.test(data25)) {
              const err53 = {
                keyword: "pattern",
                dataPath: dataPath + "/system/" + i5,
                schemaPath:
                  "shared/definitions/base.json#/definitions/systems/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err53];
              } else {
                vErrors.push(err53);
              }
              errors++;
            }
          } else {
            const err54 = {
              keyword: "type",
              dataPath: dataPath + "/system/" + i5,
              schemaPath:
                "shared/definitions/base.json#/definitions/systems/items/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err54];
            } else {
              vErrors.push(err54);
            }
            errors++;
          }
        }
      } else {
        const err55 = {
          keyword: "type",
          dataPath: dataPath + "/system",
          schemaPath: "shared/definitions/base.json#/definitions/systems/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err55];
        } else {
          vErrors.push(err55);
        }
        errors++;
      }
      var _valid1 = _errs43 === errors;
      if (_valid1 && valid21) {
        valid21 = false;
        passing1 = [passing1, 1];
      } else {
        if (_valid1) {
          valid21 = true;
          passing1 = 1;
        }
      }
      if (!valid21) {
        const err56 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath: "#/properties/system/oneOf",
          params: { passingSchemas: passing1 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err56];
        } else {
          vErrors.push(err56);
        }
        errors++;
      } else {
        errors = _errs40;
        if (vErrors !== null) {
          if (_errs40) {
            vErrors.length = _errs40;
          } else {
            vErrors = null;
          }
        }
      }
    }
    if (data.authors !== undefined) {
      let data26 = data.authors;
      if (Array.isArray(data26)) {
        const len6 = data26.length;
        for (let i6 = 0; i6 < len6; i6++) {
          let data27 = data26[i6];
          if (data27 && typeof data27 == "object" && !Array.isArray(data27)) {
            if (data27.name === undefined) {
              const err57 = {
                keyword: "required",
                dataPath: dataPath + "/authors/" + i6,
                schemaPath:
                  "shared/definitions/base.json#/definitions/authors/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err57];
              } else {
                vErrors.push(err57);
              }
              errors++;
            }
            if (data27.name !== undefined) {
              let data28 = data27.name;
              if (typeof data28 === "string") {
                if (!pattern0.test(data28)) {
                  const err58 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i6 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/authors/" + i6 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/name/type",
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
            if (data27.email !== undefined) {
              let data29 = data27.email;
              if (typeof data29 === "string") {
                if (!pattern0.test(data29)) {
                  const err60 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i6 + "/email",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/email/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err60];
                  } else {
                    vErrors.push(err60);
                  }
                  errors++;
                }
              } else {
                const err61 = {
                  keyword: "type",
                  dataPath: dataPath + "/authors/" + i6 + "/email",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/email/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err61];
                } else {
                  vErrors.push(err61);
                }
                errors++;
              }
            }
            if (data27.url !== undefined) {
              let data30 = data27.url;
              if (typeof data30 === "string") {
                if (!pattern0.test(data30)) {
                  const err62 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i6 + "/url",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/url/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/authors/" + i6 + "/url",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/url/type",
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
              dataPath: dataPath + "/authors/" + i6,
              schemaPath:
                "shared/definitions/base.json#/definitions/authors/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err64];
            } else {
              vErrors.push(err64);
            }
            errors++;
          }
        }
      } else {
        const err65 = {
          keyword: "type",
          dataPath: dataPath + "/authors",
          schemaPath: "shared/definitions/base.json#/definitions/authors/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err65];
        } else {
          vErrors.push(err65);
        }
        errors++;
      }
    }
    if (data.socket !== undefined) {
      if (typeof data.socket !== "boolean") {
        const err66 = {
          keyword: "type",
          dataPath: dataPath + "/socket",
          schemaPath: "shared/definitions/base.json#/definitions/socket/type",
          params: { type: "boolean" },
          message: "should be boolean",
        };
        if (vErrors === null) {
          vErrors = [err66];
        } else {
          vErrors.push(err66);
        }
        errors++;
      }
    }
    if (data.url !== undefined) {
      let data32 = data.url;
      if (typeof data32 === "string") {
        if (!pattern0.test(data32)) {
          const err67 = {
            keyword: "pattern",
            dataPath: dataPath + "/url",
            schemaPath: "shared/definitions/base.json#/definitions/url/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err67];
          } else {
            vErrors.push(err67);
          }
          errors++;
        }
      } else {
        const err68 = {
          keyword: "type",
          dataPath: dataPath + "/url",
          schemaPath: "shared/definitions/base.json#/definitions/url/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err68];
        } else {
          vErrors.push(err68);
        }
        errors++;
      }
    }
    if (data.manifest !== undefined) {
      let data33 = data.manifest;
      if (typeof data33 === "string") {
        if (!pattern0.test(data33)) {
          const err69 = {
            keyword: "pattern",
            dataPath: dataPath + "/manifest",
            schemaPath:
              "shared/definitions/base.json#/definitions/manifest/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err69];
          } else {
            vErrors.push(err69);
          }
          errors++;
        }
      } else {
        const err70 = {
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath: "shared/definitions/base.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err70];
        } else {
          vErrors.push(err70);
        }
        errors++;
      }
    }
    if (data.download !== undefined) {
      let data34 = data.download;
      if (typeof data34 === "string") {
        if (!pattern0.test(data34)) {
          const err71 = {
            keyword: "pattern",
            dataPath: dataPath + "/download",
            schemaPath:
              "shared/definitions/base.json#/definitions/download/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/download",
          schemaPath: "shared/definitions/base.json#/definitions/download/type",
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
    }
    if (data.license !== undefined) {
      let data35 = data.license;
      if (typeof data35 === "string") {
        if (!pattern0.test(data35)) {
          const err73 = {
            keyword: "pattern",
            dataPath: dataPath + "/license",
            schemaPath:
              "shared/definitions/base.json#/definitions/license/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err73];
          } else {
            vErrors.push(err73);
          }
          errors++;
        }
      } else {
        const err74 = {
          keyword: "type",
          dataPath: dataPath + "/license",
          schemaPath: "shared/definitions/base.json#/definitions/license/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err74];
        } else {
          vErrors.push(err74);
        }
        errors++;
      }
    }
    if (data.readme !== undefined) {
      let data36 = data.readme;
      if (typeof data36 === "string") {
        if (!pattern0.test(data36)) {
          const err75 = {
            keyword: "pattern",
            dataPath: dataPath + "/readme",
            schemaPath:
              "shared/definitions/base.json#/definitions/readme/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err75];
          } else {
            vErrors.push(err75);
          }
          errors++;
        }
      } else {
        const err76 = {
          keyword: "type",
          dataPath: dataPath + "/readme",
          schemaPath: "shared/definitions/base.json#/definitions/readme/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err76];
        } else {
          vErrors.push(err76);
        }
        errors++;
      }
    }
    if (data.bugs !== undefined) {
      let data37 = data.bugs;
      if (typeof data37 === "string") {
        if (!pattern0.test(data37)) {
          const err77 = {
            keyword: "pattern",
            dataPath: dataPath + "/bugs",
            schemaPath:
              "shared/definitions/base.json#/definitions/bugs/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err77];
          } else {
            vErrors.push(err77);
          }
          errors++;
        }
      } else {
        const err78 = {
          keyword: "type",
          dataPath: dataPath + "/bugs",
          schemaPath: "shared/definitions/base.json#/definitions/bugs/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err78];
        } else {
          vErrors.push(err78);
        }
        errors++;
      }
    }
    if (data.changelog !== undefined) {
      let data38 = data.changelog;
      if (typeof data38 === "string") {
        if (!pattern0.test(data38)) {
          const err79 = {
            keyword: "pattern",
            dataPath: dataPath + "/changelog",
            schemaPath:
              "shared/definitions/base.json#/definitions/changelog/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err79];
          } else {
            vErrors.push(err79);
          }
          errors++;
        }
      } else {
        const err80 = {
          keyword: "type",
          dataPath: dataPath + "/changelog",
          schemaPath:
            "shared/definitions/base.json#/definitions/changelog/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err80];
        } else {
          vErrors.push(err80);
        }
        errors++;
      }
    }
  } else {
    const err81 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err81];
    } else {
      vErrors.push(err81);
    }
    errors++;
  }
  validate25.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate29;
const schema56 = {
  $id: "validateModulePlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  allOf: [{ $ref: "validateModule" }],
  definitions: {},
  properties: {},
};
function validate29(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
  let errors = 0;
  if (
    !validate25(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
    errors = vErrors.length;
  }
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
  validate29.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate31;
const schema57 = {
  $id: "validateSystem",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  definitions: {},
  required: [
    "name",
    "title",
    "description",
    "author",
    "version",
    "minimumCoreVersion",
  ],
  properties: {
    name: { $ref: "shared/definitions/base.json#/definitions/name" },
    title: { $ref: "shared/definitions/base.json#/definitions/title" },
    description: {
      $ref: "shared/definitions/base.json#/definitions/description",
    },
    author: { $ref: "shared/definitions/base.json#/definitions/author" },
    version: { $ref: "shared/definitions/base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "shared/definitions/base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "shared/definitions/base.json#/definitions/compatibleCoreVersion",
    },
    scripts: { $ref: "shared/definitions/base.json#/definitions/scripts" },
    esmodules: { $ref: "shared/definitions/base.json#/definitions/esmodules" },
    styles: { $ref: "shared/definitions/base.json#/definitions/styles" },
    packs: { $ref: "shared/definitions/base.json#/definitions/packs" },
    dependencies: {
      $ref: "shared/definitions/base.json#/definitions/dependencies",
    },
    languages: { $ref: "shared/definitions/base.json#/definitions/languages" },
    authors: { $ref: "shared/definitions/base.json#/definitions/authors" },
    socket: { $ref: "shared/definitions/base.json#/definitions/socket" },
    templateVersion: {
      $ref: "shared/definitions/system.json#/definitions/templateVersion",
    },
    initiative: {
      $ref: "shared/definitions/system.json#/definitions/initiative",
    },
    gridDistance: {
      $ref: "shared/definitions/system.json#/definitions/gridDistance",
    },
    gridUnits: {
      $ref: "shared/definitions/system.json#/definitions/gridUnits",
    },
    primaryTokenAttribute: {
      $ref: "shared/definitions/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref:
        "shared/definitions/system.json#/definitions/secondaryTokenAttribute",
    },
    url: { $ref: "shared/definitions/base.json#/definitions/url" },
    manifest: { $ref: "shared/definitions/base.json#/definitions/manifest" },
    download: { $ref: "shared/definitions/base.json#/definitions/download" },
    license: { $ref: "shared/definitions/base.json#/definitions/license" },
    readme: { $ref: "shared/definitions/base.json#/definitions/readme" },
    bugs: { $ref: "shared/definitions/base.json#/definitions/bugs" },
    changelog: { $ref: "shared/definitions/base.json#/definitions/changelog" },
  },
};
const schema76 = {
  title: "An integer value",
  default: 0,
  examples: [2],
  $id: "#/definitions/templateVersion",
  type: "integer",
};
const schema77 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1d20"],
  $id: "#/definitions/initiative",
  type: "string",
};
const schema78 = {
  title: "An integer value",
  default: 0,
  examples: [5],
  $id: "#/definitions/gridDistance",
  type: "integer",
};
const schema79 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["ft, m"],
  $id: "#/definitions/gridUnits",
  type: "string",
};
const schema80 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.health"],
  $id: "#/definitions/primaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
const schema81 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.power"],
  $id: "#/definitions/secondaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
function validate32(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/packs" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      const _errs1 = errors;
      let valid1 = false;
      let passing0 = null;
      const _errs2 = errors;
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.module === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/oneOf/0/required",
            params: { missingProperty: "module" },
            message: "should have required property '" + "module" + "'",
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
      }
      var _valid0 = _errs2 === errors;
      if (_valid0) {
        valid1 = true;
        passing0 = 0;
      }
      const _errs3 = errors;
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.system === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/oneOf/1/required",
            params: { missingProperty: "system" },
            message: "should have required property '" + "system" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
      var _valid0 = _errs3 === errors;
      if (_valid0 && valid1) {
        valid1 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid1 = true;
          passing0 = 1;
        }
        const _errs4 = errors;
        if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
          if (data0.module === undefined) {
            const err2 = {
              keyword: "required",
              dataPath: dataPath + "/" + i0,
              schemaPath: "#/items/oneOf/2/required",
              params: { missingProperty: "module" },
              message: "should have required property '" + "module" + "'",
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
          if (data0.system === undefined) {
            const err3 = {
              keyword: "required",
              dataPath: dataPath + "/" + i0,
              schemaPath: "#/items/oneOf/2/required",
              params: { missingProperty: "system" },
              message: "should have required property '" + "system" + "'",
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        var _valid0 = _errs4 === errors;
        if (_valid0 && valid1) {
          valid1 = false;
          passing0 = [passing0, 2];
        } else {
          if (_valid0) {
            valid1 = true;
            passing0 = 2;
          }
        }
      }
      if (!valid1) {
        const err4 = {
          keyword: "oneOf",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      } else {
        errors = _errs1;
        if (vErrors !== null) {
          if (_errs1) {
            vErrors.length = _errs1;
          } else {
            vErrors = null;
          }
        }
      }
      if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
        if (data0.name === undefined) {
          const err5 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.label === undefined) {
          const err6 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.path === undefined) {
          const err7 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.entity === undefined) {
          const err8 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.name !== undefined) {
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err9 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.label !== undefined) {
          let data2 = data0.label;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err11 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/label",
                schemaPath: "#/items/properties/label/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
          } else {
            const err12 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/label",
              schemaPath: "#/items/properties/label/type",
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
        if (data0.module !== undefined) {
          let data3 = data0.module;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err13 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/module",
                schemaPath: "#/items/properties/module/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/module",
              schemaPath: "#/items/properties/module/type",
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
        if (data0.system !== undefined) {
          let data4 = data0.system;
          const _errs9 = errors;
          let valid3 = false;
          let passing1 = null;
          const _errs10 = errors;
          if (typeof data4 === "string") {
            if (!pattern0.test(data4)) {
              const err15 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/system",
                schemaPath: "#/definitions/system/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/definitions/system/type",
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs12 = errors;
          if (Array.isArray(data4)) {
            const len1 = data4.length;
            for (let i1 = 0; i1 < len1; i1++) {
              let data5 = data4[i1];
              if (typeof data5 === "string") {
                if (!pattern0.test(data5)) {
                  const err17 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/" + i0 + "/system/" + i1,
                    schemaPath: "#/definitions/systems/items/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/" + i0 + "/system/" + i1,
                  schemaPath: "#/definitions/systems/items/type",
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
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/definitions/systems/type",
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
          var _valid1 = _errs12 === errors;
          if (_valid1 && valid3) {
            valid3 = false;
            passing1 = [passing1, 1];
          } else {
            if (_valid1) {
              valid3 = true;
              passing1 = 1;
            }
          }
          if (!valid3) {
            const err20 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          } else {
            errors = _errs9;
            if (vErrors !== null) {
              if (_errs9) {
                vErrors.length = _errs9;
              } else {
                vErrors = null;
              }
            }
          }
        }
        if (data0.path !== undefined) {
          let data6 = data0.path;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err21 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err21];
              } else {
                vErrors.push(err21);
              }
              errors++;
            }
          } else {
            const err22 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
              params: { type: "string" },
              message: "should be string",
            };
            if (vErrors === null) {
              vErrors = [err22];
            } else {
              vErrors.push(err22);
            }
            errors++;
          }
        }
        if (data0.entity !== undefined) {
          let data7 = data0.entity;
          if (typeof data7 === "string") {
            if (!pattern0.test(data7)) {
              const err23 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err23];
              } else {
                vErrors.push(err23);
              }
              errors++;
            }
          } else {
            const err24 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err25 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err26];
    } else {
      vErrors.push(err26);
    }
    errors++;
  }
  validate32.errors = vErrors;
  return errors === 0;
}
function validate31(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystem" */ let vErrors = null;
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
    if (data.name !== undefined) {
      let data0 = data.name;
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err6 = {
            keyword: "pattern",
            dataPath: dataPath + "/name",
            schemaPath:
              "shared/definitions/base.json#/definitions/name/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
      } else {
        const err7 = {
          keyword: "type",
          dataPath: dataPath + "/name",
          schemaPath: "shared/definitions/base.json#/definitions/name/type",
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
    if (data.title !== undefined) {
      let data1 = data.title;
      if (typeof data1 === "string") {
        if (!pattern0.test(data1)) {
          const err8 = {
            keyword: "pattern",
            dataPath: dataPath + "/title",
            schemaPath:
              "shared/definitions/base.json#/definitions/title/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/title",
          schemaPath: "shared/definitions/base.json#/definitions/title/type",
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
    if (data.description !== undefined) {
      let data2 = data.description;
      if (typeof data2 === "string") {
        if (!pattern0.test(data2)) {
          const err10 = {
            keyword: "pattern",
            dataPath: dataPath + "/description",
            schemaPath:
              "shared/definitions/base.json#/definitions/description/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/description",
          schemaPath:
            "shared/definitions/base.json#/definitions/description/type",
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
    if (data.author !== undefined) {
      let data3 = data.author;
      if (typeof data3 === "string") {
        if (!pattern0.test(data3)) {
          const err12 = {
            keyword: "pattern",
            dataPath: dataPath + "/author",
            schemaPath:
              "shared/definitions/base.json#/definitions/author/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/author",
          schemaPath: "shared/definitions/base.json#/definitions/author/type",
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
    if (data.version !== undefined) {
      let data4 = data.version;
      const _errs10 = errors;
      let valid6 = false;
      let passing0 = null;
      const _errs11 = errors;
      if (typeof data4 === "string") {
        if (!pattern0.test(data4)) {
          const err14 = {
            keyword: "pattern",
            dataPath: dataPath + "/version",
            schemaPath:
              "shared/definitions/base.json#/definitions/version/oneOf/0/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err14];
          } else {
            vErrors.push(err14);
          }
          errors++;
        }
      } else {
        const err15 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "shared/definitions/base.json#/definitions/version/oneOf/0/type",
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
      var _valid0 = _errs11 === errors;
      if (_valid0) {
        valid6 = true;
        passing0 = 0;
      }
      const _errs12 = errors;
      if (!(typeof data4 == "number" && isFinite(data4))) {
        const err16 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "shared/definitions/base.json#/definitions/version/oneOf/1/type",
          params: { type: "number" },
          message: "should be number",
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
      var _valid0 = _errs12 === errors;
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
        const err17 = {
          keyword: "oneOf",
          dataPath: dataPath + "/version",
          schemaPath: "shared/definitions/base.json#/definitions/version/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err17];
        } else {
          vErrors.push(err17);
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
    }
    if (data.minimumCoreVersion !== undefined) {
      let data5 = data.minimumCoreVersion;
      if (typeof data5 === "string") {
        if (!pattern0.test(data5)) {
          const err18 = {
            keyword: "pattern",
            dataPath: dataPath + "/minimumCoreVersion",
            schemaPath:
              "shared/definitions/base.json#/definitions/minimumCoreVersion/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err18];
          } else {
            vErrors.push(err18);
          }
          errors++;
        }
      } else {
        const err19 = {
          keyword: "type",
          dataPath: dataPath + "/minimumCoreVersion",
          schemaPath:
            "shared/definitions/base.json#/definitions/minimumCoreVersion/type",
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
    if (data.compatibleCoreVersion !== undefined) {
      let data6 = data.compatibleCoreVersion;
      if (typeof data6 === "string") {
        if (!pattern0.test(data6)) {
          const err20 = {
            keyword: "pattern",
            dataPath: dataPath + "/compatibleCoreVersion",
            schemaPath:
              "shared/definitions/base.json#/definitions/compatibleCoreVersion/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/compatibleCoreVersion",
          schemaPath:
            "shared/definitions/base.json#/definitions/compatibleCoreVersion/type",
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
    if (data.scripts !== undefined) {
      let data7 = data.scripts;
      if (Array.isArray(data7)) {
        const len0 = data7.length;
        for (let i0 = 0; i0 < len0; i0++) {
          let data8 = data7[i0];
          if (typeof data8 === "string") {
            if (!pattern0.test(data8)) {
              const err22 = {
                keyword: "pattern",
                dataPath: dataPath + "/scripts/" + i0,
                schemaPath:
                  "shared/definitions/base.json#/definitions/scripts/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err22];
              } else {
                vErrors.push(err22);
              }
              errors++;
            }
          } else {
            const err23 = {
              keyword: "type",
              dataPath: dataPath + "/scripts/" + i0,
              schemaPath:
                "shared/definitions/base.json#/definitions/scripts/items/type",
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
      } else {
        const err24 = {
          keyword: "type",
          dataPath: dataPath + "/scripts",
          schemaPath: "shared/definitions/base.json#/definitions/scripts/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err24];
        } else {
          vErrors.push(err24);
        }
        errors++;
      }
    }
    if (data.esmodules !== undefined) {
      let data9 = data.esmodules;
      if (Array.isArray(data9)) {
        const len1 = data9.length;
        for (let i1 = 0; i1 < len1; i1++) {
          let data10 = data9[i1];
          if (typeof data10 === "string") {
            if (!pattern0.test(data10)) {
              const err25 = {
                keyword: "pattern",
                dataPath: dataPath + "/esmodules/" + i1,
                schemaPath:
                  "shared/definitions/base.json#/definitions/esmodules/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/esmodules/" + i1,
              schemaPath:
                "shared/definitions/base.json#/definitions/esmodules/items/type",
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
      } else {
        const err27 = {
          keyword: "type",
          dataPath: dataPath + "/esmodules",
          schemaPath:
            "shared/definitions/base.json#/definitions/esmodules/type",
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
    if (data.styles !== undefined) {
      let data11 = data.styles;
      if (Array.isArray(data11)) {
        const len2 = data11.length;
        for (let i2 = 0; i2 < len2; i2++) {
          let data12 = data11[i2];
          if (typeof data12 === "string") {
            if (!pattern0.test(data12)) {
              const err28 = {
                keyword: "pattern",
                dataPath: dataPath + "/styles/" + i2,
                schemaPath:
                  "shared/definitions/base.json#/definitions/styles/items/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err28];
              } else {
                vErrors.push(err28);
              }
              errors++;
            }
          } else {
            const err29 = {
              keyword: "type",
              dataPath: dataPath + "/styles/" + i2,
              schemaPath:
                "shared/definitions/base.json#/definitions/styles/items/type",
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
      } else {
        const err30 = {
          keyword: "type",
          dataPath: dataPath + "/styles",
          schemaPath: "shared/definitions/base.json#/definitions/styles/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
    }
    if (data.packs !== undefined) {
      if (
        !validate32(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate32.errors
            : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      let data14 = data.dependencies;
      if (Array.isArray(data14)) {
        const len3 = data14.length;
        for (let i3 = 0; i3 < len3; i3++) {
          let data15 = data14[i3];
          if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
            if (data15.name === undefined) {
              const err31 = {
                keyword: "required",
                dataPath: dataPath + "/dependencies/" + i3,
                schemaPath:
                  "shared/definitions/base.json#/definitions/dependencies/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            }
            if (data15.name !== undefined) {
              let data16 = data15.name;
              if (typeof data16 === "string") {
                if (!pattern0.test(data16)) {
                  const err32 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/name/type",
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
            }
            if (data15.manifest !== undefined) {
              let data17 = data15.manifest;
              if (typeof data17 === "string") {
                if (!pattern0.test(data17)) {
                  const err34 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/manifest",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/manifest/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/manifest",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/manifest/type",
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
            if (data15.type !== undefined) {
              let data18 = data15.type;
              if (typeof data18 === "string") {
                if (!pattern0.test(data18)) {
                  const err36 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/dependencies/" + i3 + "/type",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/dependencies/items/properties/type/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/dependencies/" + i3 + "/type",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/dependencies/items/properties/type/type",
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
          } else {
            const err38 = {
              keyword: "type",
              dataPath: dataPath + "/dependencies/" + i3,
              schemaPath:
                "shared/definitions/base.json#/definitions/dependencies/items/type",
              params: { type: "object" },
              message: "should be object",
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
          dataPath: dataPath + "/dependencies",
          schemaPath:
            "shared/definitions/base.json#/definitions/dependencies/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err39];
        } else {
          vErrors.push(err39);
        }
        errors++;
      }
    }
    if (data.languages !== undefined) {
      let data19 = data.languages;
      if (Array.isArray(data19)) {
        const len4 = data19.length;
        for (let i4 = 0; i4 < len4; i4++) {
          let data20 = data19[i4];
          if (data20 && typeof data20 == "object" && !Array.isArray(data20)) {
            if (data20.lang === undefined) {
              const err40 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "lang" },
                message: "should have required property '" + "lang" + "'",
              };
              if (vErrors === null) {
                vErrors = [err40];
              } else {
                vErrors.push(err40);
              }
              errors++;
            }
            if (data20.name === undefined) {
              const err41 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err41];
              } else {
                vErrors.push(err41);
              }
              errors++;
            }
            if (data20.path === undefined) {
              const err42 = {
                keyword: "required",
                dataPath: dataPath + "/languages/" + i4,
                schemaPath:
                  "shared/definitions/base.json#/definitions/languages/items/required",
                params: { missingProperty: "path" },
                message: "should have required property '" + "path" + "'",
              };
              if (vErrors === null) {
                vErrors = [err42];
              } else {
                vErrors.push(err42);
              }
              errors++;
            }
            if (data20.lang !== undefined) {
              let data21 = data20.lang;
              if (typeof data21 === "string") {
                if (!pattern0.test(data21)) {
                  const err43 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/lang",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/lang/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err43];
                  } else {
                    vErrors.push(err43);
                  }
                  errors++;
                }
              } else {
                const err44 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i4 + "/lang",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/lang/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err44];
                } else {
                  vErrors.push(err44);
                }
                errors++;
              }
            }
            if (data20.name !== undefined) {
              let data22 = data20.name;
              if (typeof data22 === "string") {
                if (!pattern0.test(data22)) {
                  const err45 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err45];
                  } else {
                    vErrors.push(err45);
                  }
                  errors++;
                }
              } else {
                const err46 = {
                  keyword: "type",
                  dataPath: dataPath + "/languages/" + i4 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/name/type",
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
            if (data20.path !== undefined) {
              let data23 = data20.path;
              if (typeof data23 === "string") {
                if (!pattern0.test(data23)) {
                  const err47 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/languages/" + i4 + "/path",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/languages/items/properties/path/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/languages/" + i4 + "/path",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/languages/items/properties/path/type",
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
            }
          } else {
            const err49 = {
              keyword: "type",
              dataPath: dataPath + "/languages/" + i4,
              schemaPath:
                "shared/definitions/base.json#/definitions/languages/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err49];
            } else {
              vErrors.push(err49);
            }
            errors++;
          }
        }
      } else {
        const err50 = {
          keyword: "type",
          dataPath: dataPath + "/languages",
          schemaPath:
            "shared/definitions/base.json#/definitions/languages/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err50];
        } else {
          vErrors.push(err50);
        }
        errors++;
      }
    }
    if (data.authors !== undefined) {
      let data24 = data.authors;
      if (Array.isArray(data24)) {
        const len5 = data24.length;
        for (let i5 = 0; i5 < len5; i5++) {
          let data25 = data24[i5];
          if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
            if (data25.name === undefined) {
              const err51 = {
                keyword: "required",
                dataPath: dataPath + "/authors/" + i5,
                schemaPath:
                  "shared/definitions/base.json#/definitions/authors/items/required",
                params: { missingProperty: "name" },
                message: "should have required property '" + "name" + "'",
              };
              if (vErrors === null) {
                vErrors = [err51];
              } else {
                vErrors.push(err51);
              }
              errors++;
            }
            if (data25.name !== undefined) {
              let data26 = data25.name;
              if (typeof data26 === "string") {
                if (!pattern0.test(data26)) {
                  const err52 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i5 + "/name",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/name/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
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
                  dataPath: dataPath + "/authors/" + i5 + "/name",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/name/type",
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
            }
            if (data25.email !== undefined) {
              let data27 = data25.email;
              if (typeof data27 === "string") {
                if (!pattern0.test(data27)) {
                  const err54 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i5 + "/email",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/email/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err54];
                  } else {
                    vErrors.push(err54);
                  }
                  errors++;
                }
              } else {
                const err55 = {
                  keyword: "type",
                  dataPath: dataPath + "/authors/" + i5 + "/email",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/email/type",
                  params: { type: "string" },
                  message: "should be string",
                };
                if (vErrors === null) {
                  vErrors = [err55];
                } else {
                  vErrors.push(err55);
                }
                errors++;
              }
            }
            if (data25.url !== undefined) {
              let data28 = data25.url;
              if (typeof data28 === "string") {
                if (!pattern0.test(data28)) {
                  const err56 = {
                    keyword: "pattern",
                    dataPath: dataPath + "/authors/" + i5 + "/url",
                    schemaPath:
                      "shared/definitions/base.json#/definitions/authors/items/properties/url/pattern",
                    params: { pattern: "^(.*)$" },
                    message: 'should match pattern "' + "^(.*)$" + '"',
                  };
                  if (vErrors === null) {
                    vErrors = [err56];
                  } else {
                    vErrors.push(err56);
                  }
                  errors++;
                }
              } else {
                const err57 = {
                  keyword: "type",
                  dataPath: dataPath + "/authors/" + i5 + "/url",
                  schemaPath:
                    "shared/definitions/base.json#/definitions/authors/items/properties/url/type",
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
          } else {
            const err58 = {
              keyword: "type",
              dataPath: dataPath + "/authors/" + i5,
              schemaPath:
                "shared/definitions/base.json#/definitions/authors/items/type",
              params: { type: "object" },
              message: "should be object",
            };
            if (vErrors === null) {
              vErrors = [err58];
            } else {
              vErrors.push(err58);
            }
            errors++;
          }
        }
      } else {
        const err59 = {
          keyword: "type",
          dataPath: dataPath + "/authors",
          schemaPath: "shared/definitions/base.json#/definitions/authors/type",
          params: { type: "array" },
          message: "should be array",
        };
        if (vErrors === null) {
          vErrors = [err59];
        } else {
          vErrors.push(err59);
        }
        errors++;
      }
    }
    if (data.socket !== undefined) {
      if (typeof data.socket !== "boolean") {
        const err60 = {
          keyword: "type",
          dataPath: dataPath + "/socket",
          schemaPath: "shared/definitions/base.json#/definitions/socket/type",
          params: { type: "boolean" },
          message: "should be boolean",
        };
        if (vErrors === null) {
          vErrors = [err60];
        } else {
          vErrors.push(err60);
        }
        errors++;
      }
    }
    if (data.templateVersion !== undefined) {
      let data30 = data.templateVersion;
      if (
        !(
          typeof data30 == "number" &&
          !(data30 % 1) &&
          !isNaN(data30) &&
          isFinite(data30)
        )
      ) {
        const err61 = {
          keyword: "type",
          dataPath: dataPath + "/templateVersion",
          schemaPath:
            "shared/definitions/system.json#/definitions/templateVersion/type",
          params: { type: "integer" },
          message: "should be integer",
        };
        if (vErrors === null) {
          vErrors = [err61];
        } else {
          vErrors.push(err61);
        }
        errors++;
      }
    }
    if (data.initiative !== undefined) {
      let data31 = data.initiative;
      if (typeof data31 === "string") {
        if (!pattern0.test(data31)) {
          const err62 = {
            keyword: "pattern",
            dataPath: dataPath + "/initiative",
            schemaPath:
              "shared/definitions/system.json#/definitions/initiative/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/initiative",
          schemaPath:
            "shared/definitions/system.json#/definitions/initiative/type",
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
    if (data.gridDistance !== undefined) {
      let data32 = data.gridDistance;
      if (
        !(
          typeof data32 == "number" &&
          !(data32 % 1) &&
          !isNaN(data32) &&
          isFinite(data32)
        )
      ) {
        const err64 = {
          keyword: "type",
          dataPath: dataPath + "/gridDistance",
          schemaPath:
            "shared/definitions/system.json#/definitions/gridDistance/type",
          params: { type: "integer" },
          message: "should be integer",
        };
        if (vErrors === null) {
          vErrors = [err64];
        } else {
          vErrors.push(err64);
        }
        errors++;
      }
    }
    if (data.gridUnits !== undefined) {
      let data33 = data.gridUnits;
      if (typeof data33 === "string") {
        if (!pattern0.test(data33)) {
          const err65 = {
            keyword: "pattern",
            dataPath: dataPath + "/gridUnits",
            schemaPath:
              "shared/definitions/system.json#/definitions/gridUnits/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err65];
          } else {
            vErrors.push(err65);
          }
          errors++;
        }
      } else {
        const err66 = {
          keyword: "type",
          dataPath: dataPath + "/gridUnits",
          schemaPath:
            "shared/definitions/system.json#/definitions/gridUnits/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err66];
        } else {
          vErrors.push(err66);
        }
        errors++;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      let data34 = data.primaryTokenAttribute;
      const _errs57 = errors;
      let valid30 = false;
      const _errs58 = errors;
      if (typeof data34 === "string") {
        if (!pattern0.test(data34)) {
          const err67 = {
            keyword: "pattern",
            dataPath: dataPath + "/primaryTokenAttribute",
            schemaPath:
              "shared/definitions/system.json#/definitions/primaryTokenAttribute/anyOf/0/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err67];
          } else {
            vErrors.push(err67);
          }
          errors++;
        }
      } else {
        const err68 = {
          keyword: "type",
          dataPath: dataPath + "/primaryTokenAttribute",
          schemaPath:
            "shared/definitions/system.json#/definitions/primaryTokenAttribute/anyOf/0/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err68];
        } else {
          vErrors.push(err68);
        }
        errors++;
      }
      var _valid1 = _errs58 === errors;
      valid30 = valid30 || _valid1;
      if (!valid30) {
        const _errs59 = errors;
        if (data34 !== null) {
          const err69 = {
            keyword: "type",
            dataPath: dataPath + "/primaryTokenAttribute",
            schemaPath:
              "shared/definitions/system.json#/definitions/primaryTokenAttribute/anyOf/1/type",
            params: { type: "null" },
            message: "should be null",
          };
          if (vErrors === null) {
            vErrors = [err69];
          } else {
            vErrors.push(err69);
          }
          errors++;
        }
        var _valid1 = _errs59 === errors;
        valid30 = valid30 || _valid1;
      }
      if (!valid30) {
        const err70 = {
          keyword: "anyOf",
          dataPath: dataPath + "/primaryTokenAttribute",
          schemaPath:
            "shared/definitions/system.json#/definitions/primaryTokenAttribute/anyOf",
          params: {},
          message: "should match some schema in anyOf",
        };
        if (vErrors === null) {
          vErrors = [err70];
        } else {
          vErrors.push(err70);
        }
        errors++;
      } else {
        errors = _errs57;
        if (vErrors !== null) {
          if (_errs57) {
            vErrors.length = _errs57;
          } else {
            vErrors = null;
          }
        }
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      let data35 = data.secondaryTokenAttribute;
      const _errs62 = errors;
      let valid32 = false;
      const _errs63 = errors;
      if (typeof data35 === "string") {
        if (!pattern0.test(data35)) {
          const err71 = {
            keyword: "pattern",
            dataPath: dataPath + "/secondaryTokenAttribute",
            schemaPath:
              "shared/definitions/system.json#/definitions/secondaryTokenAttribute/anyOf/0/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
          dataPath: dataPath + "/secondaryTokenAttribute",
          schemaPath:
            "shared/definitions/system.json#/definitions/secondaryTokenAttribute/anyOf/0/type",
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
      var _valid2 = _errs63 === errors;
      valid32 = valid32 || _valid2;
      if (!valid32) {
        const _errs64 = errors;
        if (data35 !== null) {
          const err73 = {
            keyword: "type",
            dataPath: dataPath + "/secondaryTokenAttribute",
            schemaPath:
              "shared/definitions/system.json#/definitions/secondaryTokenAttribute/anyOf/1/type",
            params: { type: "null" },
            message: "should be null",
          };
          if (vErrors === null) {
            vErrors = [err73];
          } else {
            vErrors.push(err73);
          }
          errors++;
        }
        var _valid2 = _errs64 === errors;
        valid32 = valid32 || _valid2;
      }
      if (!valid32) {
        const err74 = {
          keyword: "anyOf",
          dataPath: dataPath + "/secondaryTokenAttribute",
          schemaPath:
            "shared/definitions/system.json#/definitions/secondaryTokenAttribute/anyOf",
          params: {},
          message: "should match some schema in anyOf",
        };
        if (vErrors === null) {
          vErrors = [err74];
        } else {
          vErrors.push(err74);
        }
        errors++;
      } else {
        errors = _errs62;
        if (vErrors !== null) {
          if (_errs62) {
            vErrors.length = _errs62;
          } else {
            vErrors = null;
          }
        }
      }
    }
    if (data.url !== undefined) {
      let data36 = data.url;
      if (typeof data36 === "string") {
        if (!pattern0.test(data36)) {
          const err75 = {
            keyword: "pattern",
            dataPath: dataPath + "/url",
            schemaPath: "shared/definitions/base.json#/definitions/url/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err75];
          } else {
            vErrors.push(err75);
          }
          errors++;
        }
      } else {
        const err76 = {
          keyword: "type",
          dataPath: dataPath + "/url",
          schemaPath: "shared/definitions/base.json#/definitions/url/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err76];
        } else {
          vErrors.push(err76);
        }
        errors++;
      }
    }
    if (data.manifest !== undefined) {
      let data37 = data.manifest;
      if (typeof data37 === "string") {
        if (!pattern0.test(data37)) {
          const err77 = {
            keyword: "pattern",
            dataPath: dataPath + "/manifest",
            schemaPath:
              "shared/definitions/base.json#/definitions/manifest/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err77];
          } else {
            vErrors.push(err77);
          }
          errors++;
        }
      } else {
        const err78 = {
          keyword: "type",
          dataPath: dataPath + "/manifest",
          schemaPath: "shared/definitions/base.json#/definitions/manifest/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err78];
        } else {
          vErrors.push(err78);
        }
        errors++;
      }
    }
    if (data.download !== undefined) {
      let data38 = data.download;
      if (typeof data38 === "string") {
        if (!pattern0.test(data38)) {
          const err79 = {
            keyword: "pattern",
            dataPath: dataPath + "/download",
            schemaPath:
              "shared/definitions/base.json#/definitions/download/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err79];
          } else {
            vErrors.push(err79);
          }
          errors++;
        }
      } else {
        const err80 = {
          keyword: "type",
          dataPath: dataPath + "/download",
          schemaPath: "shared/definitions/base.json#/definitions/download/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err80];
        } else {
          vErrors.push(err80);
        }
        errors++;
      }
    }
    if (data.license !== undefined) {
      let data39 = data.license;
      if (typeof data39 === "string") {
        if (!pattern0.test(data39)) {
          const err81 = {
            keyword: "pattern",
            dataPath: dataPath + "/license",
            schemaPath:
              "shared/definitions/base.json#/definitions/license/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err81];
          } else {
            vErrors.push(err81);
          }
          errors++;
        }
      } else {
        const err82 = {
          keyword: "type",
          dataPath: dataPath + "/license",
          schemaPath: "shared/definitions/base.json#/definitions/license/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err82];
        } else {
          vErrors.push(err82);
        }
        errors++;
      }
    }
    if (data.readme !== undefined) {
      let data40 = data.readme;
      if (typeof data40 === "string") {
        if (!pattern0.test(data40)) {
          const err83 = {
            keyword: "pattern",
            dataPath: dataPath + "/readme",
            schemaPath:
              "shared/definitions/base.json#/definitions/readme/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err83];
          } else {
            vErrors.push(err83);
          }
          errors++;
        }
      } else {
        const err84 = {
          keyword: "type",
          dataPath: dataPath + "/readme",
          schemaPath: "shared/definitions/base.json#/definitions/readme/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err84];
        } else {
          vErrors.push(err84);
        }
        errors++;
      }
    }
    if (data.bugs !== undefined) {
      let data41 = data.bugs;
      if (typeof data41 === "string") {
        if (!pattern0.test(data41)) {
          const err85 = {
            keyword: "pattern",
            dataPath: dataPath + "/bugs",
            schemaPath:
              "shared/definitions/base.json#/definitions/bugs/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err85];
          } else {
            vErrors.push(err85);
          }
          errors++;
        }
      } else {
        const err86 = {
          keyword: "type",
          dataPath: dataPath + "/bugs",
          schemaPath: "shared/definitions/base.json#/definitions/bugs/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err86];
        } else {
          vErrors.push(err86);
        }
        errors++;
      }
    }
    if (data.changelog !== undefined) {
      let data42 = data.changelog;
      if (typeof data42 === "string") {
        if (!pattern0.test(data42)) {
          const err87 = {
            keyword: "pattern",
            dataPath: dataPath + "/changelog",
            schemaPath:
              "shared/definitions/base.json#/definitions/changelog/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
          };
          if (vErrors === null) {
            vErrors = [err87];
          } else {
            vErrors.push(err87);
          }
          errors++;
        }
      } else {
        const err88 = {
          keyword: "type",
          dataPath: dataPath + "/changelog",
          schemaPath:
            "shared/definitions/base.json#/definitions/changelog/type",
          params: { type: "string" },
          message: "should be string",
        };
        if (vErrors === null) {
          vErrors = [err88];
        } else {
          vErrors.push(err88);
        }
        errors++;
      }
    }
  } else {
    const err89 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err89];
    } else {
      vErrors.push(err89);
    }
    errors++;
  }
  validate31.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate35;
const schema89 = {
  $id: "validateSystemPlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [{ $ref: "validateSystem" }],
  definitions: {},
  properties: {},
};
function validate35(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
  let errors = 0;
  if (
    !validate31(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
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
  validate35.errors = vErrors;
  return errors === 0;
}
exports.validateModuleStrict = validate37;
const schema90 = {
  $id: "validateModuleStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  allOf: [
    { $ref: "validateModule" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {},
};
const schema91 = {
  $id: "shared/properties/strict/base.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base between module & system.json",
  definitions: {},
  properties: {
    version: {
      $ref: "../../definitions/strict/base.json#/definitions/version",
    },
    minimumCoreVersion: {
      $ref:
        "../../definitions/strict/base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref:
        "../../definitions/strict/base.json#/definitions/compatibleCoreVersion",
    },
  },
};
const schema93 = {
  title: "A semantic version string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/version",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage:
    '"version" should be a string that uses semantic versioning; current value: ${/version}',
};
const schema94 = {
  title: "A semantic version string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/minimumCoreVersion",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage:
    '"minimumCoreVersion" should be a string that uses semantic versioning; current value: ${/minimumCoreVersion}',
};
const schema95 = {
  title: "A semantic version string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/compatibleCoreVersion",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage:
    '"compatibleCoreVersion" should be a string that uses semantic versioning; current value: ${/compatibleCoreVersion}',
};
const pattern72 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
function validate39(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.version !== undefined) {
      let data0 = data.version;
      if (typeof data0 === "string") {
        if (!pattern72.test(data0)) {
          const err0 = {
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
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
      } else {
        const err1 = {
          keyword: "type",
          dataPath: dataPath + "/version",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/version/type",
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
        const emErrs0 = [];
        for (const err2 of vErrors) {
          if (
            err2.keyword !== "errorMessage" &&
            !err2.emUsed &&
            (err2.dataPath === dataPath + "/version" ||
              (err2.dataPath.indexOf(dataPath + "/version") === 0 &&
                err2.dataPath[dataPath + "/version".length] === "/")) &&
            err2.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/version"
            ) === 0 &&
            err2.schemaPath[
              "../../definitions/strict/base.json#/definitions/version".length
            ] === "/"
          ) {
            emErrs0.push(err2);
            err2.emUsed = true;
          }
        }
        if (emErrs0.length) {
          const err3 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/version",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/version/errorMessage",
            params: { errors: emErrs0 },
            message:
              '"version" should be a string that uses semantic versioning; current value: ' +
              JSON.stringify(rootData && rootData.version),
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
        const emErrs1 = [];
        for (const err4 of vErrors) {
          if (!err4.emUsed) {
            emErrs1.push(err4);
          }
        }
        vErrors = emErrs1;
        errors = emErrs1.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      let data1 = data.minimumCoreVersion;
      if (typeof data1 === "string") {
        if (!pattern72.test(data1)) {
          const err5 = {
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
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
      } else {
        const err6 = {
          keyword: "type",
          dataPath: dataPath + "/minimumCoreVersion",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/minimumCoreVersion/type",
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
      if (errors > 0) {
        const emErrs2 = [];
        for (const err7 of vErrors) {
          if (
            err7.keyword !== "errorMessage" &&
            !err7.emUsed &&
            (err7.dataPath === dataPath + "/minimumCoreVersion" ||
              (err7.dataPath.indexOf(dataPath + "/minimumCoreVersion") === 0 &&
                err7.dataPath[dataPath + "/minimumCoreVersion".length] ===
                  "/")) &&
            err7.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/minimumCoreVersion"
            ) === 0 &&
            err7.schemaPath[
              "../../definitions/strict/base.json#/definitions/minimumCoreVersion"
                .length
            ] === "/"
          ) {
            emErrs2.push(err7);
            err7.emUsed = true;
          }
        }
        if (emErrs2.length) {
          const err8 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/minimumCoreVersion",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/minimumCoreVersion/errorMessage",
            params: { errors: emErrs2 },
            message:
              '"minimumCoreVersion" should be a string that uses semantic versioning; current value: ' +
              JSON.stringify(rootData && rootData.minimumCoreVersion),
          };
          if (vErrors === null) {
            vErrors = [err8];
          } else {
            vErrors.push(err8);
          }
          errors++;
        }
        const emErrs3 = [];
        for (const err9 of vErrors) {
          if (!err9.emUsed) {
            emErrs3.push(err9);
          }
        }
        vErrors = emErrs3;
        errors = emErrs3.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      let data2 = data.compatibleCoreVersion;
      if (typeof data2 === "string") {
        if (!pattern72.test(data2)) {
          const err10 = {
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
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        }
      } else {
        const err11 = {
          keyword: "type",
          dataPath: dataPath + "/compatibleCoreVersion",
          schemaPath:
            "../../definitions/strict/base.json#/definitions/compatibleCoreVersion/type",
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
        const emErrs4 = [];
        for (const err12 of vErrors) {
          if (
            err12.keyword !== "errorMessage" &&
            !err12.emUsed &&
            (err12.dataPath === dataPath + "/compatibleCoreVersion" ||
              (err12.dataPath.indexOf(dataPath + "/compatibleCoreVersion") ===
                0 &&
                err12.dataPath[dataPath + "/compatibleCoreVersion".length] ===
                  "/")) &&
            err12.schemaPath.indexOf(
              "../../definitions/strict/base.json#/definitions/compatibleCoreVersion"
            ) === 0 &&
            err12.schemaPath[
              "../../definitions/strict/base.json#/definitions/compatibleCoreVersion"
                .length
            ] === "/"
          ) {
            emErrs4.push(err12);
            err12.emUsed = true;
          }
        }
        if (emErrs4.length) {
          const err13 = {
            keyword: "errorMessage",
            dataPath: dataPath + "/compatibleCoreVersion",
            schemaPath:
              "../../definitions/strict/base.json#/definitions/compatibleCoreVersion/errorMessage",
            params: { errors: emErrs4 },
            message:
              '"compatibleCoreVersion" should be a string that uses semantic versioning; current value: ' +
              JSON.stringify(rootData && rootData.compatibleCoreVersion),
          };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        }
        const emErrs5 = [];
        for (const err14 of vErrors) {
          if (!err14.emUsed) {
            emErrs5.push(err14);
          }
        }
        vErrors = emErrs5;
        errors = emErrs5.length;
      }
    }
  } else {
    const err15 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate39.errors = vErrors;
  return errors === 0;
}
function validate37(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModuleStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate25(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
    errors = vErrors.length;
  }
  if (
    !validate39(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
    errors = vErrors.length;
  }
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
  validate37.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate42;
const schema96 = {
  $id: "validateModulePlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  allOf: [
    { $ref: "validateModulePlus" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {},
};
function validate42(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate29(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
    errors = vErrors.length;
  }
  if (
    !validate39(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
    errors = vErrors.length;
  }
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
  validate42.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate45;
const schema97 = {
  $id: "validateSystemStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  allOf: [
    { $ref: "validateSystem" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {},
};
function validate45(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate31(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  if (
    !validate39(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
    errors = vErrors.length;
  }
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
  validate45.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate48;
const schema98 = {
  $id: "validateSystemPlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [
    { $ref: "validateSystemPlus" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {},
};
function validate48(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate35(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
    errors = vErrors.length;
  }
  if (
    !validate39(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
    errors = vErrors.length;
  }
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
  validate48.errors = vErrors;
  return errors === 0;
}
