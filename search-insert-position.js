// 35. Search Insert Position

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let midPoint = Math.floor(left + (right - left)/2);
  while (left < right) {
    if (nums[midPoint] < target) {
      left = midPoint + 1;
    } else if (nums[midPoint] > target) {
      right = midPoint - 1;
    } else {
      return midPoint;
    }
    midPoint = Math.floor(left + (right - left)/2);
  }

  if (nums[midPoint] > target) return midPoint
  return midPoint + 1;
};

let result = searchInsert([1, 3, 5, 6], 0)

console.log(result)
