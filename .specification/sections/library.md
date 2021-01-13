### Library
The `library` property is a boolean field that indicates whether the package is "library" intended for other packages to depend on. This property should be `true` if your package doesn't present any user-facing features, but rather provides functionality for other packages to utilize and rely upon. Packages with this property set to `true` may be hidden from third party package lists to avoid confusing users.
```json
	"library": true,
```
When omitted, the default value of this property is `false` so it is not nessesary to explcitly set this value unless it needs to be `true`.

> The `library` key might be coming to Foundry Core in 0.8.x. [Issue on Gitlab.](https://gitlab.com/foundrynet/foundryvtt/-/issues/4129)
{.is-info}
