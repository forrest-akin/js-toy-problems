// Rotate Matrix
// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.

function rotateMatrix (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var rotated = [];
  matrix.forEach((row, i) => {
    rotated.push([]);
    row.forEach((val, j) => rotated[i][j] = matrix[n - j - 1][i]);
  });
  return rotated;
}
