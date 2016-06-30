// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers 
// in it. A single array item will count as a contiguous sum.

// Examples
// Input Output
// [ 1, 2, 3 ] 6
// [ 4, -1, 5 ]  8
// [ 10, -11, 11 ] 11
// [ 1, 2, 3, -6, 4, 5, 6 ]  15

function sumArray (array) {
  var max = array[0];
  var matrix = array.map(() => []);
  array.forEach((item, i) => {
    matrix[0][i] = array[i];
    max = (matrix[0][i] > max) ? matrix[0][i] : max;
    for (let j = 1; j <= i; j++) {
      matrix[j][i] = matrix[0][i] + matrix[j - 1][i - 1];
      max = (matrix[j][i] > max) ? matrix[j][i] : max;
    }
  });
  return max;
}
