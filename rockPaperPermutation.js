// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play 
// possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {

  var choices = ["r","p","s"];
  var results = [];
  
  var _recurse = (choice, rounds) => {
    if(rounds === 0) result.push(choice)
    else choices.forEach((val) => _recurse(choice + val, rounds - 1));
  }
  
  if(roundCount > 0) _recurse('', roundCount);
  
  return results;
  
}
