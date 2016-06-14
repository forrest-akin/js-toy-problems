// Even Occurrence
// Find the first item that occurs an even number of times in an array. 
// Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.

function evenOccurrence (arr) {
  var items = [...new Set(arr)];
  var itemCount = {}
  for (var i = 0; i < arr.length; i++)
    (!itemCount[arr[i]]) ? itemCount[arr[i]] = 1 : itemCount[arr[i]]++
  for (var i = 0; i < items.length; i++)
    if (itemCount[items[i]] % 2 === 0) return items[i];
  return null;
}
