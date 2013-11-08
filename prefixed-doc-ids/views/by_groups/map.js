function(doc) {
  emit(doc._id.split(':'), 1);
}