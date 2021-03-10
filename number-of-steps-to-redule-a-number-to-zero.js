// 1342. Number of Steps to Reduce a Number to Zero

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12
 

// Constraints:

// 0 <= num <= 10^6

var numberOfSteps  = function(num) {
  let count = 0;
  while (num !== 0) {
      if ((num & 1) === 0) {
          num = num >> 1;
      } else {
          num = num - 1;
      }
      count++;
  }
  return count;
};

var numberOfSteps2  = function(num) {
  let count = 0;
  while (num !== 0) {
      if ((num & 1) === 1) {
          count++
      }
      num = num>>1;
      count++;
  }
  return count > 0 ? --count : 0;
};

let result = numberOfSteps2(14)