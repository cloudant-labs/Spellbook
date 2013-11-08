Once you've begun adding (or collecting) JSON documents into your Cloudant
database, it can be helpful to find similarities among your document from which
you can further profit (aka, find stuff easier...).

The included MapReduce creates an array-based `key` of the type (as either
"string", "object", or "date") and the `value` as a String representation of
the value of the document key. String representation is used to avoid storing
full object trees in the index: `[object Object]` is output as the MapReduce
value instead. This keeps the index lighter, while still providing information
useful during development.
