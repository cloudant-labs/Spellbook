function(doc, req) {
  provides('json', function() {
    return {body: JSON.stringify(req)};
  });
  provides('html', function() {
    return '<pre>' + JSON.stringify(req) + '</pre>';
  });
}
