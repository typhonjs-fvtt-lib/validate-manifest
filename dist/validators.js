"use strict";
exports.validateModule = validate52;
const schema17 = {
  $id: "validateModule",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  allOf: [{ $ref: "../../shared/properties/loose/module.json" }],
};
const schema18 = {
  $id: "shared/properties/loose/module.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (loose)",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/loose/module.json#/definitions/manifest",
    },
    system: {
      oneOf: [
        { $ref: "../../definitions/loose/module.json#/definitions/system" },
        { $ref: "../../definitions/loose/module.json#/definitions/systems" },
      ],
    },
  },
};
const schema19 = {
  $id: "shared/properties/loose/base.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for loose module.json & system.json",
  allOf: [{ $ref: "../common/base.json" }],
  properties: {
    name: { $ref: "../../definitions/loose/base.json#/definitions/name" },
    version: { $ref: "../../definitions/loose/base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "../../definitions/loose/base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref:
        "../../definitions/loose/base.json#/definitions/compatibleCoreVersion",
    },
    esmodules: {
      $ref: "../../definitions/loose/base.json#/definitions/esmodules",
    },
    scripts: { $ref: "../../definitions/loose/base.json#/definitions/scripts" },
    styles: { $ref: "../../definitions/loose/base.json#/definitions/styles" },
    languages: {
      $ref: "../../definitions/loose/base.json#/definitions/languages",
    },
    url: { $ref: "../../definitions/loose/base.json#/definitions/url" },
    download: {
      $ref: "../../definitions/loose/base.json#/definitions/download",
    },
    bugs: { $ref: "../../definitions/loose/base.json#/definitions/bugs" },
    changelog: {
      $ref: "../../definitions/loose/base.json#/definitions/changelog",
    },
  },
};
const schema20 = {
  $id: "shared/properties/common/base.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared base between module & system.json",
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
    title: { $ref: "../../definitions/common/base.json#/definitions/title" },
    description: {
      $ref: "../../definitions/common/base.json#/definitions/description",
    },
    author: { $ref: "../../definitions/common/base.json#/definitions/author" },
    dependencies: {
      $ref: "../../definitions/common/base.json#/definitions/dependencies",
    },
    authors: {
      $ref: "../../definitions/common/base.json#/definitions/authors",
    },
    socket: { $ref: "../../definitions/common/base.json#/definitions/socket" },
    license: {
      $ref: "../../definitions/common/base.json#/definitions/license",
    },
    readme: { $ref: "../../definitions/common/base.json#/definitions/readme" },
  },
};
const schema22 = {
  title: "A string value",
  default: "",
  examples: ["A Module"],
  $id: "#/definitions/title",
  type: "string",
};
function validate57(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/title" */ let vErrors = null;
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
  validate57.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  title: "A string value",
  default: "",
  examples: ["Some description"],
  $id: "#/definitions/description",
  type: "string",
};
function validate59(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/description" */ let vErrors = null;
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
  validate59.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  title: "A string value",
  default: "",
  examples: ["typhonrt"],
  $id: "#/definitions/author",
  type: "string",
};
function validate61(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/author" */ let vErrors = null;
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
  validate61.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name"],
    properties: {
      name: {
        title: "A string value",
        default: "",
        examples: ["dice-so-nice"],
        $id: "#/definitions/dependencies/items/properties/name",
        type: "string",
      },
      manifest: {
        title: "A string value",
        default: "",
        examples: [
          "https://gitlab.com/riccisi/foundryvtt-dice-so-nice/raw/2.0.3/module/module.json",
        ],
        $id: "#/definitions/dependencies/items/properties/manifest",
        type: "string",
      },
      type: {
        title: "A string value",
        default: "",
        examples: ["module"],
        $id: "#/definitions/dependencies/items/properties/type",
        type: "string",
        enum: ["module", "system", "world"],
        errorMessage:
          "'type' should be one of the following strings: 'module', 'system', or 'world'",
      },
    },
    $id: "#/definitions/dependencies/items",
    type: "object",
  },
  $id: "#/definitions/dependencies",
  type: "array",
};
const func0 = require("ajv/dist/compile/equal");
function validate63(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/dependencies" */ let vErrors = null;
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.manifest !== undefined) {
          if (typeof data0.manifest !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/manifest",
              schemaPath: "#/items/properties/manifest/type",
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
              params: { allowedValues: schema25.items.properties.type.enum },
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
  validate63.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name"],
    properties: {
      name: {
        title: "A string value",
        default: "",
        examples: ["Atropos"],
        $id: "#/definitions/authors/items/properties/name",
        type: "string",
      },
      email: {
        title: "A string value",
        default: "",
        examples: ["admin@foundryvtt.com"],
        $id: "#/definitions/authors/items/properties/email",
        type: "string",
      },
      url: {
        title: "A string value",
        default: "",
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
function validate65(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/authors" */ let vErrors = null;
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
        if (data0.name !== undefined) {
          if (typeof data0.name !== "string") {
            const err1 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.email !== undefined) {
          if (typeof data0.email !== "string") {
            const err2 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath: "#/items/properties/email/type",
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
  validate65.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  title: "A boolean value",
  default: false,
  examples: [true],
  $id: "#/definitions/socket",
  type: "boolean",
};
function validate67(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/socket" */ let vErrors = null;
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
  validate67.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  title: "A string value",
  default: "",
  examples: ["LICENSE"],
  $id: "#/definitions/license",
  type: "string",
};
function validate69(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/license" */ let vErrors = null;
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
  validate69.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  title: "A string value",
  default: "",
  examples: ["README.md"],
  $id: "#/definitions/readme",
  type: "string",
};
function validate71(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/readme" */ let vErrors = null;
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
  validate71.errors = vErrors;
  return errors === 0;
}
function validate55(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/common/base.json" */ let vErrors = null;
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
    if (data.title !== undefined) {
      if (
        !validate57(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate57.errors
            : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
    if (data.description !== undefined) {
      if (
        !validate59(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate59.errors
            : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
    if (data.author !== undefined) {
      if (
        !validate61(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate61.errors
            : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      if (
        !validate63(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate63.errors
            : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.authors !== undefined) {
      if (
        !validate65(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate65.errors
            : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.socket !== undefined) {
      if (
        !validate67(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate67.errors
            : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.license !== undefined) {
      if (
        !validate69(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate69.errors
            : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.readme !== undefined) {
      if (
        !validate71(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate71.errors
            : vErrors.concat(validate71.errors);
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
  validate55.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  title: "A string value",
  default: "",
  examples: ["a-module"],
  type: "string",
};
function validate75(
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
  validate75.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  oneOf: [{ type: "string" }, { type: "number" }],
  errorMessage: { _: "'version' should be a string or number" },
};
function validate77(
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
              : schema32.errorMessage[key0],
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
  validate77.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  title: "A string value",
  default: "",
  examples: ["0.7.5"],
  type: "string",
};
function validate79(
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
  validate79.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  type: "string",
};
function validate81(
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
  validate81.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["index.js"],
    type: "string",
  },
  type: "array",
};
function validate83(
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
  validate83.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["ascript.js"],
    type: "string",
  },
  type: "array",
};
function validate85(
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
  validate85.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["styles.css"],
    type: "string",
  },
  type: "array",
};
function validate87(
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
  validate87.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  $id: "#/definitions/languages",
  type: "array",
  title: "An array of items",
  items: {
    $id: "#/definitions/languages/items",
    type: "object",
    title: "An object value",
    required: ["lang", "name", "path"],
    properties: {
      lang: {
        title: "A string value",
        default: "",
        examples: ["en"],
        $id: "#/definitions/languages/items/properties/lang",
        type: "string",
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["English"],
        $id: "#/definitions/languages/items/properties/name",
        type: "string",
      },
      path: {
        $id: "#/definitions/languages/items/properties/path",
        title: "A string value",
        examples: ["lang/en.json"],
        type: "string",
      },
    },
  },
};
function validate89(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/languages" */ let vErrors = null;
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
  validate89.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/"],
  type: "string",
};
function validate91(
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
  validate91.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  type: "string",
};
function validate93(
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
  validate93.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  title: "A string value",
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  type: "string",
};
function validate95(
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
  validate95.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  title: "A string value",
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  type: "string",
};
function validate97(
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
  validate97.errors = vErrors;
  return errors === 0;
}
function validate54(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/base.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate55(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (
        !validate75(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate75.errors
            : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (
        !validate77(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate77.errors
            : vErrors.concat(validate77.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate79(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate81(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate81.errors
            : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.esmodules !== undefined) {
      if (
        !validate83(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
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
    if (data.scripts !== undefined) {
      if (
        !validate85(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate85.errors
            : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.styles !== undefined) {
      if (
        !validate87(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate87.errors
            : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.languages !== undefined) {
      if (
        !validate89(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate89.errors
            : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (
        !validate91(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate91.errors
            : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
    if (data.download !== undefined) {
      if (
        !validate93(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate93.errors
            : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
    if (data.bugs !== undefined) {
      if (
        !validate95(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate95.errors
            : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.changelog !== undefined) {
      if (
        !validate97(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate97.errors
            : vErrors.concat(validate97.errors);
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  $id: "#/definitions/manifest",
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/module.json"],
  type: "string",
};
function validate101(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/manifest" */ let vErrors = null;
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
  validate101.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  title: "A string value",
  default: "",
  examples: ["dnd5e"],
  type: "string",
};
function validate103(
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
  validate103.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["dnd5e"],
    type: "string",
  },
  type: "array",
};
function validate105(
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
  validate105.errors = vErrors;
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
        !validate101(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate101.errors
            : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      let data1 = data.system;
      const _errs3 = errors;
      let valid2 = false;
      let passing0 = null;
      const _errs4 = errors;
      if (
        !validate103(data1, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate103.errors
            : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs4 === errors;
      if (_valid0) {
        valid2 = true;
        passing0 = 0;
      }
      const _errs5 = errors;
      if (
        !validate105(data1, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate105.errors
            : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs5 === errors;
      if (_valid0 && valid2) {
        valid2 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid2 = true;
          passing0 = 1;
        }
      }
      if (!valid2) {
        const err0 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath: "#/properties/system/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        errors = _errs3;
        if (vErrors !== null) {
          if (_errs3) {
            vErrors.length = _errs3;
          } else {
            vErrors = null;
          }
        }
      }
    }
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
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
  validate52.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate108;
const schema47 = {
  $id: "validateModulePlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  allOf: [{ $ref: "../../shared/properties/loose/module+.json" }],
};
const schema48 = {
  $id: "shared/properties/loose/module+.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (loose)",
  allOf: [{ $ref: "module.json" }],
  properties: {},
};
function validate109(
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
  validate109.errors = vErrors;
  return errors === 0;
}
function validate108(
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
    !validate109(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate109.errors
        : vErrors.concat(validate109.errors);
    errors = vErrors.length;
  }
  validate108.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate112;
const schema49 = {
  $id: "validateSystem",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  allOf: [{ $ref: "../../shared/properties/loose/system.json" }],
};
const schema50 = {
  $id: "shared/properties/loose/system.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (loose)",
  allOf: [{ $ref: "base.json" }, { $ref: "../common/system.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/loose/system.json#/definitions/manifest",
    },
  },
};
const schema51 = {
  $id: "shared/properties/common/system.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for system.json",
  properties: {
    templateVersion: {
      $ref: "../../definitions/common/system.json#/definitions/templateVersion",
    },
    initiative: {
      $ref: "../../definitions/common/system.json#/definitions/initiative",
    },
    gridDistance: {
      $ref: "../../definitions/common/system.json#/definitions/gridDistance",
    },
    gridUnits: {
      $ref: "../../definitions/common/system.json#/definitions/gridUnits",
    },
    primaryTokenAttribute: {
      $ref:
        "../../definitions/common/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref:
        "../../definitions/common/system.json#/definitions/secondaryTokenAttribute",
    },
  },
};
const schema53 = {
  title: "An integer value",
  default: 0,
  examples: [2],
  $id: "#/definitions/templateVersion",
  type: "integer",
};
function validate117(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/templateVersion" */ let vErrors = null;
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
  validate117.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  title: "A string value",
  default: "",
  examples: ["1d20"],
  $id: "#/definitions/initiative",
  type: "string",
};
function validate119(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/initiative" */ let vErrors = null;
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
  validate119.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  title: "An integer value",
  default: 0,
  examples: [5],
  $id: "#/definitions/gridDistance",
  type: "integer",
};
function validate121(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/gridDistance" */ let vErrors = null;
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
  validate121.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  title: "A string value",
  default: "",
  examples: ["ft, m"],
  $id: "#/definitions/gridUnits",
  type: "string",
};
function validate123(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/gridUnits" */ let vErrors = null;
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
  validate123.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.health"],
  $id: "#/definitions/primaryTokenAttribute",
  type: ["null", "string"],
};
function validate125(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/primaryTokenAttribute" */ let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema57.type },
      message: "should be null,string",
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate125.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.power"],
  $id: "#/definitions/secondaryTokenAttribute",
  type: ["null", "string"],
};
function validate127(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/secondaryTokenAttribute" */ let vErrors = null;
  let errors = 0;
  if (data !== null && typeof data !== "string") {
    const err0 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: schema58.type },
      message: "should be null,string",
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
function validate115(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/common/system.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.templateVersion !== undefined) {
      if (
        !validate117(data.templateVersion, {
          dataPath: dataPath + "/templateVersion",
          parentData: data,
          parentDataProperty: "templateVersion",
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
    if (data.initiative !== undefined) {
      if (
        !validate119(data.initiative, {
          dataPath: dataPath + "/initiative",
          parentData: data,
          parentDataProperty: "initiative",
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
    if (data.gridDistance !== undefined) {
      if (
        !validate121(data.gridDistance, {
          dataPath: dataPath + "/gridDistance",
          parentData: data,
          parentDataProperty: "gridDistance",
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
    if (data.gridUnits !== undefined) {
      if (
        !validate123(data.gridUnits, {
          dataPath: dataPath + "/gridUnits",
          parentData: data,
          parentDataProperty: "gridUnits",
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
    if (data.primaryTokenAttribute !== undefined) {
      if (
        !validate125(data.primaryTokenAttribute, {
          dataPath: dataPath + "/primaryTokenAttribute",
          parentData: data,
          parentDataProperty: "primaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate125.errors
            : vErrors.concat(validate125.errors);
        errors = vErrors.length;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      if (
        !validate127(data.secondaryTokenAttribute, {
          dataPath: dataPath + "/secondaryTokenAttribute",
          parentData: data,
          parentDataProperty: "secondaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate127.errors
            : vErrors.concat(validate127.errors);
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
  validate115.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  $id: "#/definitions/manifest",
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/system.json"],
  type: "string",
};
function validate131(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/manifest" */ let vErrors = null;
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
  validate131.errors = vErrors;
  return errors === 0;
}
function validate113(
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
  if (
    !validate115(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate115.errors
        : vErrors.concat(validate115.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (
        !validate131(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate131.errors
            : vErrors.concat(validate131.errors);
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
  validate113.errors = vErrors;
  return errors === 0;
}
function validate112(
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
    !validate113(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate113.errors
        : vErrors.concat(validate113.errors);
    errors = vErrors.length;
  }
  validate112.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate134;
const schema61 = {
  $id: "validateSystemPlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [{ $ref: "../../shared/properties/loose/system+.json" }],
};
const schema62 = {
  $id: "shared/properties/loose/system+.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (loose)",
  allOf: [{ $ref: "system.json" }],
  properties: {},
};
function validate135(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/loose/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate113(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate113.errors
        : vErrors.concat(validate113.errors);
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
  validate135.errors = vErrors;
  return errors === 0;
}
function validate134(
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
    !validate135(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate135.errors
        : vErrors.concat(validate135.errors);
    errors = vErrors.length;
  }
  validate134.errors = vErrors;
  return errors === 0;
}
exports.validateModuleStrict = validate138;
const schema63 = {
  $id: "validateModuleStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  allOf: [{ $ref: "../../shared/properties/strict/module.json" }],
};
const schema64 = {
  $id: "shared/properties/strict/module.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json (strict)",
  allOf: [{ $ref: "base.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/strict/module.json#/definitions/manifest",
    },
    system: {
      oneOf: [
        { $ref: "../../definitions/strict/module.json#/definitions/system" },
        { $ref: "../../definitions/strict/module.json#/definitions/systems" },
      ],
    },
  },
};
const schema65 = {
  $id: "shared/properties/strict/base.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base between module & system.json",
  definitions: {},
  allOf: [{ $ref: "../common/base.json" }],
  properties: {
    name: { $ref: "../../definitions/strict/base.json#/definitions/name" },
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
    esmodules: {
      $ref: "../../definitions/strict/base.json#/definitions/esmodules",
    },
    scripts: {
      $ref: "../../definitions/strict/base.json#/definitions/scripts",
    },
    styles: { $ref: "../../definitions/strict/base.json#/definitions/styles" },
    languages: {
      $ref: "../../definitions/strict/base.json#/definitions/languages",
    },
    url: { $ref: "../../definitions/strict/base.json#/definitions/url" },
    download: {
      $ref: "../../definitions/strict/base.json#/definitions/download",
    },
    bugs: { $ref: "../../definitions/strict/base.json#/definitions/bugs" },
    changelog: {
      $ref: "../../definitions/strict/base.json#/definitions/changelog",
    },
  },
};
const schema67 = {
  title: "A string value",
  default: "",
  examples: ["a-module"],
  type: "string",
  pattern: "^([a-z0-9]+-?)*[a-z0-9]+$",
  errorMessage: {
    pattern:
      "'name' should be a string that is lowercase alpha-numeric with only separating hyphens",
  },
};
const pattern0 = new RegExp("^([a-z0-9]+-?)*[a-z0-9]+$", "u");
function validate143(
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
              : schema67.errorMessage[key0],
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
  validate143.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern: "'version' should be a string that uses semantic versioning",
  },
};
const pattern1 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
function validate145(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
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
              : schema68.errorMessage[key0],
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
  validate145.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  title: "A string value",
  default: "",
  examples: ["0.7.5"],
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern:
      "'minimumCoreVersion' should be a string that uses semantic versioning",
  },
};
function validate147(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
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
  validate147.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  type: "string",
  pattern:
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  errorMessage: {
    pattern:
      "'compatibleCoreVersion' should be a string that uses semantic versioning",
  },
};
function validate149(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
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
              : schema70.errorMessage[key0],
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
  validate149.errors = vErrors;
  return errors === 0;
}
const schema71 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["index.js"],
    type: "string",
    pattern: "^(.+).js$",
  },
  type: "array",
};
const pattern4 = new RegExp("^(.+).js$", "u");
function validate151(
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
  validate151.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["ascript.js"],
    type: "string",
    pattern: "^(.+).js$",
  },
  type: "array",
};
function validate153(
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
  validate153.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["styles.css"],
    type: "string",
    pattern: "^(.+).css$",
  },
  type: "array",
};
const pattern6 = new RegExp("^(.+).css$", "u");
function validate155(
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
        if (!pattern6.test(data0)) {
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
  validate155.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  $id: "#/definitions/languages",
  type: "array",
  title: "An array of items",
  items: {
    $id: "#/definitions/languages/items",
    type: "object",
    title: "An object value",
    required: ["lang", "name", "path"],
    properties: {
      lang: {
        title: "A string value",
        default: "",
        examples: ["en"],
        $id: "#/definitions/languages/items/properties/lang",
        type: "string",
      },
      name: {
        title: "A string value",
        default: "",
        examples: ["English"],
        $id: "#/definitions/languages/items/properties/name",
        type: "string",
      },
      path: {
        $id: "#/definitions/languages/items/properties/path",
        title: "A string value",
        examples: ["lang/en.json"],
        type: "string",
        pattern: "^(.+).json$",
      },
    },
  },
};
const pattern7 = new RegExp("^(.+).json$", "u");
function validate157(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/languages" */ let vErrors = null;
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
            if (!pattern7.test(data3)) {
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
  validate157.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/"],
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern: "'url' should be a string and / or appears to be a malformed url",
  },
};
const pattern8 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  "u"
);
function validate159(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern8.test(data)) {
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
              : schema75.errorMessage[key0],
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
  validate159.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/module.zip"],
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$",
  errorMessage: {
    pattern:
      "'download' should be a string and / or appears to be a malformed url",
  },
};
const pattern9 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$",
  "u"
);
function validate161(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern9.test(data)) {
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
              : schema76.errorMessage[key0],
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
  validate161.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  title: "A string value",
  default: "",
  examples: ["https://github.com/some-user/a-module/issues"],
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern: "'bugs' should be a string and / or appears to be a malformed url",
  },
};
function validate163(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern8.test(data)) {
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
              : schema77.errorMessage[key0],
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
  validate163.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  title: "A string value",
  default: "",
  examples: ["https://github.com/some-user/a-module/releases"],
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$",
  errorMessage: {
    pattern:
      "'changelog' should be a string and / or appears to be a malformed url",
  },
};
function validate165(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern8.test(data)) {
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
              : schema78.errorMessage[key0],
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
  validate165.errors = vErrors;
  return errors === 0;
}
function validate140(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate55(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (
        !validate143(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate143.errors
            : vErrors.concat(validate143.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (
        !validate145(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate145.errors
            : vErrors.concat(validate145.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate147(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate147.errors
            : vErrors.concat(validate147.errors);
        errors = vErrors.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate149(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate149.errors
            : vErrors.concat(validate149.errors);
        errors = vErrors.length;
      }
    }
    if (data.esmodules !== undefined) {
      if (
        !validate151(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate151.errors
            : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
    if (data.scripts !== undefined) {
      if (
        !validate153(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate153.errors
            : vErrors.concat(validate153.errors);
        errors = vErrors.length;
      }
    }
    if (data.styles !== undefined) {
      if (
        !validate155(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate155.errors
            : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.languages !== undefined) {
      if (
        !validate157(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate157.errors
            : vErrors.concat(validate157.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (
        !validate159(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate159.errors
            : vErrors.concat(validate159.errors);
        errors = vErrors.length;
      }
    }
    if (data.download !== undefined) {
      if (
        !validate161(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate161.errors
            : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
    if (data.bugs !== undefined) {
      if (
        !validate163(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate163.errors
            : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.changelog !== undefined) {
      if (
        !validate165(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate165.errors
            : vErrors.concat(validate165.errors);
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
  validate140.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  $id: "#/definitions/manifest",
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/module.json"],
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
function validate169(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/manifest" */ let vErrors = null;
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
  validate169.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  title: "A string value",
  default: "",
  examples: ["dnd5e"],
  type: "string",
};
function validate171(
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
  validate171.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  title: "An array of items",
  items: {
    title: "A string value",
    default: "",
    examples: ["dnd5e"],
    type: "string",
  },
  type: "array",
};
function validate173(
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
  validate173.errors = vErrors;
  return errors === 0;
}
function validate139(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate140(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate140.errors
        : vErrors.concat(validate140.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (
        !validate169(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate169.errors
            : vErrors.concat(validate169.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      let data1 = data.system;
      const _errs3 = errors;
      let valid2 = false;
      let passing0 = null;
      const _errs4 = errors;
      if (
        !validate171(data1, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate171.errors
            : vErrors.concat(validate171.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs4 === errors;
      if (_valid0) {
        valid2 = true;
        passing0 = 0;
      }
      const _errs5 = errors;
      if (
        !validate173(data1, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate173.errors
            : vErrors.concat(validate173.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs5 === errors;
      if (_valid0 && valid2) {
        valid2 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid2 = true;
          passing0 = 1;
        }
      }
      if (!valid2) {
        const err0 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath: "#/properties/system/oneOf",
          params: { passingSchemas: passing0 },
          message: "should match exactly one schema in oneOf",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        errors = _errs3;
        if (vErrors !== null) {
          if (_errs3) {
            vErrors.length = _errs3;
          } else {
            vErrors = null;
          }
        }
      }
    }
  } else {
    const err1 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: { type: "object" },
      message: "should be object",
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate139.errors = vErrors;
  return errors === 0;
}
function validate138(
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
    !validate139(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate139.errors
        : vErrors.concat(validate139.errors);
    errors = vErrors.length;
  }
  validate138.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate176;
const schema83 = {
  $id: "validateModulePlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  allOf: [{ $ref: "../../shared/properties/strict/module+.json" }],
};
const schema84 = {
  $id: "shared/properties/strict/module+.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json & manifest+ (strict)",
  allOf: [{ $ref: "module.json" }],
  properties: {},
};
function validate177(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/module+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate139(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate139.errors
        : vErrors.concat(validate139.errors);
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
  validate177.errors = vErrors;
  return errors === 0;
}
function validate176(
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
    !validate177(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate177.errors
        : vErrors.concat(validate177.errors);
    errors = vErrors.length;
  }
  validate176.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate180;
const schema85 = {
  $id: "validateSystemStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  allOf: [{ $ref: "../../shared/properties/strict/system.json" }],
};
const schema86 = {
  $id: "shared/properties/strict/system.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json (strict)",
  allOf: [{ $ref: "base.json" }, { $ref: "../common/system.json" }],
  properties: {
    manifest: {
      $ref: "../../definitions/strict/system.json#/definitions/manifest",
    },
  },
};
const schema88 = {
  $id: "#/definitions/manifest",
  title: "A string value",
  default: "",
  examples: ["https://someaddress.com/system.json"],
  type: "string",
  pattern:
    "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$",
  errorMessage: {
    pattern:
      "'manifest' should be a string and / or appears to be a malformed url",
  },
};
const pattern13 = new RegExp(
  "^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$",
  "u"
);
function validate185(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/manifest" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern13.test(data)) {
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
              : schema88.errorMessage[key0],
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
  validate185.errors = vErrors;
  return errors === 0;
}
function validate181(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate140(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate140.errors
        : vErrors.concat(validate140.errors);
    errors = vErrors.length;
  }
  if (
    !validate115(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate115.errors
        : vErrors.concat(validate115.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.manifest !== undefined) {
      if (
        !validate185(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate185.errors
            : vErrors.concat(validate185.errors);
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
  validate181.errors = vErrors;
  return errors === 0;
}
function validate180(
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
    !validate181(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate181.errors
        : vErrors.concat(validate181.errors);
    errors = vErrors.length;
  }
  validate180.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate188;
const schema89 = {
  $id: "validateSystemPlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+ and strict requirements",
  allOf: [{ $ref: "../../shared/properties/strict/system+.json" }],
};
const schema90 = {
  $id: "shared/properties/strict/system+.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json & manifest+ (strict)",
  allOf: [{ $ref: "system.json" }],
  properties: {},
};
function validate189(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/system+.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate181(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate181.errors
        : vErrors.concat(validate181.errors);
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
  validate189.errors = vErrors;
  return errors === 0;
}
function validate188(
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
    !validate189(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate189.errors
        : vErrors.concat(validate189.errors);
    errors = vErrors.length;
  }
  validate188.errors = vErrors;
  return errors === 0;
}
