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
  'package-name': (data) =>
  {
    return {
      pattern: '^([a-z0-9]+-?)*[a-z0-9]+$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is lowercase alpha-numeric with only separating hyphens`
      }
    };
  },
  'package-name-loose': (data) =>  // Not as strict test for package names; allows uppercase and underscore
  {
    return {
      pattern: '^([a-zA-Z0-9]+[-_]?)*[a-zA-Z0-9]+$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that is alpha-numeric with only underscore and hyphen separators`
      }
    };
  },
  'semver': (data) =>
  {
    return {
      pattern: '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
      errorMessage: {
        pattern: `'${data.name}' should be a string that uses semantic versioning`
      }
    };
  },
  'url-pattern': (data) =>    // https://gist.github.com/dperini/729294
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$',
      errorMessage: {
        pattern: `'${data.name}' should be a string and / or appears to be a malformed url`
      }
    };
  },
  'url-pattern-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).json$',
      errorMessage: {
        pattern: `'${data.name}' should be a string and / or appears to be a malformed url`
      }
    };
  },
  'url-pattern-module-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/module.json$',
      errorMessage: {
        pattern: `'${data.name}' should be a string and / or appears to be a malformed url`
      }
    };
  },
  'url-pattern-system-json': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/system.json$',
      errorMessage: {
        pattern: `'${data.name}' should be a string and / or appears to be a malformed url`
      }
    };
  },
  'url-pattern-zip': (data) =>
  {
    return {
      pattern: '^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?/(.+).zip$',
      errorMessage: {
        pattern: `'${data.name}' should be a string and / or appears to be a malformed url`
      }
    };
  }
};
