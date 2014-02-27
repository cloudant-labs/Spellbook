function (doc, req) {
  var tmp = doc;
  tmp['@context'] = {
    "@base": "http://" + req.headers.Host + "/" + req.info.db_name + "/",
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
