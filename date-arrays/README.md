# Dates as Arrays

Cloudant and CouchDB are able to generate grouped reductions if the keys output
by the MapReduce View are array-based (rather than strings or numbers).

For instance...

    /{db}/_design/date-arrays/_view/group-by-date?group_level=3

...will group the results of the included MapReduce function at the day level.
Output will look something like this:

    {"rows": [
      "key": [2013, 11, 06],
      "value": 15
    ]}

This example uses [moment.js](http://momentjs.com/) as a
[CommonJS](http://wiki.commonjs.org/wiki/Implementations/CouchDB) library.
