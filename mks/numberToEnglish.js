// Number to English
// Write a function numberToEnglish, it should take a number and return the 
// number as a string using English words.

const numberToEnglish = (number) => 
  `${number}`.split('').reduceRight((acc, num, idx, arr) => {
    num = Number(num);
    switch ((arr.length - idx - 1) % 3) {
      case 0:
        acc.nums = num;
        if (!arr[idx - 1]) acc.english = `${numbersToWords[num]}${(acc.english) !== '' ? ' ' + acc.english : ''}`
        break;
      case 1:
        if (num > 0 || acc.nums > 0) acc.english = (num < 2) ? `${numbersToWords[acc.nums + num * 10]}${(acc.english) !== '' ? ' ' + acc.english : ''}` : `${numbersToWords[num * 10]}${(acc.nums > 0) ? '-' + numbersToWords[acc.nums] : ''}${(acc.english) !== '' ? ' ' + acc.english : ''}`;
        break;
      case 2:
        acc.place *= 1000;
        if (num > 0) acc.english = `${numbersToWords[num]} hundred${(acc.english) !== '' ? ' ' + acc.english : ''}`;
        if (arr.slice((idx > 2) ? idx - 3 : 0, idx).reduce((acc, num) => acc ? acc : Number(num) > 0, false)) acc.english = `${numbersToPlace[acc.place]}${(acc.english) !== '' ? ' ' + acc.english : ''}`;
    }
    return acc;
  }, {english: '', nums: 0, place: 1}).english;

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};