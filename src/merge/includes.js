module.exports = {
  'file-css': () =>
  {
    return {
      pattern: '^(.+).css$'
    };
  },
  'file-db': () =>
  {
    return {
      pattern: '^(.+).db$'
    };
  },
  'file-js': () =>
  {
    return {
      pattern: '^(.+).js$'
    };
  },
  'file-json': () =>
  {
    return {
      pattern: '^(.+).json$'
    };
  },
  'pattern-discord': (data) =>   // https://ihateregex.io/expr/discord-username/
  {
    return {
      pattern: '^.{3,32}#[0-9]{4}$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is a valid Discord user name`
      }
    };
  },
  'pattern-email': (data) =>   // https://www.codespot.org/javascript-email-validation/
  {
    return {
      pattern: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is a valid email address`
      }
    };
  },
  'pattern-package-name': (data) =>
  {
    return {
      pattern: '^([a-z0-9]+-?)*[a-z0-9]+$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is lowercase alpha-numeric with only separating hyphens`
      }
    };
  },
  'pattern-package-name-loose': (data) =>  // Not as strict test for package names; allows uppercase and underscore
  {
    return {
      pattern: '^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is alpha-numeric with only underscore and hyphen separators`
      }
    };
  },
  'pattern-reddit': (data) =>
  {
    return {
      pattern: '^u/[A-Za-z0-9_-]+$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is a valid Reddit user name`
      }
    };
  },
  'pattern-semver': (data) =>
  {
    return {
      pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that uses semantic versioning`
      }
    };
  },
  'pattern-twitter': (data) =>
  {
    return {
      pattern: '^@[A-Za-z0-9_]{1,15}$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is a valid twitter user name`
      }
    };
  },
  'pattern-url': (data) =>    // https://gist.github.com/dperini/729294
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string`
      }
    };
  },
  // image formats: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats
  'pattern-url-image': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)$',
      errorMessage: {
        pattern: `'${data.name}' should be a valid image URL string for <img> tags`
      }
    };
  },
  'pattern-url-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).json$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string ending in '.json'`
      }
    };
  },
  'pattern-url-manifest': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(module|system).json$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string ending in 'module.json' or 'system.json'`
      }
    };
  },
  'pattern-url-module-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/module.json$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string ending in 'module.json'`
      }
    };
  },
  'pattern-url-system-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/system.json$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string ending in 'system.json'`
      }
    };
  },
  // video formats: https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#browser_compatibility
  'pattern-url-video': (data) =>  // video formats supported:
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\\.)+(?:[a-z\u00a1-\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/([a-zA-Z0-9%._-])+.(3gp|mpg|mpeg|mp4|m4v|m4p|ogv|ogg|mov|webm)$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string for a valid video format for <video> tags or link to a service`
      }
    };
  },
  'pattern-url-zip': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?\\/(.+).zip$',
      errorMessage: {
        pattern: `'${data.name}' should be an URL string ending in '.zip'`
      }
    };
  }
};
