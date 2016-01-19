# Content Negotiation

HTTP has this fabulous ability to send various representations of a resource
based on the `Accept` request header. Apache CouchDB supports sending custom
representations via the [`provides()`](http://docs.couchdb.org/en/1.6.1/query-server/javascript.html#provides) function which does the "hard work" of
determining if there's a match between the `Accept` and what your `_show`,
`_list`, or `_update` function is returning.
