"use strict";
exports.validateModule = validate52;
const schema17 = {
  $id: "validateModule",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/loose/module.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema18 = {
  $id: "shared/properties/loose/module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (loose)",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/loose/module.json#/definitions/manifest",
    },
    system: { $ref: "../../definitions/loose/module.json#/definitions/system" },
  },
};
const schema19 = {
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
    authors: { $ref: "../../definitions/loose/base.json#/definitions/authors" },
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
const schema21 = {
  default: "",
  examples: ["typhonrt"],
  title: "A string value",
  type: "string",
};
function validate56(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate56.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  items: {
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
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
function validate58(
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
        if (data0.name === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath: "#/items/properties/email/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/items/properties/url/type",
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
      } else {
        const err4 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
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
  validate58.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  title: "A string value",
  type: "string",
};
function validate60(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate60.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  title: "A string value",
  type: "string",
};
function validate62(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate62.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
};
function validate64(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate64.errors = vErrors;
  return errors === 0;
}
const schema26 = {
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
        errorMessage:
          "'type' should be one of the following strings: 'module', 'system', or 'world'",
        examples: ["module"],
        title: "A string value",
        type: "string",
      },
    },
    required: ["name"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
const func0 = require("ajv/dist/compile/equal");
function validate66(
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
        if (data0.name === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.manifest !== undefined) {
          if (typeof data0.manifest !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/manifest",
              schemaPath: "#/items/properties/manifest/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.type !== undefined) {
          let data3 = data0.type;
          if (typeof data3 !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/type",
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
          if (
            !(data3 === "module" || data3 === "system" || data3 === "world")
          ) {
            const err4 = {
              keyword: "enum",
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/enum",
              params: { allowedValues: schema26.items.properties.type.enum },
              message: "should be equal to one of the allowed values",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrs0 = [];
            for (const err5 of vErrors) {
              if (
                err5.keyword !== "errorMessage" &&
                !err5.emUsed &&
                (err5.dataPath === dataPath + "/" + i0 + "/type" ||
                  (err5.dataPath.indexOf(dataPath + "/" + i0 + "/type") === 0 &&
                    err5.dataPath[dataPath + "/" + i0 + "/type".length] ===
                      "/")) &&
                err5.schemaPath.indexOf("#/items/properties/type") === 0 &&
                err5.schemaPath["#/items/properties/type".length] === "/"
              ) {
                emErrs0.push(err5);
                err5.emUsed = true;
              }
            }
            if (emErrs0.length) {
              const err6 = {
                keyword: "errorMessage",
                dataPath: dataPath + "/" + i0 + "/type",
                schemaPath: "#/items/properties/type/errorMessage",
                params: { errors: emErrs0 },
                message:
                  "'type' should be one of the following strings: 'module', 'system', or 'world'",
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
            const emErrs1 = [];
            for (const err7 of vErrors) {
              if (!err7.emUsed) {
                emErrs1.push(err7);
              }
            }
            vErrors = emErrs1;
            errors = emErrs1.length;
          }
        }
      } else {
        const err8 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
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
  validate66.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  default: "",
  examples: ["Some description"],
  title: "A string value",
  type: "string",
};
function validate68(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate68.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  title: "A string value",
  type: "string",
};
function validate70(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate70.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  items: {
    default: "",
    examples: ["index.js"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
function validate72(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (typeof data[i0] !== "string") {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate72.errors = vErrors;
  return errors === 0;
}
const schema30 = {
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
function validate74(
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
        if (data0.lang === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "lang" },
            message: "should have required property '" + "lang" + "'",
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (data0.name === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.path === undefined) {
          const err2 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "path" },
            message: "should have required property '" + "path" + "'",
          };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        if (data0.lang !== undefined) {
          if (typeof data0.lang !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/lang",
              schemaPath: "#/items/properties/lang/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err4 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.path !== undefined) {
          if (typeof data0.path !== "string") {
            const err5 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
          schemaPath: "#/items/type",
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  default: "",
  examples: ["LICENSE"],
  title: "A string value",
  type: "string",
};
function validate76(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  default: "",
  examples: ["0.7.5"],
  title: "A string value",
  type: "string",
};
function validate78(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  default: "",
  examples: ["a-module"],
  title: "A string value",
  type: "string",
};
function validate80(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  default: "",
  examples: ["README.md"],
  title: "A string value",
  type: "string",
};
function validate82(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate82.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  items: {
    default: "",
    examples: ["ascript.js"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
function validate84(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (typeof data[i0] !== "string") {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate84.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  default: false,
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
function validate86(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "boolean" },
      message: "should be boolean",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate86.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  items: {
    default: "",
    examples: ["styles.css"],
    title: "A string value",
    type: "string",
  },
  title: "An array of items",
  type: "array",
};
function validate88(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (typeof data[i0] !== "string") {
        const err0 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  default: "",
  examples: ["A Module"],
  title: "A string value",
  type: "string",
};
function validate90(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate90.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  default: "",
  examples: ["https://someaddress.com/"],
  title: "A string value",
  type: "string",
};
function validate92(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate92.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  errorMessage: { _: "'version' should be a string or number" },
  oneOf: [{ type: "string" }, { type: "number" }],
};
function validate94(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/0/type",
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (!(typeof data == "number" && isFinite(data))) {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/1/type",
      params: { type: "number" },
      message: "should be number",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
  }
  if (!valid0) {
    const err2 = {
      keyword: "oneOf",
      dataPath,
      schemaPath: "#/oneOf",
      params: { passingSchemas: passing0 },
      message: "should match exactly one schema in oneOf",
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  if (errors > 0) {
    const emErrors0 = { _: [] };
    const templates0 = {};
    for (const err3 of vErrors) {
      if (
        err3.keyword !== "errorMessage" &&
        !err3.emUsed &&
        err3.dataPath === dataPath &&
        err3.keyword in emErrors0 &&
        err3.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err3.schemaPath.slice(1))
      ) {
        emErrors0[err3.keyword].push(err3);
        err3.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err4 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema40.errorMessage[key0],
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    const emErrs0 = [];
    for (const err5 of vErrors) {
      if (
        err5.keyword !== "errorMessage" &&
        !err5.emUsed &&
        (err5.dataPath === dataPath ||
          (err5.dataPath.indexOf(dataPath) === 0 &&
            err5.dataPath[dataPath.length] === "/")) &&
        err5.schemaPath.indexOf("#") === 0 &&
        err5.schemaPath["#".length] === "/"
      ) {
        emErrs0.push(err5);
        err5.emUsed = true;
      }
    }
    if (emErrs0.length) {
      const err6 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
        params: { errors: emErrs0 },
        message: "'version' should be a string or number",
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
    const emErrs1 = [];
    for (const err7 of vErrors) {
      if (!err7.emUsed) {
        emErrs1.push(err7);
      }
    }
    vErrors = emErrs1;
    errors = emErrs1.length;
  }
  validate94.errors = vErrors;
  return errors === 0;
}
function validate54(
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
      if (
        !validate56(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate56.errors
            : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.authors !== undefined) {
      if (
        !validate58(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate58.errors
            : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.bugs !== undefined) {
      if (
        !validate60(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
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
    if (data.changelog !== undefined) {
      if (
        !validate62(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate62.errors
            : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate64(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate64.errors
            : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      if (
        !validate66(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate66.errors
            : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.description !== undefined) {
      if (
        !validate68(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate68.errors
            : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
    if (data.download !== undefined) {
      if (
        !validate70(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate70.errors
            : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.esmodules !== undefined) {
      if (
        !validate72(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
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
    if (data.languages !== undefined) {
      if (
        !validate74(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate74.errors
            : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.license !== undefined) {
      if (
        !validate76(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate76.errors
            : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate78(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate78.errors
            : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (
        !validate80(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate80.errors
            : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
    if (data.readme !== undefined) {
      if (
        !validate82(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate82.errors
            : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.scripts !== undefined) {
      if (
        !validate84(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate84.errors
            : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.socket !== undefined) {
      if (
        !validate86(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate86.errors
            : vErrors.concat(validate86.errors);
        errors = vErrors.length;
      }
    }
    if (data.styles !== undefined) {
      if (
        !validate88(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate88.errors
            : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate90(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate90.errors
            : vErrors.concat(validate90.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (
        !validate92(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
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
    if (data.version !== undefined) {
      if (
        !validate94(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate94.errors
            : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err6 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  examples: ["https://someaddress.com/module.json"],
  title: "A string value",
  type: "string",
};
function validate98(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate98.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  examples: ["dnd5e"],
  oneOf: [
    { title: "A string value", type: "string" },
    {
      items: { title: "A string value", type: "string" },
      title: "An array of items",
      type: "array",
    },
  ],
  errorMessage: "'system' should be a string or array of strings",
};
function validate100(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/0/type",
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (typeof data[i0] !== "string") {
        const err1 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/oneOf/1/items/type",
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
  } else {
    const err2 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/1/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
  }
  if (!valid0) {
    const err3 = {
      keyword: "oneOf",
      dataPath,
      schemaPath: "#/oneOf",
      params: { passingSchemas: passing0 },
      message: "should match exactly one schema in oneOf",
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  if (errors > 0) {
    const emErrs0 = [];
    for (const err4 of vErrors) {
      if (
        err4.keyword !== "errorMessage" &&
        !err4.emUsed &&
        (err4.dataPath === dataPath ||
          (err4.dataPath.indexOf(dataPath) === 0 &&
            err4.dataPath[dataPath.length] === "/")) &&
        err4.schemaPath.indexOf("#") === 0 &&
        err4.schemaPath["#".length] === "/"
      ) {
        emErrs0.push(err4);
        err4.emUsed = true;
      }
    }
    if (emErrs0.length) {
      const err5 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
        params: { errors: emErrs0 },
        message: "'system' should be a string or array of strings",
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    const emErrs1 = [];
    for (const err6 of vErrors) {
      if (!err6.emUsed) {
        emErrs1.push(err6);
      }
    }
    vErrors = emErrs1;
    errors = emErrs1.length;
  }
  validate100.errors = vErrors;
  return errors === 0;
}
function validate53(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate54(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (
        !validate98(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate98.errors
            : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      if (
        !validate100(data.system, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate100.errors
            : vErrors.concat(validate100.errors);
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
  validate53.errors = vErrors;
  return errors === 0;
}
function validate52(
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
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
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
              : schema17.errorMessage[key0],
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
  validate52.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate103;
const schema44 = {
  $id: "validateModulePlus",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/loose/module+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema45 = {
  $id: "shared/properties/loose/module+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (loose)",
  type: "object",
  allOf: [{ $ref: "module.json" }],
  properties: {},
};
function validate104(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
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
  validate104.errors = vErrors;
  return errors === 0;
}
function validate103(
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
    !validate104(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate104.errors
        : vErrors.concat(validate104.errors);
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
              : schema44.errorMessage[key0],
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
  validate103.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate107;
const schema46 = {
  $id: "validateSystem",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/loose/system.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema47 = {
  $id: "shared/properties/loose/system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (loose)",
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
const schema49 = {
  default: 0,
  examples: [5],
  title: "An integer value",
  type: "integer",
};
function validate111(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (
    !(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))
  ) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate111.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  default: "",
  examples: ["ft, m"],
  title: "A string value",
  type: "string",
};
function validate113(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate113.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  default: "",
  examples: ["1d20"],
  title: "A string value",
  type: "string",
};
function validate115(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate115.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  default: "",
  examples: ["https://someaddress.com/system.json"],
  title: "A string value",
  type: "string",
};
function validate117(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate117.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  default: "",
  examples: ["resources.health"],
  title: "A string value or null",
  type: ["null", "string"],
};
function validate119(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema53.type },
      message: "should be null,string",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate119.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  default: "",
  examples: ["resources.power"],
  title: "A string value or null",
  type: ["null", "string"],
};
function validate121(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema54.type },
      message: "should be null,string",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate121.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  default: 0,
  examples: [2],
  title: "An integer value",
  type: "integer",
};
function validate123(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (
    !(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))
  ) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate123.errors = vErrors;
  return errors === 0;
}
function validate108(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate54(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gridDistance !== undefined) {
      if (
        !validate111(data.gridDistance, {
          dataPath: dataPath + "/gridDistance",
          parentData: data,
          parentDataProperty: "gridDistance",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate111.errors
            : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.gridUnits !== undefined) {
      if (
        !validate113(data.gridUnits, {
          dataPath: dataPath + "/gridUnits",
          parentData: data,
          parentDataProperty: "gridUnits",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate113.errors
            : vErrors.concat(validate113.errors);
        errors = vErrors.length;
      }
    }
    if (data.initiative !== undefined) {
      if (
        !validate115(data.initiative, {
          dataPath: dataPath + "/initiative",
          parentData: data,
          parentDataProperty: "initiative",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate115.errors
            : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
    if (data.manifest !== undefined) {
      if (
        !validate117(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate117.errors
            : vErrors.concat(validate117.errors);
        errors = vErrors.length;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      if (
        !validate119(data.primaryTokenAttribute, {
          dataPath: dataPath + "/primaryTokenAttribute",
          parentData: data,
          parentDataProperty: "primaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate119.errors
            : vErrors.concat(validate119.errors);
        errors = vErrors.length;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      if (
        !validate121(data.secondaryTokenAttribute, {
          dataPath: dataPath + "/secondaryTokenAttribute",
          parentData: data,
          parentDataProperty: "secondaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate121.errors
            : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.templateVersion !== undefined) {
      if (
        !validate123(data.templateVersion, {
          dataPath: dataPath + "/templateVersion",
          parentData: data,
          parentDataProperty: "templateVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate123.errors
            : vErrors.concat(validate123.errors);
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
  validate108.errors = vErrors;
  return errors === 0;
}
function validate107(
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
    !validate108(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate108.errors
        : vErrors.concat(validate108.errors);
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
              : schema46.errorMessage[key0],
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
  validate107.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate126;
const schema56 = {
  $id: "validateSystemPlus",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/loose/system+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema57 = {
  $id: "shared/properties/loose/system+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (loose)",
  type: "object",
  allOf: [{ $ref: "system.json" }],
  properties: {},
};
function validate127(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate108(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate108.errors
        : vErrors.concat(validate108.errors);
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
  validate127.errors = vErrors;
  return errors === 0;
}
function validate126(
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
    !validate127(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate127.errors
        : vErrors.concat(validate127.errors);
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
              : schema56.errorMessage[key0],
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
  validate126.errors = vErrors;
  return errors === 0;
}
exports.validateModuleStrict = validate130;
const schema58 = {
  $id: "validateModuleStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/module.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema59 = {
  $id: "shared/properties/strict/module.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (strict)",
  type: "object",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/strict/module.json#/definitions/manifest",
    },
    system: {
      $ref: "../../definitions/strict/module.json#/definitions/system",
    },
  },
};
const schema60 = {
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
    authors: {
      $ref: "../../definitions/strict/base.json#/definitions/authors",
    },
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
const schema62 = {
  default: "",
  examples: ["typhonrt"],
  title: "A string value",
  type: "string",
};
function validate134(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate134.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  items: {
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
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
function validate136(
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
        if (data0.name === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath: "#/items/properties/email/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.url !== undefined) {
          if (typeof data0.url !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/items/properties/url/type",
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
      } else {
        const err4 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
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
  validate136.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern: "'bugs' should be a string and / or appears to be a malformed url",
  },
};
const pattern0 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  "u"
);
function validate138(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema64.errorMessage[key0],
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
  validate138.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern:
      "'changelog' should be a string and / or appears to be a malformed url",
  },
};
function validate140(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema65.errorMessage[key0],
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
  validate140.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern:
      "'compatibleCoreVersion' should be a string that uses semantic versioning",
  },
};
const pattern2 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
function validate142(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern2.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema66.errorMessage[key0],
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
  validate142.errors = vErrors;
  return errors === 0;
}
const schema67 = {
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
        errorMessage:
          "'type' should be one of the following strings: 'module', 'system', or 'world'",
        examples: ["module"],
        title: "A string value",
        type: "string",
      },
    },
    required: ["name"],
    title: "An object value",
    type: "object",
  },
  title: "An array of items",
  type: "array",
};
function validate144(
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
        if (data0.name === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.manifest !== undefined) {
          if (typeof data0.manifest !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/manifest",
              schemaPath: "#/items/properties/manifest/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.type !== undefined) {
          let data3 = data0.type;
          if (typeof data3 !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/type",
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
          if (
            !(data3 === "module" || data3 === "system" || data3 === "world")
          ) {
            const err4 = {
              keyword: "enum",
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/enum",
              params: { allowedValues: schema67.items.properties.type.enum },
              message: "should be equal to one of the allowed values",
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          if (errors > 0) {
            const emErrs0 = [];
            for (const err5 of vErrors) {
              if (
                err5.keyword !== "errorMessage" &&
                !err5.emUsed &&
                (err5.dataPath === dataPath + "/" + i0 + "/type" ||
                  (err5.dataPath.indexOf(dataPath + "/" + i0 + "/type") === 0 &&
                    err5.dataPath[dataPath + "/" + i0 + "/type".length] ===
                      "/")) &&
                err5.schemaPath.indexOf("#/items/properties/type") === 0 &&
                err5.schemaPath["#/items/properties/type".length] === "/"
              ) {
                emErrs0.push(err5);
                err5.emUsed = true;
              }
            }
            if (emErrs0.length) {
              const err6 = {
                keyword: "errorMessage",
                dataPath: dataPath + "/" + i0 + "/type",
                schemaPath: "#/items/properties/type/errorMessage",
                params: { errors: emErrs0 },
                message:
                  "'type' should be one of the following strings: 'module', 'system', or 'world'",
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
            const emErrs1 = [];
            for (const err7 of vErrors) {
              if (!err7.emUsed) {
                emErrs1.push(err7);
              }
            }
            vErrors = emErrs1;
            errors = emErrs1.length;
          }
        }
      } else {
        const err8 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
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
  validate144.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  default: "",
  examples: ["Some description"],
  title: "A string value",
  type: "string",
};
function validate146(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate146.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$",
  errorMessage: {
    pattern:
      "'download' should be a string and / or appears to be a malformed url",
  },
};
const pattern3 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$",
  "u"
);
function validate148(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern3.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: {
          pattern:
            "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$",
        },
        message:
          'should match pattern "' +
          "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$" +
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema69.errorMessage[key0],
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
  validate148.errors = vErrors;
  return errors === 0;
}
const schema70 = {
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
const pattern4 = new RegExp("^(.+).js$", "u");
function validate150(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern4.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.+).js$" },
            message: 'should match pattern "' + "^(.+).js$" + '"',
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
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err2 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate150.errors = vErrors;
  return errors === 0;
}
const schema71 = {
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
const pattern5 = new RegExp("^(.+).json$", "u");
function validate152(
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
        if (data0.lang === undefined) {
          const err0 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "lang" },
            message: "should have required property '" + "lang" + "'",
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (data0.name === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.path === undefined) {
          const err2 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "path" },
            message: "should have required property '" + "path" + "'",
          };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        if (data0.lang !== undefined) {
          if (typeof data0.lang !== "string") {
            const err3 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/lang",
              schemaPath: "#/items/properties/lang/type",
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err4 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.path !== undefined) {
          let data3 = data0.path;
          if (typeof data3 === "string") {
            if (!pattern5.test(data3)) {
              const err5 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.+).json$" },
                message: 'should match pattern "' + "^(.+).json$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
      } else {
        const err7 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
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
      dataPath,
      schemaPath: "#/type",
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
  validate152.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  default: "",
  examples: ["LICENSE"],
  title: "A string value",
  type: "string",
};
function validate154(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate154.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  default: "",
  examples: ["0.7.5"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern:
      "'minimumCoreVersion' should be a string that uses semantic versioning",
  },
};
function validate156(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern2.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema73.errorMessage[key0],
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
  validate156.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  default: "",
  examples: ["a-module"],
  title: "A string value",
  type: "string",
  pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
  errorMessage: {
    pattern:
      "'name' should be a string that is lowercase alpha-numeric with only separating hyphens",
  },
};
const pattern7 = new RegExp("^([a-z0-9]+-?)*[a-z0-9]+$", "u");
function validate158(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern7.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^([a-z0-9]+-?)*[a-z0-9]+$" },
        message: 'should match pattern "' + "^([a-z0-9]+-?)*[a-z0-9]+$" + '"',
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema74.errorMessage[key0],
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
  validate158.errors = vErrors;
  return errors === 0;
}
function validate160(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate160.errors = vErrors;
  return errors === 0;
}
const schema76 = {
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
function validate162(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern4.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.+).js$" },
            message: 'should match pattern "' + "^(.+).js$" + '"',
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
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err2 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate162.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  default: false,
  examples: [true],
  title: "A boolean value",
  type: "boolean",
};
function validate164(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "boolean" },
      message: "should be boolean",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate164.errors = vErrors;
  return errors === 0;
}
const schema78 = {
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
const pattern9 = new RegExp("^(.+).css$", "u");
function validate166(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern9.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.+).css$" },
            message: 'should match pattern "' + "^(.+).css$" + '"',
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
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
  } else {
    const err2 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate166.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  default: "",
  examples: ["A Module"],
  title: "A string value",
  type: "string",
};
function validate168(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate168.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  default: "",
  examples: ["https://someaddress.com/"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern: "'url' should be a string and / or appears to be a malformed url",
  },
};
function validate170(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema80.errorMessage[key0],
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
  validate170.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  default: "",
  examples: ["1.0.0"],
  title: "A string value",
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern: "'version' should be a string that uses semantic versioning",
  },
};
function validate172(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern2.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema81.errorMessage[key0],
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
  validate172.errors = vErrors;
  return errors === 0;
}
function validate132(
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
      if (
        !validate134(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate134.errors
            : vErrors.concat(validate134.errors);
        errors = vErrors.length;
      }
    }
    if (data.authors !== undefined) {
      if (
        !validate136(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate136.errors
            : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
    if (data.bugs !== undefined) {
      if (
        !validate138(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate138.errors
            : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.changelog !== undefined) {
      if (
        !validate140(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate140.errors
            : vErrors.concat(validate140.errors);
        errors = vErrors.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate142(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate142.errors
            : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      if (
        !validate144(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate144.errors
            : vErrors.concat(validate144.errors);
        errors = vErrors.length;
      }
    }
    if (data.description !== undefined) {
      if (
        !validate146(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate146.errors
            : vErrors.concat(validate146.errors);
        errors = vErrors.length;
      }
    }
    if (data.download !== undefined) {
      if (
        !validate148(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate148.errors
            : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
    if (data.esmodules !== undefined) {
      if (
        !validate150(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate150.errors
            : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
    if (data.languages !== undefined) {
      if (
        !validate152(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate152.errors
            : vErrors.concat(validate152.errors);
        errors = vErrors.length;
      }
    }
    if (data.license !== undefined) {
      if (
        !validate154(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate154.errors
            : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate156(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate156.errors
            : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (
        !validate158(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate158.errors
            : vErrors.concat(validate158.errors);
        errors = vErrors.length;
      }
    }
    if (data.readme !== undefined) {
      if (
        !validate160(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate160.errors
            : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.scripts !== undefined) {
      if (
        !validate162(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate162.errors
            : vErrors.concat(validate162.errors);
        errors = vErrors.length;
      }
    }
    if (data.socket !== undefined) {
      if (
        !validate164(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate164.errors
            : vErrors.concat(validate164.errors);
        errors = vErrors.length;
      }
    }
    if (data.styles !== undefined) {
      if (
        !validate166(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate166.errors
            : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate168(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate168.errors
            : vErrors.concat(validate168.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (
        !validate170(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate170.errors
            : vErrors.concat(validate170.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (
        !validate172(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate172.errors
            : vErrors.concat(validate172.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err6 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate132.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  examples: ["https://someaddress.com/module.json"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/module.json$",
  errorMessage: {
    pattern:
      "'manifest' should be a string and / or appears to be a malformed url",
  },
};
const pattern12 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/module.json$",
  "u"
);
function validate176(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern12.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: {
          pattern:
            "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/module.json$",
        },
        message:
          'should match pattern "' +
          "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/module.json$" +
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema83.errorMessage[key0],
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
  validate176.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  examples: ["dnd5e"],
  oneOf: [
    {
      title: "A string value",
      type: "string",
      pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
      errorMessage: {
        pattern:
          "'system' should be a string that is alpha-numeric with only underscore and hyphen separators",
      },
    },
    {
      items: {
        title: "A string value",
        type: "string",
        pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$",
        errorMessage: {
          pattern:
            "'system' should be a string that is alpha-numeric with only underscore and hyphen separators",
        },
      },
      title: "An array of items",
      type: "array",
    },
  ],
  errorMessage: "'system' should be a string or array of strings",
};
const pattern13 = new RegExp("^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$", "u");
function validate178(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (typeof data === "string") {
    if (!pattern13.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/oneOf/0/pattern",
        params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
        message:
          'should match pattern "' + "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" + '"',
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
      dataPath,
      schemaPath: "#/oneOf/0/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#/oneOf/0") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(9))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/oneOf/0/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema84.oneOf[0].errorMessage[key0],
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern13.test(data0)) {
          const err5 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/oneOf/1/items/pattern",
            params: { pattern: "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" },
            message:
              'should match pattern "' +
              "^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$" +
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
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/oneOf/1/items/type",
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
        const emErrors1 = { pattern: [] };
        const templates1 = {};
        for (const err7 of vErrors) {
          if (
            err7.keyword !== "errorMessage" &&
            !err7.emUsed &&
            err7.dataPath === dataPath + "/" + i0 &&
            err7.keyword in emErrors1 &&
            err7.schemaPath.indexOf("#/oneOf/1/items") === 0 &&
            /^\/[^\/]*$/.test(err7.schemaPath.slice(15))
          ) {
            emErrors1[err7.keyword].push(err7);
            err7.emUsed = true;
          }
        }
        for (const key1 in emErrors1) {
          if (emErrors1[key1].length) {
            const err8 = {
              keyword: "errorMessage",
              dataPath: dataPath + "/" + i0,
              schemaPath: "#/oneOf/1/items/errorMessage",
              params: { errors: emErrors1[key1] },
              message:
                key1 in templates1
                  ? templates1[key1]()
                  : schema84.oneOf[1].items.errorMessage[key1],
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
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
  } else {
    const err10 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/1/type",
      params: { type: "array" },
      message: "should be array",
    };
    if (vErrors === null) {
      vErrors = [err10];
    } else {
      vErrors.push(err10);
    }
    errors++;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
  }
  if (!valid0) {
    const err11 = {
      keyword: "oneOf",
      dataPath,
      schemaPath: "#/oneOf",
      params: { passingSchemas: passing0 },
      message: "should match exactly one schema in oneOf",
    };
    if (vErrors === null) {
      vErrors = [err11];
    } else {
      vErrors.push(err11);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  if (errors > 0) {
    const emErrs2 = [];
    for (const err12 of vErrors) {
      if (
        err12.keyword !== "errorMessage" &&
        !err12.emUsed &&
        (err12.dataPath === dataPath ||
          (err12.dataPath.indexOf(dataPath) === 0 &&
            err12.dataPath[dataPath.length] === "/")) &&
        err12.schemaPath.indexOf("#") === 0 &&
        err12.schemaPath["#".length] === "/"
      ) {
        emErrs2.push(err12);
        err12.emUsed = true;
      }
    }
    if (emErrs2.length) {
      const err13 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
        params: { errors: emErrs2 },
        message: "'system' should be a string or array of strings",
      };
      if (vErrors === null) {
        vErrors = [err13];
      } else {
        vErrors.push(err13);
      }
      errors++;
    }
    const emErrs3 = [];
    for (const err14 of vErrors) {
      if (!err14.emUsed) {
        emErrs3.push(err14);
      }
    }
    vErrors = emErrs3;
    errors = emErrs3.length;
  }
  validate178.errors = vErrors;
  return errors === 0;
}
function validate131(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate132(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate132.errors
        : vErrors.concat(validate132.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (
        !validate176(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate176.errors
            : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      if (
        !validate178(data.system, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate178.errors
            : vErrors.concat(validate178.errors);
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
  validate131.errors = vErrors;
  return errors === 0;
}
function validate130(
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
    !validate131(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate131.errors
        : vErrors.concat(validate131.errors);
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
  validate130.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate181;
const schema85 = {
  $id: "validateModulePlusStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/module+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema86 = {
  $id: "shared/properties/strict/module+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (strict)",
  type: "object",
  allOf: [{ $ref: "module.json" }],
  properties: {},
};
function validate182(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate131(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate131.errors
        : vErrors.concat(validate131.errors);
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
  validate182.errors = vErrors;
  return errors === 0;
}
function validate181(
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
    !validate182(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate182.errors
        : vErrors.concat(validate182.errors);
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
              : schema85.errorMessage[key0],
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
  validate181.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate185;
const schema87 = {
  $id: "validateSystemStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/system.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema88 = {
  $id: "shared/properties/strict/system.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (strict)",
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
const schema90 = {
  default: 0,
  examples: [5],
  title: "An integer value",
  type: "integer",
};
function validate189(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (
    !(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))
  ) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate189.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  default: "",
  examples: ["ft, m"],
  title: "A string value",
  type: "string",
};
function validate191(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate191.errors = vErrors;
  return errors === 0;
}
const schema92 = {
  default: "",
  examples: ["1d20"],
  title: "A string value",
  type: "string",
};
function validate193(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate193.errors = vErrors;
  return errors === 0;
}
const schema93 = {
  default: "",
  examples: ["https://someaddress.com/system.json"],
  title: "A string value",
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$",
  errorMessage: {
    pattern:
      "'manifest' should be a string and / or appears to be a malformed url",
  },
};
const pattern15 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$",
  "u"
);
function validate195(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern15.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: {
          pattern:
            "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$",
        },
        message:
          'should match pattern "' +
          "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$" +
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
      dataPath,
      schemaPath: "#/type",
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
        err2.dataPath === dataPath &&
        err2.keyword in emErrors0 &&
        err2.schemaPath.indexOf("#") === 0 &&
        /^\/[^\/]*$/.test(err2.schemaPath.slice(1))
      ) {
        emErrors0[err2.keyword].push(err2);
        err2.emUsed = true;
      }
    }
    for (const key0 in emErrors0) {
      if (emErrors0[key0].length) {
        const err3 = {
          keyword: "errorMessage",
          dataPath,
          schemaPath: "#/errorMessage",
          params: { errors: emErrors0[key0] },
          message:
            key0 in templates0
              ? templates0[key0]()
              : schema93.errorMessage[key0],
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
  validate195.errors = vErrors;
  return errors === 0;
}
const schema94 = {
  default: "",
  examples: ["resources.health"],
  title: "A string value or null",
  type: ["null", "string"],
};
function validate197(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema94.type },
      message: "should be null,string",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate197.errors = vErrors;
  return errors === 0;
}
const schema95 = {
  default: "",
  examples: ["resources.power"],
  title: "A string value or null",
  type: ["null", "string"],
};
function validate199(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema95.type },
      message: "should be null,string",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate199.errors = vErrors;
  return errors === 0;
}
const schema96 = {
  default: 0,
  examples: [2],
  title: "An integer value",
  type: "integer",
};
function validate201(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (
    !(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))
  ) {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate201.errors = vErrors;
  return errors === 0;
}
function validate186(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate132(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate132.errors
        : vErrors.concat(validate132.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gridDistance !== undefined) {
      if (
        !validate189(data.gridDistance, {
          dataPath: dataPath + "/gridDistance",
          parentData: data,
          parentDataProperty: "gridDistance",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate189.errors
            : vErrors.concat(validate189.errors);
        errors = vErrors.length;
      }
    }
    if (data.gridUnits !== undefined) {
      if (
        !validate191(data.gridUnits, {
          dataPath: dataPath + "/gridUnits",
          parentData: data,
          parentDataProperty: "gridUnits",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate191.errors
            : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
    if (data.initiative !== undefined) {
      if (
        !validate193(data.initiative, {
          dataPath: dataPath + "/initiative",
          parentData: data,
          parentDataProperty: "initiative",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate193.errors
            : vErrors.concat(validate193.errors);
        errors = vErrors.length;
      }
    }
    if (data.manifest !== undefined) {
      if (
        !validate195(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate195.errors
            : vErrors.concat(validate195.errors);
        errors = vErrors.length;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      if (
        !validate197(data.primaryTokenAttribute, {
          dataPath: dataPath + "/primaryTokenAttribute",
          parentData: data,
          parentDataProperty: "primaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate197.errors
            : vErrors.concat(validate197.errors);
        errors = vErrors.length;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      if (
        !validate199(data.secondaryTokenAttribute, {
          dataPath: dataPath + "/secondaryTokenAttribute",
          parentData: data,
          parentDataProperty: "secondaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate199.errors
            : vErrors.concat(validate199.errors);
        errors = vErrors.length;
      }
    }
    if (data.templateVersion !== undefined) {
      if (
        !validate201(data.templateVersion, {
          dataPath: dataPath + "/templateVersion",
          parentData: data,
          parentDataProperty: "templateVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate201.errors
            : vErrors.concat(validate201.errors);
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
  validate186.errors = vErrors;
  return errors === 0;
}
function validate185(
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
    !validate186(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate186.errors
        : vErrors.concat(validate186.errors);
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
              : schema87.errorMessage[key0],
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
  validate185.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate204;
const schema97 = {
  $id: "validateSystemPlusStrict",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+ and strict requirements",
  type: "object",
  allOf: [{ $ref: "../../shared/properties/strict/system+.json" }],
  errorMessage: { type: "package manifest should be an object" },
};
const schema98 = {
  $id: "shared/properties/strict/system+.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (strict)",
  type: "object",
  allOf: [{ $ref: "system.json" }],
  properties: {},
};
function validate205(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate186(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate186.errors
        : vErrors.concat(validate186.errors);
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
  validate205.errors = vErrors;
  return errors === 0;
}
function validate204(
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
    !validate205(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate205.errors
        : vErrors.concat(validate205.errors);
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
              : schema97.errorMessage[key0],
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
  validate204.errors = vErrors;
  return errors === 0;
}
