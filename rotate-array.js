// 189. Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


var rotate1 = function(nums, k) {
  let rotateRight = () => {
      let previous = nums[0];
      for (let i = 1; i < nums.length; i++) {
          let current = nums[i];
          nums[i] = previous;
          previous = current;
      }
      nums[0] = previous;
  }

  for (let i = 0; i < k; i++) {
      rotateRight();
  }

  return nums;
};

var rotate2 = function(nums, k) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[(i+k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }

  return result;
}

var rotateCyclic = function(nums, k) {
  let n = nums.length;
  k = k % n;

  let start = 0;
  let count = 0;
  while (count < n) {
    let current = start;
    let prev = nums[start];

    while (true) {
      let next_idx = (current + k) % n;
      let temp = nums[next_idx];
      nums[next_idx] = prev;
      prev = temp;
      current = next_idx;
      count++

      if (start === current) {
        break;
      }
    }
    start++;
  }

  return nums;
}

var rotateReverse = function(nums, k) {
  k = k % nums.length;
  if (k === 0) return nums;
  let reverse = (i, j) => {
      while (i < j) {
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          i++;
          j--
      }
  }

  reverse(0, nums.length - 1);
  reverse(0, k-1);
  reverse(k, nums.length - 1);

  return nums;
};


let arr = [1, 2, 3, 4, 5, 6]

let result = rotateCyclic(arr, 2)
console.log(result)
