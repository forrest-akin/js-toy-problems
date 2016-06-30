// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. 
// For example, in the string “My dad is a racecar athlete”, the longest 
// palindrome is “a racecar a”. Count whitespaces as valid characters. Other 
// palindromes in the above string include “dad”, “ete”, “ dad “ (including 
// whitespace on each side of dad).

// Examples:
// Input                          Output
// "aibohphobia"                  "aibohphobia"
// "My dad is a racecar athlete"  "a racecar a"

const longestPalindrome = (string) => {
  let size = string.length;
  while (size) {
    for (let i = 0; i + size <= string.length; i++) {
      let str = string.substr(i, size)
      let pal = str.split('').reverse().join('')
      if (str === pal) return pal;
    }
    size--;
  }
}
