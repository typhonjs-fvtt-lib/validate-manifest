### Includes
This special property is intended to allow developers to create improved deployment tools. The `includes` property is an array of strings, each string should contain the relative path of a file which should be included in the package .zip archive. Special CI/CD tools can use this field along with the official fields for scripts, laguages, and styles to generate the archive with only the desired files, without needing to create an additional configuration file.
```json
"includes": [
	"relative/path/to/files/script.js", 
	"relative/path/to/templates/template.html", 
	"path/to/image/assets/folder"
]
```
