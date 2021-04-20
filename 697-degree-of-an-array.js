// 697. Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.



// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

var findShortestSubArray = function(nums) {
  let mapping = nums.reduce((acc, num) => {
      if (!acc[num]) {
          acc[num] = 1;
      } else {
          acc[num]++;
      }
      return acc;
  }, {});

  let degree = Math.max(...Object.values(mapping));
  let maxDegreeNumArr = [];

  let keys = Object.keys(mapping);
  for (let key of keys) {
      if (mapping[key] === degree) {
          degree = mapping[key];
          maxDegreeNumArr.push(Number(key));
      }
  }

  let smLengths = maxDegreeNumArr.map(maxDegreeNum => {
      let smLength = 0;
      let flag = false;
      let degreeCopy = degree;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] === maxDegreeNum || flag) {
              smLength++;
              flag = true;
              if (nums[i] === maxDegreeNum) degreeCopy--;
              if (degreeCopy === 0) break;
          }
      }
      return smLength;
  })

  return Math.min(...smLengths);

};
