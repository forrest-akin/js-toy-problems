function robotPaths (n) {
  var board = makeBoard(n);
  var traversePath = function (i, j) {
    if (i >= n  || i < 0 || j >= n || j < 0 || board.hasBeenVisited(i, j)) 
      return 0;
    if (i === n - 1 && j === n - 1) 
      return 1;
    var count = 0;
    board.togglePiece(i, j);
    count += traversePath(i + 1, j);
    count += traversePath(i, j + 1);
    count += traversePath(i - 1, j);
    count += traversePath(i, j - 1);
    board.togglePiece(i, j);
    return count;
  }
  return traversePath(0, 0);
}