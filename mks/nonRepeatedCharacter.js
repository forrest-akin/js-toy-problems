// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {

  var array = string.split("");
  var repeats = [];
  var result = array.shift();
  
  while(array.length > 1) {
    if(~array.indexOf(result) || ~repeats.indexOf(result)) {
      repeats.push(result)
      result = array.shift();
    } else
      return result;
  }
  
  return 'sorry';

}
