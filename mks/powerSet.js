// Power Set
// Return an array that contains the power set of a given string. The power set 
// is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of 
// subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order 
// and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ 
// should be evaluated as if it only contained one ‘a’. See the result below.

var powerSet = (string) => {

  var chars = [];
  var results = [''];
  
  // create array of unique characters from input string
  string.split('').forEach((char) => {
    if(!~chars.indexOf(char))
      chars.push(char);
  });
  
  // sort unique characters alphabetically
  chars.sort();
  
  // for each char in chars
  //   push (str + char) to results
  //   recurse on (str + char) and remaining chars
  var recurse = (str, chars) => {
    chars.forEach((char, idx) => {
      results.push(str + char);
      recurse(str + char, chars.slice(idx + 1));
    });
  }
  
  // initialize recursion with empty string and all chars
  recurse('', chars);
  
  return results;
  
}