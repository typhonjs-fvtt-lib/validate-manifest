"use strict";
exports.validateModule = validate52;
const schema17 = {
  $id: "validateModule",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json",
  allOf: [{ $ref: "shared/properties/module.json" }],
  properties: {
    packs: { $ref: "shared/definitions/base.json#/definitions/packs" },
  },
};
const schema18 = {
  $id: "shared/properties/module.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for module.json",
  allOf: [{ $ref: "base.json" }],
  properties: {
    system: {
      oneOf: [
        { $ref: "../definitions/base.json#/definitions/system" },
        { $ref: "../definitions/base.json#/definitions/systems" },
      ],
    },
  },
};
const schema19 = {
  $id: "shared/properties/base.json",
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
    name: { $ref: "../definitions/base.json#/definitions/name" },
    title: { $ref: "../definitions/base.json#/definitions/title" },
    description: { $ref: "../definitions/base.json#/definitions/description" },
    author: { $ref: "../definitions/base.json#/definitions/author" },
    version: { $ref: "../definitions/base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "../definitions/base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "../definitions/base.json#/definitions/compatibleCoreVersion",
    },
    scripts: { $ref: "../definitions/base.json#/definitions/scripts" },
    esmodules: { $ref: "../definitions/base.json#/definitions/esmodules" },
    styles: { $ref: "../definitions/base.json#/definitions/styles" },
    dependencies: {
      $ref: "../definitions/base.json#/definitions/dependencies",
    },
    languages: { $ref: "../definitions/base.json#/definitions/languages" },
    authors: { $ref: "../definitions/base.json#/definitions/authors" },
    socket: { $ref: "../definitions/base.json#/definitions/socket" },
    url: { $ref: "../definitions/base.json#/definitions/url" },
    manifest: { $ref: "../definitions/base.json#/definitions/manifest" },
    download: { $ref: "../definitions/base.json#/definitions/download" },
    license: { $ref: "../definitions/base.json#/definitions/license" },
    readme: { $ref: "../definitions/base.json#/definitions/readme" },
    bugs: { $ref: "../definitions/base.json#/definitions/bugs" },
    changelog: { $ref: "../definitions/base.json#/definitions/changelog" },
  },
};
const schema21 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["a-module"],
  $id: "#/definitions/name",
  type: "string",
};
const pattern0 = new RegExp("^(.*)$", "u");
function validate56(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/name" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate56.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["A Module"],
  $id: "#/definitions/title",
  type: "string",
};
function validate58(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/title" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate58.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["Some description"],
  $id: "#/definitions/description",
  type: "string",
};
function validate60(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/description" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate60.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["typhonrt"],
  $id: "#/definitions/author",
  type: "string",
};
function validate62(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/author" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate62.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/version",
  oneOf: [{ type: "string", pattern: "^(.*)$" }, { type: "number" }],
};
function validate64(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/oneOf/0/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (!(typeof data == "number" && isFinite(data))) {
    const err2 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/oneOf/1/type",
      params: { type: "number" },
      message: "should be number",
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
  validate64.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["0.7.5"],
  $id: "#/definitions/minimumCoreVersion",
  type: "string",
};
function validate66(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/minimumCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate66.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1.0.0"],
  $id: "#/definitions/compatibleCoreVersion",
  type: "string",
};
function validate68(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/compatibleCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate68.errors = vErrors;
  return errors === 0;
}
const schema28 = {
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
function validate70(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/scripts" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate70.errors = vErrors;
  return errors === 0;
}
const schema29 = {
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
function validate72(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/esmodules" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate72.errors = vErrors;
  return errors === 0;
}
const schema30 = {
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
function validate74(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/styles" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema31 = {
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
function validate76(
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
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err1 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
          } else {
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
        if (data0.manifest !== undefined) {
          let data2 = data0.manifest;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err3 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/manifest",
                schemaPath: "#/items/properties/manifest/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/manifest",
              schemaPath: "#/items/properties/manifest/type",
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
        if (data0.type !== undefined) {
          let data3 = data0.type;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err5 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/type",
                schemaPath: "#/items/properties/type/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/type",
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema32 = {
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
function validate78(
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
          let data1 = data0.lang;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err3 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/lang",
                schemaPath: "#/items/properties/lang/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/lang",
              schemaPath: "#/items/properties/lang/type",
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
        if (data0.name !== undefined) {
          let data2 = data0.name;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err5 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.path !== undefined) {
          let data3 = data0.path;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err7 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
      } else {
        const err9 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
          params: { type: "object" },
          message: "should be object",
        };
        if (vErrors === null) {
          vErrors = [err9];
        } else {
          vErrors.push(err9);
        }
        errors++;
      }
    }
  } else {
    const err10 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema33 = {
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
function validate80(
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
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err1 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
          } else {
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
        if (data0.email !== undefined) {
          let data2 = data0.email;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err3 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/email",
                schemaPath: "#/items/properties/email/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/email",
              schemaPath: "#/items/properties/email/type",
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
        if (data0.url !== undefined) {
          let data3 = data0.url;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err5 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/url",
                schemaPath: "#/items/properties/url/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/url",
              schemaPath: "#/items/properties/url/type",
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  title: "A boolean value",
  default: false,
  examples: [true],
  $id: "#/definitions/socket",
  type: "boolean",
};
function validate82(
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
  validate82.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/"],
  $id: "#/definitions/url",
  type: "string",
};
function validate84(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/url" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate84.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.json"],
  $id: "#/definitions/manifest",
  type: "string",
};
function validate86(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/manifest" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate86.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.zip"],
  $id: "#/definitions/download",
  type: "string",
};
function validate88(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/download" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate88.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["LICENSE"],
  $id: "#/definitions/license",
  type: "string",
};
function validate90(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/license" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate90.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["README.md"],
  $id: "#/definitions/readme",
  type: "string",
};
function validate92(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/readme" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate92.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/issues"],
  $id: "#/definitions/bugs",
  type: "string",
};
function validate94(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/bugs" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate94.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/releases"],
  $id: "#/definitions/changelog",
  type: "string",
};
function validate96(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/changelog" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate96.errors = vErrors;
  return errors === 0;
}
function validate54(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/base.json" */ let vErrors = null;
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
      if (
        !validate56(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
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
    if (data.title !== undefined) {
      if (
        !validate58(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
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
    if (data.description !== undefined) {
      if (
        !validate60(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
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
    if (data.author !== undefined) {
      if (
        !validate62(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate64(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate66(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate68(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
    if (data.scripts !== undefined) {
      if (
        !validate70(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
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
    if (data.styles !== undefined) {
      if (
        !validate74(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
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
    if (data.dependencies !== undefined) {
      if (
        !validate76(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
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
    if (data.languages !== undefined) {
      if (
        !validate78(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
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
    if (data.authors !== undefined) {
      if (
        !validate80(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
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
    if (data.socket !== undefined) {
      if (
        !validate82(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
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
    if (data.url !== undefined) {
      if (
        !validate84(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
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
    if (data.manifest !== undefined) {
      if (
        !validate86(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
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
    if (data.download !== undefined) {
      if (
        !validate88(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
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
    if (data.license !== undefined) {
      if (
        !validate90(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
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
    if (data.readme !== undefined) {
      if (
        !validate92(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
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
    if (data.bugs !== undefined) {
      if (
        !validate94(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
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
    if (data.changelog !== undefined) {
      if (
        !validate96(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate96.errors
            : vErrors.concat(validate96.errors);
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
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["dnd5e"],
  $id: "#/definitions/system",
  type: "string",
};
function validate99(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/system" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate99.errors = vErrors;
  return errors === 0;
}
const schema43 = {
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
function validate101(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/systems" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate101.errors = vErrors;
  return errors === 0;
}
function validate53(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/module.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate54(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.system !== undefined) {
      let data0 = data.system;
      const _errs2 = errors;
      let valid2 = false;
      let passing0 = null;
      const _errs3 = errors;
      if (
        !validate99(data0, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate99.errors
            : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs3 === errors;
      if (_valid0) {
        valid2 = true;
        passing0 = 0;
      }
      const _errs4 = errors;
      if (
        !validate101(data0, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate101.errors
            : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs4 === errors;
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
        errors = _errs2;
        if (vErrors !== null) {
          if (_errs2) {
            vErrors.length = _errs2;
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
const schema44 = {
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
function validate105(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/system" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate105.errors = vErrors;
  return errors === 0;
}
function validate107(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/systems" */ let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      let data0 = data[i0];
      if (typeof data0 === "string") {
        if (!pattern0.test(data0)) {
          const err0 = {
            keyword: "pattern",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/pattern",
            params: { pattern: "^(.*)$" },
            message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate107.errors = vErrors;
  return errors === 0;
}
function validate104(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate104.errors = vErrors;
  return errors === 0;
}
function validate52(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModule" */ let vErrors = null;
  let errors = 0;
  if (
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate104(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate104.errors
            : vErrors.concat(validate104.errors);
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
  validate52.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate110;
const schema47 = {
  $id: "validateModulePlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  allOf: [{ $ref: "shared/properties/module.json" }],
  properties: {
    packs: { $ref: "shared/definitions/base.json#/definitions/packs" },
  },
};
function validate112(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate112.errors = vErrors;
  return errors === 0;
}
function validate110(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
  let errors = 0;
  if (
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate112(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate112.errors
            : vErrors.concat(validate112.errors);
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
  validate110.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate116;
const schema49 = {
  $id: "validateSystem",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json",
  allOf: [{ $ref: "shared/properties/system.json" }],
  properties: {},
};
const schema50 = {
  $id: "shared/properties/system.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT common properties for system.json",
  allOf: [{ $ref: "base.json" }],
  properties: {
    templateVersion: {
      $ref: "../definitions/system.json#/definitions/templateVersion",
    },
    initiative: { $ref: "../definitions/system.json#/definitions/initiative" },
    gridDistance: {
      $ref: "../definitions/system.json#/definitions/gridDistance",
    },
    gridUnits: { $ref: "../definitions/system.json#/definitions/gridUnits" },
    primaryTokenAttribute: {
      $ref: "../definitions/system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref: "../definitions/system.json#/definitions/secondaryTokenAttribute",
    },
  },
};
const schema52 = {
  title: "An integer value",
  default: 0,
  examples: [2],
  $id: "#/definitions/templateVersion",
  type: "integer",
};
function validate120(
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
  validate120.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1d20"],
  $id: "#/definitions/initiative",
  type: "string",
};
function validate122(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/initiative" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate122.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  title: "An integer value",
  default: 0,
  examples: [5],
  $id: "#/definitions/gridDistance",
  type: "integer",
};
function validate124(
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
  validate124.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["ft, m"],
  $id: "#/definitions/gridUnits",
  type: "string",
};
function validate126(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/gridUnits" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
  validate126.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.health"],
  $id: "#/definitions/primaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
function validate128(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/primaryTokenAttribute" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/anyOf/0/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
      schemaPath: "#/anyOf/0/type",
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
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (data !== null) {
      const err2 = {
        keyword: "type",
        dataPath,
        schemaPath: "#/anyOf/1/type",
        params: { type: "null" },
        message: "should be null",
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err3 = {
      keyword: "anyOf",
      dataPath,
      schemaPath: "#/anyOf",
      params: {},
      message: "should match some schema in anyOf",
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
  validate128.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.power"],
  $id: "#/definitions/secondaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
function validate130(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/secondaryTokenAttribute" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err0 = {
        keyword: "pattern",
        dataPath,
        schemaPath: "#/anyOf/0/pattern",
        params: { pattern: "^(.*)$" },
        message: 'should match pattern "' + "^(.*)$" + '"',
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
      schemaPath: "#/anyOf/0/type",
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
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (data !== null) {
      const err2 = {
        keyword: "type",
        dataPath,
        schemaPath: "#/anyOf/1/type",
        params: { type: "null" },
        message: "should be null",
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err3 = {
      keyword: "anyOf",
      dataPath,
      schemaPath: "#/anyOf",
      params: {},
      message: "should match some schema in anyOf",
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
  validate130.errors = vErrors;
  return errors === 0;
}
function validate117(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/system.json" */ let vErrors = null;
  let errors = 0;
  if (
    !validate54(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.templateVersion !== undefined) {
      if (
        !validate120(data.templateVersion, {
          dataPath: dataPath + "/templateVersion",
          parentData: data,
          parentDataProperty: "templateVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate120.errors
            : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.initiative !== undefined) {
      if (
        !validate122(data.initiative, {
          dataPath: dataPath + "/initiative",
          parentData: data,
          parentDataProperty: "initiative",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate122.errors
            : vErrors.concat(validate122.errors);
        errors = vErrors.length;
      }
    }
    if (data.gridDistance !== undefined) {
      if (
        !validate124(data.gridDistance, {
          dataPath: dataPath + "/gridDistance",
          parentData: data,
          parentDataProperty: "gridDistance",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate124.errors
            : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.gridUnits !== undefined) {
      if (
        !validate126(data.gridUnits, {
          dataPath: dataPath + "/gridUnits",
          parentData: data,
          parentDataProperty: "gridUnits",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate126.errors
            : vErrors.concat(validate126.errors);
        errors = vErrors.length;
      }
    }
    if (data.primaryTokenAttribute !== undefined) {
      if (
        !validate128(data.primaryTokenAttribute, {
          dataPath: dataPath + "/primaryTokenAttribute",
          parentData: data,
          parentDataProperty: "primaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate128.errors
            : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
    if (data.secondaryTokenAttribute !== undefined) {
      if (
        !validate130(data.secondaryTokenAttribute, {
          dataPath: dataPath + "/secondaryTokenAttribute",
          parentData: data,
          parentDataProperty: "secondaryTokenAttribute",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate130.errors
            : vErrors.concat(validate130.errors);
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
  validate117.errors = vErrors;
  return errors === 0;
}
function validate116(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystem" */ let vErrors = null;
  let errors = 0;
  if (
    !validate117(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate117.errors
        : vErrors.concat(validate117.errors);
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
  validate116.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate133;
const schema58 = {
  $id: "validateSystemPlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [{ $ref: "shared/properties/system.json" }],
  properties: {},
};
function validate133(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
  let errors = 0;
  if (
    !validate117(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate117.errors
        : vErrors.concat(validate117.errors);
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
  validate133.errors = vErrors;
  return errors === 0;
}
exports.validateModuleStrict = validate135;
const schema59 = {
  $id: "validateModuleStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  allOf: [
    { $ref: "../shared/properties/module.json" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {
    packs: { $ref: "../shared/definitions/base.json#/definitions/packs" },
  },
};
const schema60 = {
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
const schema62 = {
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
const pattern44 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
function validate139(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern44.test(data)) {
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
    const emErrs0 = [];
    for (const err2 of vErrors) {
      if (
        err2.keyword !== "errorMessage" &&
        !err2.emUsed &&
        (err2.dataPath === dataPath ||
          (err2.dataPath.indexOf(dataPath) === 0 &&
            err2.dataPath[dataPath.length] === "/")) &&
        err2.schemaPath.indexOf("#") === 0 &&
        err2.schemaPath["#".length] === "/"
      ) {
        emErrs0.push(err2);
        err2.emUsed = true;
      }
    }
    if (emErrs0.length) {
      const err3 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
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
  validate139.errors = vErrors;
  return errors === 0;
}
const schema63 = {
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
function validate141(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/minimumCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern44.test(data)) {
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
    const emErrs0 = [];
    for (const err2 of vErrors) {
      if (
        err2.keyword !== "errorMessage" &&
        !err2.emUsed &&
        (err2.dataPath === dataPath ||
          (err2.dataPath.indexOf(dataPath) === 0 &&
            err2.dataPath[dataPath.length] === "/")) &&
        err2.schemaPath.indexOf("#") === 0 &&
        err2.schemaPath["#".length] === "/"
      ) {
        emErrs0.push(err2);
        err2.emUsed = true;
      }
    }
    if (emErrs0.length) {
      const err3 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
        params: { errors: emErrs0 },
        message:
          '"minimumCoreVersion" should be a string that uses semantic versioning; current value: ' +
          JSON.stringify(rootData && rootData.minimumCoreVersion),
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
  validate141.errors = vErrors;
  return errors === 0;
}
const schema64 = {
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
function validate143(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/compatibleCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern44.test(data)) {
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
    const emErrs0 = [];
    for (const err2 of vErrors) {
      if (
        err2.keyword !== "errorMessage" &&
        !err2.emUsed &&
        (err2.dataPath === dataPath ||
          (err2.dataPath.indexOf(dataPath) === 0 &&
            err2.dataPath[dataPath.length] === "/")) &&
        err2.schemaPath.indexOf("#") === 0 &&
        err2.schemaPath["#".length] === "/"
      ) {
        emErrs0.push(err2);
        err2.emUsed = true;
      }
    }
    if (emErrs0.length) {
      const err3 = {
        keyword: "errorMessage",
        dataPath,
        schemaPath: "#/errorMessage",
        params: { errors: emErrs0 },
        message:
          '"compatibleCoreVersion" should be a string that uses semantic versioning; current value: ' +
          JSON.stringify(rootData && rootData.compatibleCoreVersion),
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
  validate143.errors = vErrors;
  return errors === 0;
}
function validate137(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/properties/strict/base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.version !== undefined) {
      if (
        !validate139(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate139.errors
            : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate141(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate141.errors
            : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate143(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
  validate137.errors = vErrors;
  return errors === 0;
}
function validate146(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate146.errors = vErrors;
  return errors === 0;
}
function validate135(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModuleStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
  }
  if (
    !validate137(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate137.errors
        : vErrors.concat(validate137.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate146(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
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
  validate135.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate150;
const schema66 = {
  $id: "validateModulePlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  allOf: [
    { $ref: "../shared/properties/module.json" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {
    packs: { $ref: "../shared/definitions/base.json#/definitions/packs" },
  },
};
function validate153(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate153.errors = vErrors;
  return errors === 0;
}
function validate150(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate53(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
  }
  if (
    !validate137(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate137.errors
        : vErrors.concat(validate137.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate153(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
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
  validate150.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate157;
const schema68 = {
  $id: "validateSystemStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  allOf: [
    { $ref: "../shared/properties/system.json" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {
    packs: { $ref: "../shared/definitions/base.json#/definitions/packs" },
  },
};
function validate160(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate160.errors = vErrors;
  return errors === 0;
}
function validate157(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate117(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate117.errors
        : vErrors.concat(validate117.errors);
    errors = vErrors.length;
  }
  if (
    !validate137(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate137.errors
        : vErrors.concat(validate137.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate160(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
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
  validate157.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate164;
const schema70 = {
  $id: "validateSystemPlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+ and strict requirements",
  allOf: [
    { $ref: "../shared/properties/system.json" },
    { $ref: "../shared/properties/strict/base.json" },
  ],
  definitions: {},
  properties: {
    packs: { $ref: "../shared/definitions/base.json#/definitions/packs" },
  },
};
function validate167(
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
          if (
            !validate105(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
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
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate107(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate107.errors
                : vErrors.concat(validate107.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs11 === errors;
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
            const err15 = {
              keyword: "oneOf",
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/oneOf",
              params: { passingSchemas: passing1 },
              message: "should match exactly one schema in oneOf",
            };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
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
          let data5 = data0.path;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err16 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
              };
              if (vErrors === null) {
                vErrors = [err16];
              } else {
                vErrors.push(err16);
              }
              errors++;
            }
          } else {
            const err17 = {
              keyword: "type",
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data6 = data0.entity;
          if (typeof data6 === "string") {
            if (!pattern0.test(data6)) {
              const err18 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
      } else {
        const err20 = {
          keyword: "type",
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate167.errors = vErrors;
  return errors === 0;
}
function validate164(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate117(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate117.errors
        : vErrors.concat(validate117.errors);
    errors = vErrors.length;
  }
  if (
    !validate137(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate137.errors
        : vErrors.concat(validate137.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.packs !== undefined) {
      if (
        !validate167(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate167.errors
            : vErrors.concat(validate167.errors);
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
  validate164.errors = vErrors;
  return errors === 0;
}
