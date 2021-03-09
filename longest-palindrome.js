// 409. Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2


// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

// my solution
var longestPalindrome = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
          map[s[i]] = 1;
      } else {
          map[s[i]]++;
      }
  }

  let longestOdd = 0;
  let allEven = 0;

  let valuesArray = Object.values(map);

  for (let value of valuesArray) {
      if (value % 2 === 0) {
          allEven += value;
      } else {
          if (value > longestOdd) longestOdd = value;
      }
  }

  let result = allEven + longestOdd;
  return result;
};

// looked up this one
var longestPalindrome2 = (s) => {
  let map = {};
  let result = 0;

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
    if (map[char] % 2 === 0) result += 2;
  }

  if (s.length > result) return result + 1;
  return result;
}

// let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

let s = "abccccddAAAFFFFF"

let result = longestPalindrome(s)
