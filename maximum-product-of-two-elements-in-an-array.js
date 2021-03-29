// 1464. Maximum Product of Two Elements in an Array

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).


// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
// Example 3:

// Input: nums = [3,7]
// Output: 12


// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

// my solution
var maxProduct = function(nums) {
  let maxNum = 0;
  let maxNumIndex = 0;

  let secondMaxNum = 0;
  let secondMaxNumIndex = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= maxNum) {
          secondMaxNum = maxNum;
          secondMaxNumIndex = maxNumIndex;
          maxNum = nums[i];
          maxNumIndex = i;
          continue;
      }
      if (maxNum - nums[i] <= maxNum - secondMaxNum) {
          secondMaxNum = nums[i];
          secondMaxNumIndex = i;
      }
  }

  return (nums[maxNumIndex] - 1) * (nums[secondMaxNumIndex] - 1);
};

// a better approach
const maxProduct = nums => {
  let m1 = 0, m2 = 0;
  for (let val of nums) {
    m2 = Math.max(m2, Math.min(m1, val));
    m1 = Math.max(m1, val);
  }
}
