"use strict";
exports.validateModule = validate43;
const schema13 = {
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
    system: { $ref: "shared/shared-module.json#/definitions/system" },
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
const schema15 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["a-module"],
  $id: "#/definitions/name",
  type: "string",
};
const pattern0 = new RegExp("^(.*)$", "u");
function validate45(
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
  validate45.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["A Module"],
  $id: "#/definitions/title",
  type: "string",
};
function validate47(
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
  validate47.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["Some description"],
  $id: "#/definitions/description",
  type: "string",
};
function validate49(
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
  validate49.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["typhonrt"],
  $id: "#/definitions/author",
  type: "string",
};
function validate51(
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
  validate51.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1.0.0"],
  $id: "#/definitions/version",
  type: "string",
};
function validate53(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
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
  validate53.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["0.7.5"],
  $id: "#/definitions/minimumCoreVersion",
  type: "string",
};
function validate55(
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
  validate55.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["1.0.0"],
  $id: "#/definitions/compatibleCoreVersion",
  type: "string",
};
function validate57(
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
  validate57.errors = vErrors;
  return errors === 0;
}
const schema22 = {
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
function validate59(
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
  validate59.errors = vErrors;
  return errors === 0;
}
const schema23 = {
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
function validate61(
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
  validate61.errors = vErrors;
  return errors === 0;
}
const schema24 = {
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
function validate63(
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
  validate63.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name", "label", "system", "path", "entity"],
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
      system: {
        title: "A string value",
        default: "",
        pattern: "^(.*)$",
        examples: ["system-name"],
        $id: "#/definitions/packs/items/properties/system",
        type: "string",
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
function validate65(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/packs" */ let vErrors = null;
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
        if (data0.label === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "label" },
            message: "should have required property '" + "label" + "'",
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        if (data0.system === undefined) {
          const err2 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "system" },
            message: "should have required property '" + "system" + "'",
          };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        if (data0.path === undefined) {
          const err3 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "path" },
            message: "should have required property '" + "path" + "'",
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        }
        if (data0.entity === undefined) {
          const err4 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
            params: { missingProperty: "entity" },
            message: "should have required property '" + "entity" + "'",
          };
          if (vErrors === null) {
            vErrors = [err4];
          } else {
            vErrors.push(err4);
          }
          errors++;
        }
        if (data0.name !== undefined) {
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
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
        if (data0.label !== undefined) {
          let data2 = data0.label;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err7 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/label",
                schemaPath: "#/items/properties/label/pattern",
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
              dataPath: dataPath + "/" + i0 + "/label",
              schemaPath: "#/items/properties/label/type",
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
        if (data0.system !== undefined) {
          let data3 = data0.system;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err9 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/system",
                schemaPath: "#/items/properties/system/pattern",
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
              dataPath: dataPath + "/" + i0 + "/system",
              schemaPath: "#/items/properties/system/type",
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
        if (data0.path !== undefined) {
          let data4 = data0.path;
          if (typeof data4 === "string") {
            if (!pattern0.test(data4)) {
              const err11 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/path",
                schemaPath: "#/items/properties/path/pattern",
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
              dataPath: dataPath + "/" + i0 + "/path",
              schemaPath: "#/items/properties/path/type",
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
        if (data0.entity !== undefined) {
          let data5 = data0.entity;
          if (typeof data5 === "string") {
            if (!pattern0.test(data5)) {
              const err13 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/entity",
                schemaPath: "#/items/properties/entity/pattern",
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
              dataPath: dataPath + "/" + i0 + "/entity",
              schemaPath: "#/items/properties/entity/type",
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
          dataPath: dataPath + "/" + i0,
          schemaPath: "#/items/type",
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
      dataPath,
      schemaPath: "#/type",
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
  validate65.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  title: "An array of items",
  items: {
    title: "An object value",
    required: ["name", "type"],
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
function validate67(
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
        if (data0.type === undefined) {
          const err1 = {
            keyword: "required",
            dataPath: dataPath + "/" + i0,
            schemaPath: "#/items/required",
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
        if (data0.name !== undefined) {
          let data1 = data0.name;
          if (typeof data1 === "string") {
            if (!pattern0.test(data1)) {
              const err2 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/name",
                schemaPath: "#/items/properties/name/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/name",
              schemaPath: "#/items/properties/name/type",
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
        if (data0.manifest !== undefined) {
          let data2 = data0.manifest;
          if (typeof data2 === "string") {
            if (!pattern0.test(data2)) {
              const err4 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/manifest",
                schemaPath: "#/items/properties/manifest/pattern",
                params: { pattern: "^(.*)$" },
                message: 'should match pattern "' + "^(.*)$" + '"',
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
              dataPath: dataPath + "/" + i0 + "/manifest",
              schemaPath: "#/items/properties/manifest/type",
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
        if (data0.type !== undefined) {
          let data3 = data0.type;
          if (typeof data3 === "string") {
            if (!pattern0.test(data3)) {
              const err6 = {
                keyword: "pattern",
                dataPath: dataPath + "/" + i0 + "/type",
                schemaPath: "#/items/properties/type/pattern",
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
              dataPath: dataPath + "/" + i0 + "/type",
              schemaPath: "#/items/properties/type/type",
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
  validate67.errors = vErrors;
  return errors === 0;
}
const schema27 = {
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
function validate69(
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
  validate69.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["dnd5e"],
  $id: "#/definitions/system",
  type: "string",
};
function validate72(
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
  validate72.errors = vErrors;
  return errors === 0;
}
const schema30 = {
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
function validate74(
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  title: "A boolean value",
  default: false,
  examples: [true],
  $id: "#/definitions/socket",
  type: "boolean",
};
function validate76(
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/"],
  $id: "#/definitions/url",
  type: "string",
};
function validate78(
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.json"],
  $id: "#/definitions/manifest",
  type: "string",
};
function validate80(
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://someaddress.com/module.zip"],
  $id: "#/definitions/download",
  type: "string",
};
function validate82(
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
  validate82.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["LICENSE"],
  $id: "#/definitions/license",
  type: "string",
};
function validate84(
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
  validate84.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["README.md"],
  $id: "#/definitions/readme",
  type: "string",
};
function validate86(
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
  validate86.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/issues"],
  $id: "#/definitions/bugs",
  type: "string",
};
function validate88(
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
  validate88.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  title: "A string value",
  default: "",
  pattern: "^(.*)$",
  examples: ["https://github.com/some-user/a-module/releases"],
  $id: "#/definitions/changelog",
  type: "string",
};
function validate90(
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
  validate90.errors = vErrors;
  return errors === 0;
}
function validate43(
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
        !validate45(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate45.errors
            : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate47(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate47.errors
            : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.description !== undefined) {
      if (
        !validate49(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate49.errors
            : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.author !== undefined) {
      if (
        !validate51(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate51.errors
            : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (
        !validate53(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate55(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate55.errors
            : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.compatibleCoreVersion !== undefined) {
      if (
        !validate57(data.compatibleCoreVersion, {
          dataPath: dataPath + "/compatibleCoreVersion",
          parentData: data,
          parentDataProperty: "compatibleCoreVersion",
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
    if (data.scripts !== undefined) {
      if (
        !validate59(data.scripts, {
          dataPath: dataPath + "/scripts",
          parentData: data,
          parentDataProperty: "scripts",
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
    if (data.esmodules !== undefined) {
      if (
        !validate61(data.esmodules, {
          dataPath: dataPath + "/esmodules",
          parentData: data,
          parentDataProperty: "esmodules",
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
    if (data.styles !== undefined) {
      if (
        !validate63(data.styles, {
          dataPath: dataPath + "/styles",
          parentData: data,
          parentDataProperty: "styles",
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
    if (data.packs !== undefined) {
      if (
        !validate65(data.packs, {
          dataPath: dataPath + "/packs",
          parentData: data,
          parentDataProperty: "packs",
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
    if (data.dependencies !== undefined) {
      if (
        !validate67(data.dependencies, {
          dataPath: dataPath + "/dependencies",
          parentData: data,
          parentDataProperty: "dependencies",
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
    if (data.languages !== undefined) {
      if (
        !validate69(data.languages, {
          dataPath: dataPath + "/languages",
          parentData: data,
          parentDataProperty: "languages",
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
    if (data.system !== undefined) {
      if (
        !validate72(data.system, {
          dataPath: dataPath + "/system",
          parentData: data,
          parentDataProperty: "system",
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
    if (data.authors !== undefined) {
      if (
        !validate74(data.authors, {
          dataPath: dataPath + "/authors",
          parentData: data,
          parentDataProperty: "authors",
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
    if (data.socket !== undefined) {
      if (
        !validate76(data.socket, {
          dataPath: dataPath + "/socket",
          parentData: data,
          parentDataProperty: "socket",
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
    if (data.url !== undefined) {
      if (
        !validate78(data.url, {
          dataPath: dataPath + "/url",
          parentData: data,
          parentDataProperty: "url",
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
    if (data.manifest !== undefined) {
      if (
        !validate80(data.manifest, {
          dataPath: dataPath + "/manifest",
          parentData: data,
          parentDataProperty: "manifest",
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
    if (data.download !== undefined) {
      if (
        !validate82(data.download, {
          dataPath: dataPath + "/download",
          parentData: data,
          parentDataProperty: "download",
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
    if (data.license !== undefined) {
      if (
        !validate84(data.license, {
          dataPath: dataPath + "/license",
          parentData: data,
          parentDataProperty: "license",
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
    if (data.readme !== undefined) {
      if (
        !validate86(data.readme, {
          dataPath: dataPath + "/readme",
          parentData: data,
          parentDataProperty: "readme",
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
    if (data.bugs !== undefined) {
      if (
        !validate88(data.bugs, {
          dataPath: dataPath + "/bugs",
          parentData: data,
          parentDataProperty: "bugs",
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
    if (data.changelog !== undefined) {
      if (
        !validate90(data.changelog, {
          dataPath: dataPath + "/changelog",
          parentData: data,
          parentDataProperty: "changelog",
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
  validate43.errors = vErrors;
  return errors === 0;
}
exports.validateModulePlus = validate92;
const schema39 = {
  $id: "validateModulePlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT module.json w/ manifest+",
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
  },
};
function validate93(
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
  validate93.errors = vErrors;
  return errors === 0;
}
function validate95(
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
  validate95.errors = vErrors;
  return errors === 0;
}
function validate97(
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
  validate97.errors = vErrors;
  return errors === 0;
}
function validate99(
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
  validate99.errors = vErrors;
  return errors === 0;
}
function validate101(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
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
  validate101.errors = vErrors;
  return errors === 0;
}
function validate103(
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
  validate103.errors = vErrors;
  return errors === 0;
}
function validate92(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateModulePlus" */ let vErrors = null;
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
        !validate93(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
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
    if (data.title !== undefined) {
      if (
        !validate95(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
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
    if (data.description !== undefined) {
      if (
        !validate97(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
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
    if (data.author !== undefined) {
      if (
        !validate99(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate101(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate103(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate103.errors
            : vErrors.concat(validate103.errors);
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
  validate92.errors = vErrors;
  return errors === 0;
}
exports.validateSystem = validate105;
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
  },
};
function validate106(
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
  validate106.errors = vErrors;
  return errors === 0;
}
function validate108(
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
  validate108.errors = vErrors;
  return errors === 0;
}
function validate110(
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
  validate110.errors = vErrors;
  return errors === 0;
}
function validate112(
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
  validate112.errors = vErrors;
  return errors === 0;
}
function validate114(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
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
  validate114.errors = vErrors;
  return errors === 0;
}
function validate116(
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
  validate116.errors = vErrors;
  return errors === 0;
}
function validate105(
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
        !validate106(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate106.errors
            : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.title !== undefined) {
      if (
        !validate108(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate108.errors
            : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
    if (data.description !== undefined) {
      if (
        !validate110(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate110.errors
            : vErrors.concat(validate110.errors);
        errors = vErrors.length;
      }
    }
    if (data.author !== undefined) {
      if (
        !validate112(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate114(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate114.errors
            : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate116(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
          rootData,
        })
      ) {
        vErrors =
          vErrors === null
            ? validate116.errors
            : vErrors.concat(validate116.errors);
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
  validate105.errors = vErrors;
  return errors === 0;
}
exports.validateSystemPlus = validate118;
const schema53 = {
  $id: "validateSystemPlus",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "FoundryVTT system.json w/ manifest+",
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
  },
};
function validate119(
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
  validate119.errors = vErrors;
  return errors === 0;
}
function validate121(
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
  validate121.errors = vErrors;
  return errors === 0;
}
function validate123(
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
  validate123.errors = vErrors;
  return errors === 0;
}
function validate125(
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
  validate125.errors = vErrors;
  return errors === 0;
}
function validate127(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="#/definitions/version" */ let vErrors = null;
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
  validate127.errors = vErrors;
  return errors === 0;
}
function validate129(
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
  validate129.errors = vErrors;
  return errors === 0;
}
function validate118(
  data,
  { dataPath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  /*# sourceURL="validateSystemPlus" */ let vErrors = null;
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
        !validate119(data.name, {
          dataPath: dataPath + "/name",
          parentData: data,
          parentDataProperty: "name",
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
    if (data.title !== undefined) {
      if (
        !validate121(data.title, {
          dataPath: dataPath + "/title",
          parentData: data,
          parentDataProperty: "title",
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
    if (data.description !== undefined) {
      if (
        !validate123(data.description, {
          dataPath: dataPath + "/description",
          parentData: data,
          parentDataProperty: "description",
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
    if (data.author !== undefined) {
      if (
        !validate125(data.author, {
          dataPath: dataPath + "/author",
          parentData: data,
          parentDataProperty: "author",
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
    if (data.version !== undefined) {
      if (
        !validate127(data.version, {
          dataPath: dataPath + "/version",
          parentData: data,
          parentDataProperty: "version",
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
    if (data.minimumCoreVersion !== undefined) {
      if (
        !validate129(data.minimumCoreVersion, {
          dataPath: dataPath + "/minimumCoreVersion",
          parentData: data,
          parentDataProperty: "minimumCoreVersion",
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
  validate118.errors = vErrors;
  return errors === 0;
}
