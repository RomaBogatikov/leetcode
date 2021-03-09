// 350. Intersection of Two Arrays II

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function(nums1, nums2) {
  let map1 = {};
 for (let i = 0; i < nums1.length; i++) {
     if (!map1[nums1[i]]) {
         map1[nums1[i]] = 1;
     } else {
         map1[nums1[i]]++;
     }
 }

 let result = [];
 for (let i = 0; i < nums2.length; i++) {
     if (map1[nums2[i]]) {
         result.push(nums2[i]);
         map1[nums2[i]]--;
     }
 }

 return result;
};

var intersect2 = function(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];
  while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] === nums2[p2]) {
          result.push(nums1[p1]);
          p1++;
          p2++;
      } else if (nums1[p1] < nums2[p2]) {
          p1++;
      } else if (nums1[p1] > nums2[p2]) {
          p2++;
      }
  }

  return result;
};

let nums1 = [1, 1, 2, 2];
let nums2 = [2, 2];

let result = intersect2(nums1, nums2)
console.log(result);
