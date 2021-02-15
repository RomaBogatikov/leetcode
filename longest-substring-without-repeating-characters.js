var lengthOfLongestSubstring = function(s) {
  let checkForDuplicates = (left, right, char) => {
      for (let i = left; i < right; i++) {
          if (s[i] === char) return true;
      }
      return false;
  }

  let resultArray = [];

  let p1 = 0;
  let p2 = 0;

  let subStringNoDuplicates = s[p1];

  while (s[p2]) {
    p2++;
    if (s[p2] === undefined) {
      resultArray.push(subStringNoDuplicates);
      break;
    }
    if (checkForDuplicates(p1, p2, s[p2])) {
      resultArray.push(subStringNoDuplicates);
      p1++;
      p2 = p1;
      subStringNoDuplicates = s[p1];
    } else {
      subStringNoDuplicates += s[p2];
    }
  }

  let maxStringLength = 0;
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i].length > maxStringLength) {
      maxStringLength = resultArray[i].length;
    }
  }

  return maxStringLength;
};

let input = "dvdf";

let result = lengthOfLongestSubstring(input);

console.log(result);

