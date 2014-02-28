function (doc, req) {
  var tmp = doc;
  var path = req.path;
  path.pop(); // drop the current doc name
  var base = "http://" + req.headers.Host + "/" + path.join("/") + "/";
  tmp['@context'] = {
    "@base": base,
    "_id": "@id",
    "first_name": "http://xmlns.com/foaf/0.1/givenName",
    "last_name": "http://xmlns.com/foaf/0.1/familyName",
    "knows": {
      "@id": "http://xmlns.com/foaf/0.1/knows",
      "@type": "@id"
    }
  };
  delete tmp.couchapp;
  delete tmp._revisions;
  return {"json": tmp};
}
