// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman 
// numeral to a number and outputs it.

// When a smaller numeral appears before a larger one, it becomes a subtractive 
// operation. You can assume only one smaller numeral may appear in front of 
// larger one.

// You should return "null" on invalid input.

function translateRomanNumeral (romanNumeral) {
  var number = 0, idx = -1, a, b;
  while(++idx < romanNumeral.length) 
    if(!(romanNumeral[idx] in DIGIT_VALUES)) return 'null';
  idx = -1;
  while(++idx < romanNumeral.length) {
    var a = DIGIT_VALUES[romanNumeral[idx]];
    var b = DIGIT_VALUES[romanNumeral[idx + 1]];
    if(a < b) {
      number += b - a;
      idx++;
    } else {
      number += a;
    }
  }
  return number;
}