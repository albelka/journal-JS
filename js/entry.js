function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordsNumber = function(uniqueEntry) {
  return uniqueEntry.split(" ").length;
};

exports.entryModule = Entry;
