// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


var firstUniqChar = function(s) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
      if (!hashMap.hasOwnProperty(s[i])) {
          hashMap[s[i]] = 0;
      } else {
          hashMap[s[i]]++;
      }
  }

  let firstUniqueKey = '';
  let keysArray = Object.keys(hashMap);
  for (let i = 0; i < keysArray.length; i++) {
      if (hashMap[keysArray[i]] === 0) {
          firstUniqueKey = keysArray[i];
          break;
      }
  }

  if (firstUniqueKey !== '') {
      return s.indexOf(firstUniqueKey);
  } else {
      return -1;
  }
};
