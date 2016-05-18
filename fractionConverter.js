// Fraction Converter
// Write a function that takes a number as its argument and returns a string 
// that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter (number) {
  var den = 1, num; 
  while(num = Number((den * number).toPrecision(12)), num % 1 !== 0) den++;
  return `${num}/${den}`;
}