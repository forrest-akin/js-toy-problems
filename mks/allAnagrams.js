// All Anagrams
// Given a single input string, write a function that produces all possible 
// anagrams of a string and outputs them as an array. At first, don’t worry 
// about repeated strings. What time complexity is your solution?

// Parameters:
// string (required) - a string of characters.

const allAnagrams = (string) => {
  let anagrams = {};
  const anagramizer = (anagram, chars) => chars.length === 0 ? anagrams[anagram] = true : chars.split('').forEach((char, idx) => anagramizer(anagram + char, chars.slice(0, idx) + chars.slice(idx + 1)));
  anagramizer('', string);
  return Object.keys(anagrams);
}
