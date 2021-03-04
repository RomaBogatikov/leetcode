// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.



// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]


// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

var findErrorNums = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (!hash[nums[i]]) {
          hash[nums[i]] = 1
      } else {
          hash[nums[i]]++;
      }
  }

  let set = new Set(nums);
  let missingKey;
  let duplicateKey;
  for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
          missingKey = i;
      } else {
          if (hash[i] === 2) duplicateKey = i;
      }
  }
  return [duplicateKey, missingKey];
};

// O(n) time and O(1) space

var findErrorNums2 = function(nums) {
  let dup =  -1;
  let missing = 1;
  for (let n of nums) {
    if (nums[Math.abs(n) - 1] < 0) {
      dup = Math.abs(n);
    } else {
      nums[Math.abs(n) - 1] *= -1;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
    }
  }

  return [dup, missing];
}


let findMissingXOR = (nums) => {
  let xor = 0, xor0 = 0, xor1 = 0;

  for (let n of nums) {
    xor ^= n;
  }
  for (let i = 1; i < nums.length; i++) {
    xor ^= i;
  }

  let rightmostBit = xor & ~(xor - 1);
   for (let n of nums) {
     if ((n & rightmostBit) !== 0) {
       xor1 ^= n;
     } else {
       xor0 ^= n;
     }
   }

   for (let i = 1; i <= nums.length; i++) {
     if ((i & rightmostBit) !== 0) {
       xor1 ^= i;
     } else {
       xor0 ^= i;
     }
   }

   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === xor0) {
       return [xor0, xor1];
     }
   }

   return [xor1, xor0]
}

let arr = [1, 2, 4, 4, 5, 6];
let result = findMissingXOR(arr);
console.log(result)
