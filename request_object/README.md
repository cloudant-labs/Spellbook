# Examine the Request Object

`_show`, `_list`, and `_update` functions all provide access to a
[request object](http://docs.couchdb.org/en/latest/json-structure.html#request-object)
that provides access to the inbound information (HTTP headers, database info,
etc) of the incoming request.

The included `_show` function lets you examine what it looks like in your
Cloudant or Apache CouchDB database. Some keys have been introduced over time,
so they may not always be exactly what you see in the latest documentation.
Seeing what you'll have on hand, will save you time developing. One hopes.
