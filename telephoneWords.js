// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters 
// written on it as well: 
// http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone 
// number in advertisements to make it more memorable. But there are a lot of 
// combinations!

// Write a function that takes up to four digits of a phone number, and returns 
// a list of all of the words (in alphabetical order) that can be written on 
// the phone with that number. (You should return all permutations, not only 
// English words.)

const telephoneWords = (digitString) => {
  var words = [];
  var recurse = (word, idx) => (idx === digitString.length) ? words.push(word) : keypad[digitString[idx]].forEach((letter) => recurse(word + letter, idx + 1));
  recurse('', 0);
  return words;   
};

const keypad = {
  0: [0],
  1: [1],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z']
};
