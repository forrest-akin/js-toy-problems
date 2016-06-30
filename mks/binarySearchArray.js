// Binary Search Array
// Given a sorted array of integers, find the index of a target value using a 
// binary search algorithm.

// A binary search finds an item in a sorted array by repeatedly choosing a 
// middle value and dividing the search interval in half. The initial interval 
// includes the whole array. If the value of the target value is less than the 
// middle value of the interval, then the next interval will be the lower half 
// of the current interval. If the value of the target value is greater than 
// the middle value, then the next interval will be the upper half. The search 
// process repeats until the middle value is equal to the target value, or the 
// search interval is empty.


// Note:
// Your function should return -1 for target values not in the array. 

// Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

function binarySearch (array, target) {
  const recurse = (subArr, baseIdx) => {
    if(subArr.length === 0) return -1;
    let idx = Math.floor(subArr.length / 2);
    let val = subArr[idx];
    return target === val ? baseIdx + idx : target < val ? recurse(subArr.slice(0, idx), baseIdx) : recurse(subArr.slice(idx + 1), baseIdx + idx + 1);
  }
  return recurse(array, 0);
}