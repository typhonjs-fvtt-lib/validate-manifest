### Conflicts
Similar to the `dependencies` in the standard manifest, but the opposite. The `conflicts` property is an array of objects which define another package with which this package can not inter-opperate.

Each conflic object has a `name` property which matches the name of the other package, and a `type` which is the type of the other package.

Additionally, the optional `versionMin` and `versionMax` properties can be used to define a range of version numbers for the other package withing which the conflic occurs.

```json
"conflicts": [
  {
    "name": "module_name",
    "type": "module",
    "versionMin": "a.b.c",
    "versionMax": "a.c.d"
  }
]
```
