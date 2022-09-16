


console.log('hello')
// completed the area and volume

// Given two integers a and b, which can be positive or negative, find the sum of all the integers 
//between and including them and return it. If the two numbers are equal return a or b.

// This will need math function and a for loop
// function getSum( a,b )
// {
//    Math.getSum(a,b)
// }
// we will set compare a and b, whichever is smaller will be x
// y will be the larger one, if equal set as z
function getSum(a, b) {
  let x = Math.min(a, b); 
  let y = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
  sum += i
  }
  if (x === y) return y;
  else return sum;
}
