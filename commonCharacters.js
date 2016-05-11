// Common Characters
// Write a function that accepts two strings as arguments, and returns only the 
// characters that are common to both strings.

// Your function should return the common characters in the same order that 
// they appear in the first argument. Do not return duplicate characters and 
// ignore whitespace in your returned string.

var commonCharacters = function(string1, string2){
  var result = '';
  for(var i = 0; i < string1.length; i++) {
    if(string1[i] !== ' ' && ~string2.indexOf(string1[i]) && !~result.indexOf(string1[i])) {
      result += string1[i];
    }
  }
  return result;
};
