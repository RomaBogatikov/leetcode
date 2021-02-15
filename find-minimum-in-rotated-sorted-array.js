// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums, return the minimum element of this array.


var findMin = function(nums) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midPoint = Math.floor(left + (right - left) / 2);
    if (nums[midPoint] < nums[right]) {
      right = midPoint;
    } else {
      left = midPoint + 1;
    }

  }
  return nums[left];
};


// let arr = [3, 4, 5, 1, 2];
// let arr = [4, 5, 6, 7, 0, 1, 2];
// let arr = [11, 13, 15, 17]
// let arr = [3, 1, 2];
// let arr = [1, 2];
let arr = [4, 5, 1, 2, 3]
let result = findMin(arr);

console.log(result)
