/** list docs by type **/
function(doc) {
  if ('type' in doc) {
    emit(doc.type, 1);
  }
}
