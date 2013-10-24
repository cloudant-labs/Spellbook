There has been a long standing convention for adding a `type` key to documents.
This is basically shorthand for **assuming** the structure of a document. Often
you'll have more than a single `type` of document in your database. This simple
example merely gets you a list of the types, and counts them for you (using a
built-in reducer: `_count`).

### Install

    $ pip install couchapp
    $ couchapp push . http://{your}.cloudant.com/{database}

### Test

Grouped Reduced (this is the most useful):

http://labs.cloudant.com/spellbook/_design/doc-type-convention/_view/by_type?group=true

Fully reduced (the default):

http://labs.cloudant.com/spellbook/_design/doc-type-convention/_view/by_type

No reduction (just for the curious...not of any real value to your code):

http://labs.cloudant.com/spellbook/_design/doc-type-convention/_view/by_type?reduce=false


#### License
[MIT](http://choosealicense.com/licenses/mit)
