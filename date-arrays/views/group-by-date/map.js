function (doc) {
  var moment = require('views/lib/moment');

  // Actual MapReduce
  if ('created_on' in doc) {
    // doc.date must be a timestamp
    emit(moment.unix(doc.created_on).toArray(), 1);
    // TODO: show how to handle other date formats
  }
}
