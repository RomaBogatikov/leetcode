// 283. Move Zeroes
// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.



var moveZeroes = function(nums) {
  const swap = (ind1, ind2) => {
      let temp = nums[ind1];
      nums[ind1] = nums[ind2];
      nums[ind2] = temp;
  }

  let swapIndex = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          swap(swapIndex, i);
          swapIndex++;
      }
  }
  return nums;
};

let arr = [0, 1, 0, 3, 12];

let result = moveZeroes(arr);
console.log(result);
