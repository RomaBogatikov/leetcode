// 1512. Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// my solution O(N) time O(N) space;
var numIdenticalPairs = function(nums) {
  let getNumberOfPairs = (number) => {
      let count = 0;
      number--;
      while (number > 0) {
          count += number;
          number--;
      }
      return count;
  }

  let arr = Array.from({length: 101}, () => []);
  for (let i = 0; i < nums.length; i++) {
      arr[nums[i]].push(i);
  }

  let numOfGoodPairs = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 1) {
          numOfGoodPairs += getNumberOfPairs(arr[i].length)
      }
  }

  return numOfGoodPairs;
};

// a better approach
var numIdenticalPairs2 = function(nums) {
  const map = {};
  let count = 0;
  nums.forEach(num => {
    if (map[num]) {
      count += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  })
  return count;
}
