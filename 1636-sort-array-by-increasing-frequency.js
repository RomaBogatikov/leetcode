// 1636. Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.



// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]


// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

// my solution
var frequencySort = function(nums) {
  let map = nums.reduce((acc, num) => {
      if (!acc[num]) {
          acc[num] = 1;
      } else {
          acc[num]++;
      }
      return acc;
  }, {})

  let arr = Array.from({ length: 101 }, () => []);

  for (let i = 0; i < nums.length; i++) {
      arr[map[nums[i]]].push(nums[i]);
      if (arr[map[nums[i]]].length > 1) {
          arr[map[nums[i]]].sort((a, b) => b - a);
      }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length) {
          result = [...result, ...arr[i]]
      }
  }

  return result;
};
