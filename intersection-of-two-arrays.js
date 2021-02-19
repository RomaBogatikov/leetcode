// Problem 349. Intersection of Two Arrays

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

var intersection = function(nums1, nums2) {
  let hashMapUnity = {};
  let resultIntersection = [];

  let nums1Length = nums1.length;
  for (let i = 0; i < nums1Length; i++) {
      if (!hashMapUnity.hasOwnProperty(nums1[i])) {
          hashMapUnity[nums1[i]] = 0;
      }
  }

  let nums2Length = nums2.length;
  for (let i = 0; i < nums2Length; i++) {
      if (nums2[i] in hashMapUnity) {
          hashMapUnity[nums2[i]]++;
      }
  }

  let keysArray = Object.keys(hashMapUnity);
  let keysArrayLength = keysArray.length;

  for (let i = 0; i < keysArrayLength; i++) {
      if (hashMapUnity[keysArray[i]] > 0) {
          resultIntersection.push(keysArray[i])
      }
  }

  return resultIntersection;
};



// FOR LATER REVIEW

// This is a Facebook interview question.
// They ask for the intersection, which has a trivial solution using a hash or a set.

// Then they ask you to solve it under these constraints:
// O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).
// You are told the lists are sorted.

// Cases to take into consideration include:
// duplicates, negative values, single value lists, 0's, and empty list arguments.
// Other considerations might include
// sparse arrays.

// function intersections(l1, l2) {
//     l1.sort((a, b) => a - b) // assume sorted
//     l2.sort((a, b) => a - b) // assume sorted
//     const intersections = []
//     let l = 0, r = 0;
//     while ((l2[l] && l1[r]) !== undefined) {
//        const left = l1[r], right = l2[l];
//         if (right === left) {
//             intersections.push(right)
//             while (left === l1[r]) r++;
//             while (right === l2[l]) l++;
//             continue;
//         }
//         if (right > left) while (left === l1[r]) r++;
//          else while (right === l2[l]) l++;

//     }
//     return intersections;
// }
