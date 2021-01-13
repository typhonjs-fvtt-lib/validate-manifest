### Authors

The Core manifest has two ways of defining the package Author. Either through the `author` field which expects a simple string, or through the more complex `authors` filed. We *highly* recommend including the `authors` field in your package as it provides much more flexibility.

> Currently while `authors` is a part of the standard manifest, Foundry does not actually utilize this field, and you should also include the `author` field until such a time as that changes.
{.is-info}

The `authors` field is an array of objects, each object provides information about one of the authors of the package. This could be one author, or many. The standard version includes `name`, `url`, and `email` fields. Only `name` is required.

For Manifest+, we wanted to recognize that a personal website and Email address are not nessesarily the best/only ways to contact the author. To that end, we introduce `discord`, `twitter`, `patreon`, and `reddit` fields as well.

```json
"author": "Name of the author",
"authors": [
  {
    "name": "Name of the author",
    "url": "https://website.com/of/the/author",
    "email": "email@example.com",
    "discord": "discordID#0001",
    "twitter": "@TwitterHandle",
    "patreon": "patreonName",
    "reddit": "u/RedditUsername"
  }
]
```
Each of these additional fields follow the naming convention of the platform, for example with Twitter handles the `@TwitterHandle` format is used.
