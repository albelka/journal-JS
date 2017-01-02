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

Entry.prototype.getTeaser = function(uniqueEntry) {
  var myArray = [];
  myArray = uniqueEntry.split(/[.!?]/);
  var myString = myArray[0].toString();
  var firstSentence = myString.split(" ");
  if (firstSentence.length < 8) {
    return firstSentence.join(" ");
  } else {
    var words = firstSentence.slice(0,8).join(" ");
    return words;
  }
};

exports.entryModule = Entry;
