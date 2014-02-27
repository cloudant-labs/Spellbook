## Add @context with JSON-LD & _show functions

> [JSON-LD](http://json-ld.org/) (JSON Linked Data) is a simple way of providing semantic meaning for the terms and values in a JSON document. Providing that meaning with the JSON means that the next developer's application can parse and understand the JSON you gave them.
> https://cloudant.com/blog/webizing-your-database-with-linked-data-in-json-ld/

The design document in this section provides a `_show` function (as mentioned
in the blog post above) that allows you to contextualize any JSON document.

Once you've `couchapp push`ed this into your Cloudant or CouchDB database,
request this URL with your favorite HTTP client (put your hostname in front):

```
/foaf/_design/json-ld/_show/foaf/BenjaminYoung
```
