(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    var vowelCount = newEntry.countVowels(body);
    var consonantCount = newEntry.countConsonants(body);
    var teaser = newEntry.getTeaser(body);
    var output = newEntry.wordsNumber(body);
    $('#wordCount').text(output);
    $('#vowelCount').text(vowelCount);
    $('#consonantCount').text(consonantCount);
    $('#teaser').text(teaser);
  });
});

$(document).ready(function() {
  $('#time').text(moment());
});

},{"./../js/entry.js":1}]},{},[2]);
