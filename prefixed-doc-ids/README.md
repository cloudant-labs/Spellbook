Prefixing a document's `_id` with its type has the advantage that humans
(like yourself) can quickly detect various document types returned when a list
of document id's output via `_all_docs` (or the ids shown with keys in
MapReduce output).

The included MapReduce function uses a `{type}:{id}` style format for `_id`s.
However, the separator could be any of the allowed characters including `|` or
`/`. If you pick a different separator, be sure to change the MapReduce to
match.

Using types as prefixes has the added value of preventing duplicates within a
"namespace."
