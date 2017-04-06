// All Anagrams
// Given a single input string, write a function that produces all possible 
// anagrams of a string and outputs them as an array. At first, don’t worry 
// about repeated strings. What time complexity is your solution?

// Parameters:
// string (required) - a string of characters.

const anagramizer = (anagram, chars, anagrams = {}) => 
  chars.length === 0 
  ? (anagrams[anagram] = true, anagrams) 
  : chars.split('').reduce((anagrams, char, idx) => anagramizer(anagram + char, chars.slice(0, idx) + chars.slice(idx + 1), anagrams), anagrams)

const allAnagrams = (string) => Object.keys(anagramizer('', string))
