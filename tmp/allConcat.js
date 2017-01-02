var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    var output = newEntry.wordsNumber(body);
    console.log(output);
    $('#wordCount').text(output);
  });
});
