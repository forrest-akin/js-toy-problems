// Character Frequency
// Write a function that takes as its input a string and returns an array of 
// arrays as shown below sorted in descending order by frequency and then by 
// ascending order by character.

function characterFrequency (string) {
  let result = [], chars = {};
  for (let i = 0; i < string.length; i++) chars[string[i]] ? chars[string[i]]++ : chars[string[i]] = 1;
  for (let key in chars) result.push([key, chars[key]])
  return result.sort((a, b) => a[1] !== b[1] ? b[1] - a[1] : a[0] < b[0] ? -1 : 1);
}
