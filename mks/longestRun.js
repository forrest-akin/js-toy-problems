// Longest Run
// Write a function that, given a string, finds the longest run of identical 
// characters and returns an array containing the start and end indices of that
// run. 
// If there are two runs of equal length, return the first one. Return [0,0] 
// for no runs.

function longestRun (string) {
  var start = 0, end = 0, longest = 0, temp = 0, idx = 1;
  while(idx < string.length) {
    if(string[idx] === string[idx - 1])
      temp++;
    else 
      temp = 0;
    if(temp > longest) {
      longest = temp;
      start = idx - longest;
      end = idx;
    }
    idx++;
  }
  return [start, end];
}
