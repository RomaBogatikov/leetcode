// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let midPoint = Math.floor(left + (right - left) / 2);
      if (nums[midPoint] === target) return midPoint;
      if (nums[midPoint] < nums[right]) {
        // inflection is to the left
        if (target >=nums[midPoint] && target <= nums[right]) {
          // search right half
          left = midPoint+1;
        } else {
          // search left half
          right = midPoint-1;
        }
      } else {
        // inflection is to the right
        if (target <= nums[midPoint] && target >= nums[left]) {
          // search left half
          right = midPoint-1;
        } else {
          // search right half
          left = midPoint+1;
        }
      }
    }

    return -1;
};

let arr = [1];
let result = search(arr,0)

console.log(result);
