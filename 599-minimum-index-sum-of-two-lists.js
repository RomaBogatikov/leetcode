// 599. Minimum Index Sum of Two Lists

// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.



// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Example 3:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 4:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]


// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.

// my first solution
var findRestaurant = function(list1, list2) {
  let map1 = {}
  for (let i = 0; i < list1.length; i++) {
      if (!map1[list1[i]]) {
          map1[list1[i]] = i;
      }
  }

  let overlap = {};
  let keys = [];
  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
      if (map1.hasOwnProperty(list2[i])) {
          overlap[list2[i]] = i + map1[list2[i]];
          keys.push(list2[i]);
          min = Math.min(min, overlap[list2[i]]);
      }
  };

  let result = [];
  for (let key of keys) {
      if (overlap[key] === min) result.push(key);
  }

  return result;
};

// a slight enhancement of my first solution
var findRestaurant = function(list1, list2) {
  let map1 = {}
  for (let i = 0; i < list1.length; i++) {
      if (!map1[list1[i]]) {
          map1[list1[i]] = i;
      }
  }

  let result = [];
  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
      if (map1.hasOwnProperty(list2[i])) {
          let indexSum = i + map1[list2[i]];
          if (indexSum < min) {
              result = [list2[i]];
          } else if (indexSum === min) {
              result.push(list2[i])
          }
          min = Math.min(min, indexSum);
      }
  };

  return result;
};

// my second solution
var findRestaurant = function(list1, list2) {
  let map1 = {}
  for (let i = 0; i < list1.length; i++) {
      if (!map1[list1[i]]) {
          map1[list1[i]] = i;
      }
  }

  let overlap = Array.from({length: 2002}, () => []);

  for (let i = 0; i < list2.length; i++) {
      if (map1.hasOwnProperty(list2[i])) {
          overlap[i + map1[list2[i]]].push(list2[i]);
      }
  };

  for (let i = 0; i< overlap.length; i++) {
      if (overlap[i].length) return overlap[i]
  }

};
