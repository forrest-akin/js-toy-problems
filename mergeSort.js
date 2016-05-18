function mergeSort(arr){
  if(arr.length < 2) return arr;
  var idx = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, idx)), 
    right = mergeSort(arr.slice(idx)),
    result = [];
  while(left.length || right.length) {
    if(!left.length) result.push(right.shift());
    else if(!right.length) result.push(left.shift());
    else result.push(left[0] >= right[0] ? right.shift() : left.shift());
  }
  return result;
}