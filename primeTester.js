// Prime Tester
// A prime number is an integer greater than 1 that has no divisors other than 
// itself and 1. Write a function that accepts a number and returns true if 
// it’s a prime number, false if it’s not. The grader is looking at the 
// efficiency of your solution (number of operations) as well as correctness! 

function primeTester (n, i = 1) {
  if (n < 2) return false;
  while (++i <= Math.sqrt(n)) if (n % i === 0) return false;
  return true;
}
