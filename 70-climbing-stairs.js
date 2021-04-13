// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45


let factorial = (num) => {
  let result = 1;
  while (num !== 0) {
      result *= num;
      num--;
  }

  return result;
}

var climbStairs = function(n) {
  let options = 0;
  let numOfTwos = 0;

  while (true) {
      if (numOfTwos * 2 < n) {
          if (numOfTwos > 0) {
              options += factorial(n - numOfTwos) / ( factorial(numOfTwos) * factorial(n - 2 * numOfTwos) );
              numOfTwos++;
          } else {
              options++;
              numOfTwos++;
          }

      } else {
          break;
      }
  }

  if (numOfTwos * 2 === n) {
      return options + 1;
  }

  return options;
};
