const fs                = require("fs");
const path              = require("path");

const stripJsonComments = require('strip-json-comments');

/**
 * Provides a file loading to load JSON files and convert them into a Map.
 */
class FileUtil
{
   /**
    * Returns a Map of all files found in the directory provided.
    *
    * @param {string}               dir - Directory to read.
    * @param {Map<string, object>}  [results] - Output Map.
    *
    * @returns {Map<string, object>}
    */
   static loadFiles(dir = '.', results = new Map())
   {
      fs.readdirSync(dir).forEach((filename) =>
      {
         const absPath = path.resolve(dir, filename);
         const stat = fs.statSync(absPath);
         const isFile = stat.isFile();

         if (isFile)
         {
            const baseName = path.basename(absPath);
            const data = JSON.parse(stripJsonComments(fs.readFileSync(absPath, 'utf8')));

            results.set(baseName, {
               absPath,
               baseName,
               data
            });
         }
      });

      return results;
   }
}

module.exports = FileUtil;
