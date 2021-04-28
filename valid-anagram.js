// 242. Valid Anagram

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
      if (!hashMap[s[i]]) {
          hashMap[s[i]] = 1;
      } else {
          hashMap[s[i]]++;
      }
  }


  let keysArray = Object.keys(hashMap);
  for (let i = 0; i < t.length; i++) {
      if (!hashMap.hasOwnProperty(t[i])) {
          return false
      } else {
          hashMap[t[i]]--;
      }

  }

  for (let i = 0; i < keysArray.length; i++) {
      if (hashMap[keysArray[i]] !== 0) return false;
  }

  return true;
};

var isAnagram = function(s, t) {
    const aCode = 'a'.charCodeAt(0);
    let letters = Array.from({ length: 26 }, () => 0);

    for (let i = 0; i < s.length; i++) {
        letters[s.charCodeAt(i) - aCode] += s.charCodeAt(i);
    }

    for (let i = 0; i < t.length; i++) {
        letters[t.charCodeAt(i) - aCode] -= t.charCodeAt(i)

    }

    return letters.every(l => l === 0)
};
