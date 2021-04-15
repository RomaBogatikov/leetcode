// 53. Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

var maxSubArray = function(nums) {
  let p1 = 0;
  let p2 = 1;
  let maxS = nums[p1];
  let cumS = nums[p1];
  
  while (p2 < nums.length) {
      maxS = Math.max(maxS, cumS + nums[p2]);
      cumS = Math.max(cumS + nums[p2], nums[p2]);
      if (cumS < nums[p2]) {
          p1 = p2;
      }
      p2++;
  }
  
  return Math.max(maxS, ...nums);
};