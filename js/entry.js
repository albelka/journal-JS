function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordsNumber = function(uniqueEntry) {
  return uniqueEntry.split(" ").length;
};

Entry.prototype.countVowels = function(uniqueEntry) {
  var myArray= [];
  myArray = uniqueEntry.split('');
  var count = 0;
  myArray.forEach(function(element){
    if ((/a|e|i|o|u/gi).test(element)) {
      count++ ;
    }
  });
  return count;
};

Entry.prototype.countConsonants = function(uniqueEntry) {
  var myArray= [];
  myArray = uniqueEntry.split('');
  var count = 0;
  myArray.forEach(function(element){
    if (!(/a|e|i|o|u|\s/gi).test(element)) {
      count++ ;
    }
  });
  return count;
};

exports.entryModule = Entry;
