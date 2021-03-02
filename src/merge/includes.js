/**
 * Exports an object with various template functions which are invoked in `merge.js` via the `$$includes` key in merge
 * schema. The object returned from the function will be merged where the key is located and the key then removed.
 *
 * Presently all of the templates return pattern schema and an errorMessage for `ajv-errors`.
 *
 * @type {{"pattern-file-css": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-twitter": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-video": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-file-js": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-file-db": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-package-name-loose": (function({errorMessage?: *}=): {pattern: string}), "pattern-package-name": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-module-json": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-image": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-manifest": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-system-json": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-email": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-reddit": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-zip": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-file-json": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-url-json": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-discord": (function(): {pattern: string, errorMessage: {pattern: string}}), "pattern-semver": (function(): {pattern: string, errorMessage: {pattern: string}})}}
 */
module.exports = {
  'pattern-discord': () =>   // https://ihateregex.io/expr/discord-username/
  {
    return {
      pattern: '^.{3,32}#[0-9]{4}$',
      errorMessage: {
        pattern: `should be a string that is a valid Discord user name`
      }
    };
  },
  'pattern-email': () =>     // https://www.codespot.org/javascript-email-validation/
  {
    return {
      pattern: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      errorMessage: {
        pattern: `should be a string that is a valid email address`
      }
    };
  },
  'pattern-file-css': () =>  // See: unit tests - https://regex101.com/r/z998Bw/1
  {
    return {
      pattern: '^(?!\\.\\.|\\/)([^\\/\\\\]+\\/)*[^\\/\\\\]+\\.css$',
      errorMessage: {
        pattern: `should be a file path string ending in '.css'`
      }
    };
  },
  'pattern-file-db': () =>  // See: unit tests - https://regex101.com/r/BjuMOT/1
  {
    return {
      pattern: '^(?!\\.\\.|\\/)([^\\/\\\\]+\\/)*[^\\/\\\\]+\\.db$',
      errorMessage: {
        pattern: `should be a file path string ending in '.db'`
      }
    };
  },
  'pattern-file-js': () =>  // See: unit tests - https://regex101.com/r/vgKsj3/2
  {
    return {
      pattern: '^(?!\\.\\.|\\/)([^\\/\\\\]+\\/)*[^\\/\\\\]+\\.js$',
      errorMessage: {
        pattern: `should be a file path string ending in '.js'`
      }
    };
  },
  'pattern-file-json': () =>  // See: unit tests - https://regex101.com/r/YcyGLh/1
  {
    return {
      pattern: '^(?!\\.\\.|\\/)([^\\/\\\\]+\\/)*[^\\/\\\\]+\\.json$',
      errorMessage: {
        pattern: `should be a file path string ending in '.json'`
      }
    };
  },
  'pattern-package-name': () =>
  {
    return {
      pattern: '^([a-z0-9]+-?)*[a-z0-9]+$',
      errorMessage: {
        pattern: `should be a string that is lowercase alpha-numeric with only separating hyphens`
      }
    };
  },
  // Not as strict test for package names; allows uppercase and underscore with optional data field to omit the error
  // message.
  'pattern-package-name-loose': ({ errorMessage = true } = {}) =>
  {
    const include = {
      pattern: '^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$'
    };

    if (errorMessage)
    {
      include.errorMessage = {
        pattern: `should be a string that is alpha-numeric with only underscore and hyphen separators`
      };
    }

    return include;
  },
  'pattern-reddit': () =>
  {
    return {
      pattern: '^u/[A-Za-z0-9_-]+$',
      errorMessage: {
        pattern: `should be a string that is a valid Reddit user name`
      }
    };
  },
  'pattern-semver': () =>
  {
    return {
      pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
      errorMessage: {
        pattern: `should be a string that uses semantic versioning`
      }
    };
  },
  'pattern-twitter': () =>
  {
    return {
      pattern: '^@[A-Za-z0-9_]{1,15}$',
      errorMessage: {
        pattern: `should be a string that is a valid twitter user name`
      }
    };
  },
  'pattern-url': () =>    // https://gist.github.com/dperini/729294
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$',
      errorMessage: {
        pattern: `should be an URL string`
      }
    };
  },
  // image formats: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats
  'pattern-url-image': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$',
      errorMessage: {
        pattern: `should be a valid image URL string for <img> tags`
      }
    };
  },
  'pattern-url-json': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).json$',
      errorMessage: {
        pattern: `should be an URL string ending in '.json'`
      }
    };
  },
  'pattern-url-manifest': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$',
      errorMessage: {
        pattern: `should be an URL string ending in 'module.json' or 'system.json'`
      }
    };
  },
  'pattern-url-module-json': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$',
      errorMessage: {
        pattern: `should be an URL string ending in 'module.json'`
      }
    };
  },
  'pattern-url-system-json': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$',
      errorMessage: {
        pattern: `should be an URL string ending in 'system.json'`
      }
    };
  },
  // video formats: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#browser_compatibility
  'pattern-url-video': () =>  // video formats supported:
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(3gp|mpg|mpeg|mp4|m4v|m4p|ogv|ogg|mov|webm)$',
      errorMessage: {
        pattern: `should be an URL string for a valid video format for <video> tags or link to a service`
      }
    };
  },
  'pattern-url-zip': () =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$',
      errorMessage: {
        pattern: `should be an URL string ending in '.zip'`
      }
    };
  }
};
