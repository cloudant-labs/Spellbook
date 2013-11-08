function(doc) {
  Object.keys(doc).forEach(function(key) {
   var type = typeof doc[key];
   if (type === 'string') {
     var date = new Date(doc[key]);
     if (date instanceof Date && !isNaN(date.valueOf())) {
       type = 'date';
     }
   }
   emit([type, key], doc[key].toString());
  });
}