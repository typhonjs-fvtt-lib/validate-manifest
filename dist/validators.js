"use strict";
exports.validateModule = validate52;
const schema17 = {
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
    name: { $ref: "shared/shared-base.json#/definitions/name" },
    title: { $ref: "shared/shared-base.json#/definitions/title" },
    description: { $ref: "shared/shared-base.json#/definitions/description" },
    author: { $ref: "shared/shared-base.json#/definitions/author" },
    version: { $ref: "shared/shared-base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "shared/shared-base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "shared/shared-base.json#/definitions/compatibleCoreVersion",
    },
    scripts: { $ref: "shared/shared-base.json#/definitions/scripts" },
    esmodules: { $ref: "shared/shared-base.json#/definitions/esmodules" },
    styles: { $ref: "shared/shared-base.json#/definitions/styles" },
    packs: { $ref: "shared/shared-base.json#/definitions/packs" },
    dependencies: { $ref: "shared/shared-base.json#/definitions/dependencies" },
    languages: { $ref: "shared/shared-base.json#/definitions/languages" },
    system: {
      oneOf: [
        { $ref: "shared/shared-base.json#/definitions/system" },
        { $ref: "shared/shared-base.json#/definitions/systems" },
      ],
    },
    authors: { $ref: "shared/shared-base.json#/definitions/authors" },
    socket: { $ref: "shared/shared-base.json#/definitions/socket" },
    url: { $ref: "shared/shared-base.json#/definitions/url" },
    manifest: { $ref: "shared/shared-base.json#/definitions/manifest" },
    download: { $ref: "shared/shared-base.json#/definitions/download" },
    license: { $ref: "shared/shared-base.json#/definitions/license" },
    readme: { $ref: "shared/shared-base.json#/definitions/readme" },
    bugs: { $ref: "shared/shared-base.json#/definitions/bugs" },
    changelog: { $ref: "shared/shared-base.json#/definitions/changelog" },
  },
};
const schema19 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["a-module"],
  $id: "#/definitions/name",
  type: "string",
};
const pattern0 = new RegExp("^(.*)$", "u");
function validate54(
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["A Module"],
  $id: "#/definitions/title",
  type: "string",
};
function validate56(
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
  validate56.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["Some description"],
  $id: "#/definitions/description",
  type: "string",
};
function validate58(
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
  validate58.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["typhonrt"],
  $id: "#/definitions/author",
  type: "string",
};
function validate60(
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
  validate60.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  title: "A string value",
  default: "",
  examples: ["1.0.0"],
  $id: "#/definitions/version",
  oneOf: [{ type: "string", pattern: "^(.*)$" }, { type: "number" }],
};
function validate62(
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
  validate62.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["0.7.5"],
  $id: "#/definitions/minimumCoreVersion",
  type: "string",
};
function validate64(
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
  validate64.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1.0.0"],
  $id: "#/definitions/compatibleCoreVersion",
  type: "string",
};
function validate66(
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
  validate66.errors = vErrors;
  return errors === 0;
}
const schema26 = {
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
function validate68(
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
  validate68.errors = vErrors;
  return errors === 0;
}
const schema27 = {
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
function validate70(
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
  validate70.errors = vErrors;
  return errors === 0;
}
const schema28 = {
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
function validate72(
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
  validate72.errors = vErrors;
  return errors === 0;
}
const schema29 = {
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
const schema30 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["dnd5e"],
  $id: "#/definitions/system",
  type: "string",
};
function validate75(
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
  validate75.errors = vErrors;
  return errors === 0;
}
const schema31 = {
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
function validate77(
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
  validate77.errors = vErrors;
  return errors === 0;
}
function validate74(
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
            !validate75(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate75.errors
                : vErrors.concat(validate75.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate77(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate77.errors
                : vErrors.concat(validate77.errors);
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema32 = {
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
function validate80(
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema33 = {
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
function validate82(
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
  validate82.errors = vErrors;
  return errors === 0;
}
function validate84(
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
  validate84.errors = vErrors;
  return errors === 0;
}
function validate86(
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
  validate86.errors = vErrors;
  return errors === 0;
}
const schema36 = {
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
function validate88(
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
  validate88.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  title: "A boolean value",
  default: false,
  examples: [true],
  $id: "#/definitions/socket",
  type: "boolean",
};
function validate90(
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
  validate90.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/"],
  $id: "#/definitions/url",
  type: "string",
};
function validate92(
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
  validate92.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.json"],
  $id: "#/definitions/manifest",
  type: "string",
};
function validate94(
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
  validate94.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.zip"],
  $id: "#/definitions/download",
  type: "string",
};
function validate96(
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
  validate96.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["LICENSE"],
  $id: "#/definitions/license",
  type: "string",
};
function validate98(
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
  validate98.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["README.md"],
  $id: "#/definitions/readme",
  type: "string",
};
function validate100(
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
  validate100.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/issues"],
  $id: "#/definitions/bugs",
  type: "string",
};
function validate102(
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
  validate102.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/releases"],
  $id: "#/definitions/changelog",
  type: "string",
};
function validate104(
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
  validate104.errors = vErrors;
  return errors === 0;
}
function validate52(
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
      if (
        !validate54(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate54.errors
            : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate56(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
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
    if (data.description !== undefined) {
      if (
        !validate58(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
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
    if (data.author !== undefined) {
      if (
        !validate60(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate62(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate64(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate66(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
    if (data.scripts !== undefined) {
      if (
        !validate68(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
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
    if (data.esmodules !== undefined) {
      if (
        !validate70(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
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
    if (data.styles !== undefined) {
      if (
        !validate72(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
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
    if (data.packs !== undefined) {
      if (
        !validate74(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
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
        !validate80(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
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
    if (data.languages !== undefined) {
      if (
        !validate82(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
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
    if (data.system !== undefined) {
      let data13 = data.system;
      const _errs14 = errors;
      let valid1 = false;
      let passing0 = null;
      const _errs15 = errors;
      if (
        !validate84(data13, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate84.errors
            : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs15 === errors;
      if (_valid0) {
        valid1 = true;
        passing0 = 0;
      }
      const _errs16 = errors;
      if (
        !validate86(data13, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate86.errors
            : vErrors.concat(validate86.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs16 === errors;
      if (_valid0 && valid1) {
        valid1 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid1 = true;
          passing0 = 1;
        }
      }
      if (!valid1) {
        const err6 = {
          keyword: "oneOf",
          dataPath: dataPath + "/system",
          schemaPath: "#/properties/system/oneOf",
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
        errors = _errs14;
        if (vErrors !== null) {
          if (_errs14) {
            vErrors.length = _errs14;
          } else {
            vErrors = null;
          }
        }
      }
    }
    if (data.authors !== undefined) {
      if (
        !validate88(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
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
    if (data.socket !== undefined) {
      if (
        !validate90(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
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
    if (data.manifest !== undefined) {
      if (
        !validate94(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
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
    if (data.download !== undefined) {
      if (
        !validate96(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
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
    if (data.license !== undefined) {
      if (
        !validate98(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
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
    if (data.readme !== undefined) {
      if (
        !validate100(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
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
    if (data.bugs !== undefined) {
      if (
        !validate102(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate102.errors
            : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
    if (data.changelog !== undefined) {
      if (
        !validate104(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
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
    const err7 = {
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
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
  validate52.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate106;
const schema45 = {
  $id: "validateModulePlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
  allOf: [{ $ref: "validateModule" }],
  definitions: {},
  properties: {},
};
function validate106(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
  let errors = 0;
  if (
    !validate52(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
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
  validate106.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate108;
const schema46 = {
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
    name: { $ref: "shared/shared-base.json#/definitions/name" },
    title: { $ref: "shared/shared-base.json#/definitions/title" },
    description: { $ref: "shared/shared-base.json#/definitions/description" },
    author: { $ref: "shared/shared-base.json#/definitions/author" },
    version: { $ref: "shared/shared-base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "shared/shared-base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "shared/shared-base.json#/definitions/compatibleCoreVersion",
    },
    scripts: { $ref: "shared/shared-base.json#/definitions/scripts" },
    esmodules: { $ref: "shared/shared-base.json#/definitions/esmodules" },
    styles: { $ref: "shared/shared-base.json#/definitions/styles" },
    packs: { $ref: "shared/shared-base.json#/definitions/packs" },
    dependencies: { $ref: "shared/shared-base.json#/definitions/dependencies" },
    languages: { $ref: "shared/shared-base.json#/definitions/languages" },
    authors: { $ref: "shared/shared-base.json#/definitions/authors" },
    socket: { $ref: "shared/shared-base.json#/definitions/socket" },
    templateVersion: {
      $ref: "shared/shared-system.json#/definitions/templateVersion",
    },
    initiative: { $ref: "shared/shared-system.json#/definitions/initiative" },
    gridDistance: {
      $ref: "shared/shared-system.json#/definitions/gridDistance",
    },
    gridUnits: { $ref: "shared/shared-system.json#/definitions/gridUnits" },
    primaryTokenAttribute: {
      $ref: "shared/shared-system.json#/definitions/primaryTokenAttribute",
    },
    secondaryTokenAttribute: {
      $ref: "shared/shared-system.json#/definitions/secondaryTokenAttribute",
    },
    url: { $ref: "shared/shared-base.json#/definitions/url" },
    manifest: { $ref: "shared/shared-base.json#/definitions/manifest" },
    download: { $ref: "shared/shared-base.json#/definitions/download" },
    license: { $ref: "shared/shared-base.json#/definitions/license" },
    readme: { $ref: "shared/shared-base.json#/definitions/readme" },
    bugs: { $ref: "shared/shared-base.json#/definitions/bugs" },
    changelog: { $ref: "shared/shared-base.json#/definitions/changelog" },
  },
};
function validate109(
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
  validate109.errors = vErrors;
  return errors === 0;
}
function validate111(
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
  validate111.errors = vErrors;
  return errors === 0;
}
function validate113(
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
  validate113.errors = vErrors;
  return errors === 0;
}
function validate115(
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
  validate115.errors = vErrors;
  return errors === 0;
}
function validate117(
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
  validate117.errors = vErrors;
  return errors === 0;
}
function validate119(
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
  validate119.errors = vErrors;
  return errors === 0;
}
function validate121(
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
  validate121.errors = vErrors;
  return errors === 0;
}
function validate123(
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
  validate123.errors = vErrors;
  return errors === 0;
}
function validate125(
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
  validate125.errors = vErrors;
  return errors === 0;
}
function validate127(
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
  validate127.errors = vErrors;
  return errors === 0;
}
function validate129(
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
            !validate75(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate75.errors
                : vErrors.concat(validate75.errors);
            errors = vErrors.length;
          }
          var _valid1 = _errs10 === errors;
          if (_valid1) {
            valid3 = true;
            passing1 = 0;
          }
          const _errs11 = errors;
          if (
            !validate77(data4, {
              dataPath: dataPath + "/" + i0 + "/system",
              parentData: data0,
              parentDataProperty: "system",
              rootData,
            })
          ) {
            vErrors =
              vErrors === null
                ? validate77.errors
                : vErrors.concat(validate77.errors);
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
  validate129.errors = vErrors;
  return errors === 0;
}
function validate133(
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
  validate133.errors = vErrors;
  return errors === 0;
}
function validate135(
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
  validate135.errors = vErrors;
  return errors === 0;
}
function validate137(
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
  validate137.errors = vErrors;
  return errors === 0;
}
function validate139(
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
  validate139.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  title: "An integer value",
  default: 0,
  examples: [2],
  $id: "#/definitions/templateVersion",
  type: "integer",
};
function validate142(
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
  validate142.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1d20"],
  $id: "#/definitions/initiative",
  type: "string",
};
function validate144(
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
  validate144.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  title: "An integer value",
  default: 0,
  examples: [5],
  $id: "#/definitions/gridDistance",
  type: "integer",
};
function validate146(
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
  validate146.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["ft, m"],
  $id: "#/definitions/gridUnits",
  type: "string",
};
function validate148(
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
  validate148.errors = vErrors;
  return errors === 0;
}
const schema67 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.health"],
  $id: "#/definitions/primaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
function validate150(
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
  validate150.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  title: "A string value or null",
  default: "",
  examples: ["resources.power"],
  $id: "#/definitions/secondaryTokenAttribute",
  anyOf: [{ pattern: "^(.*)$", type: "string" }, { type: "null" }],
};
function validate152(
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
  validate152.errors = vErrors;
  return errors === 0;
}
function validate154(
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
  validate154.errors = vErrors;
  return errors === 0;
}
function validate156(
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
  validate156.errors = vErrors;
  return errors === 0;
}
function validate158(
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
  validate158.errors = vErrors;
  return errors === 0;
}
function validate160(
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
  validate160.errors = vErrors;
  return errors === 0;
}
function validate162(
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
  validate162.errors = vErrors;
  return errors === 0;
}
function validate164(
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
  validate164.errors = vErrors;
  return errors === 0;
}
function validate166(
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
  validate166.errors = vErrors;
  return errors === 0;
}
function validate108(
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
      if (
        !validate109(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate109.errors
            : vErrors.concat(validate109.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate111(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
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
    if (data.description !== undefined) {
      if (
        !validate113(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
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
    if (data.author !== undefined) {
      if (
        !validate115(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate117(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate119(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate121(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
    if (data.scripts !== undefined) {
      if (
        !validate123(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
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
    if (data.esmodules !== undefined) {
      if (
        !validate125(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
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
    if (data.styles !== undefined) {
      if (
        !validate127(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
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
    if (data.packs !== undefined) {
      if (
        !validate129(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate129.errors
            : vErrors.concat(validate129.errors);
        errors = vErrors.length;
      }
    }
    if (data.dependencies !== undefined) {
      if (
        !validate133(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate133.errors
            : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.languages !== undefined) {
      if (
        !validate135(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate135.errors
            : vErrors.concat(validate135.errors);
        errors = vErrors.length;
      }
    }
    if (data.authors !== undefined) {
      if (
        !validate137(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate137.errors
            : vErrors.concat(validate137.errors);
        errors = vErrors.length;
      }
    }
    if (data.socket !== undefined) {
      if (
        !validate139(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
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
    if (data.templateVersion !== undefined) {
      if (
        !validate142(data.templateVersion, {
          dataPath: dataPath + "/templateVersion",
          parentData: data,
          parentDataProperty: "templateVersion",
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
    if (data.initiative !== undefined) {
      if (
        !validate144(data.initiative, {
          dataPath: dataPath + "/initiative",
          parentData: data,
          parentDataProperty: "initiative",
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
    if (data.gridDistance !== undefined) {
      if (
        !validate146(data.gridDistance, {
          dataPath: dataPath + "/gridDistance",
          parentData: data,
          parentDataProperty: "gridDistance",
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
    if (data.gridUnits !== undefined) {
      if (
        !validate148(data.gridUnits, {
          dataPath: dataPath + "/gridUnits",
          parentData: data,
          parentDataProperty: "gridUnits",
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
    if (data.primaryTokenAttribute !== undefined) {
      if (
        !validate150(data.primaryTokenAttribute, {
          dataPath: dataPath + "/primaryTokenAttribute",
          parentData: data,
          parentDataProperty: "primaryTokenAttribute",
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
    if (data.secondaryTokenAttribute !== undefined) {
      if (
        !validate152(data.secondaryTokenAttribute, {
          dataPath: dataPath + "/secondaryTokenAttribute",
          parentData: data,
          parentDataProperty: "secondaryTokenAttribute",
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
    if (data.url !== undefined) {
      if (
        !validate154(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
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
    if (data.manifest !== undefined) {
      if (
        !validate156(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
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
    if (data.download !== undefined) {
      if (
        !validate158(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
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
    if (data.license !== undefined) {
      if (
        !validate160(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
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
    if (data.readme !== undefined) {
      if (
        !validate162(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
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
    if (data.bugs !== undefined) {
      if (
        !validate164(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
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
    if (data.changelog !== undefined) {
      if (
        !validate166(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
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
  validate108.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate168;
const schema76 = {
  $id: "validateSystemPlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [{ $ref: "validateSystem" }],
  definitions: {},
  properties: {},
};
function validate168(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
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
  validate168.errors = vErrors;
  return errors === 0;
}
exports.validateModuleStrict = validate170;
const schema77 = {
  $id: "validateModuleStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ strict requirements",
  allOf: [{ $ref: "validateModule" }, { $ref: "../shared/strict-base.json" }],
  definitions: {},
  properties: {},
};
const schema78 = {
  $id: "shared/strict-base.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT shared strict base between module & system.json",
  definitions: {},
  properties: {
    version: { $ref: "shared-strict-base.json#/definitions/version" },
    minimumCoreVersion: {
      $ref: "shared-strict-base.json#/definitions/minimumCoreVersion",
    },
    compatibleCoreVersion: {
      $ref: "shared-strict-base.json#/definitions/compatibleCoreVersion",
    },
  },
};
const schema80 = {
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
const pattern70 = new RegExp(
  "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
  "u"
);
function validate174(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern70.test(data)) {
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
  validate174.errors = vErrors;
  return errors === 0;
}
const schema81 = {
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
function validate176(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/minimumCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern70.test(data)) {
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
  validate176.errors = vErrors;
  return errors === 0;
}
const schema82 = {
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
function validate178(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/compatibleCoreVersion" */ let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern70.test(data)) {
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
  validate178.errors = vErrors;
  return errors === 0;
}
function validate172(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="shared/strict-base.json" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.version !== undefined) {
      if (
        !validate174(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate174.errors
            : vErrors.concat(validate174.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate176(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate178(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
  validate172.errors = vErrors;
  return errors === 0;
}
function validate170(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModuleStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate52(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
    errors = vErrors.length;
  }
  if (
    !validate172(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate172.errors
        : vErrors.concat(validate172.errors);
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
  validate170.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlusStrict = validate181;
const schema83 = {
  $id: "validateModulePlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+ and strict requirements",
  allOf: [
    { $ref: "validateModulePlus" },
    { $ref: "../shared/strict-base.json" },
  ],
  definitions: {},
  properties: {},
};
function validate181(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate106(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate106.errors
        : vErrors.concat(validate106.errors);
    errors = vErrors.length;
  }
  if (
    !validate172(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate172.errors
        : vErrors.concat(validate172.errors);
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
  validate181.errors = vErrors;
  return errors === 0;
}
exports.validateSystemStrict = validate184;
const schema84 = {
  $id: "validateSystemStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ strict requirements",
  allOf: [{ $ref: "validateSystem" }, { $ref: "../shared/strict-base.json" }],
  definitions: {},
  properties: {},
};
function validate184(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemStrict" */ let vErrors = null;
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
  if (
    !validate172(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate172.errors
        : vErrors.concat(validate172.errors);
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
  validate184.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlusStrict = validate187;
const schema85 = {
  $id: "validateSystemPlusStrict",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
  allOf: [
    { $ref: "validateSystemPlus" },
    { $ref: "../shared/strict-base.json" },
  ],
  definitions: {},
  properties: {},
};
function validate187(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlusStrict" */ let vErrors = null;
  let errors = 0;
  if (
    !validate168(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate168.errors
        : vErrors.concat(validate168.errors);
    errors = vErrors.length;
  }
  if (
    !validate172(data, { dataPath, parentData, parentDataProperty, rootData })
  ) {
    vErrors =
      vErrors === null
        ? validate172.errors
        : vErrors.concat(validate172.errors);
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
  validate187.errors = vErrors;
  return errors === 0;
}
