// 696. Count Binary Substrings

var countBinarySubstrings = function(s) {
  let countCons = (ind1, ind2) => {
      let count = 0;
      let left = ind1;
      let right = ind2;
      while (left < right) {
          if (s[left] !== s[right]) count++;
          left++;
          right--;
      }

      if (count === (ind2 - ind1 + 1) / 2) return count;
      return -1;
  }

  let result = {};

  for (let i = 1; i < s.length; i+=2) {
      for (let j = 0; j < s.length - i; j++) {
          let numOfCons = countCons(j, j+i)
          console.log(numOfCons)
          if (numOfCons !== -1) {
              if (!result[numOfCons]) {
                  result[numOfCons] = 1;
              } else {
                  result[numOfCons]++;
              }
          }
      }
  }

  console.log(result)
};

// countBinarySubstrings('10101')
let s = '001100'
let countCons = (ind1, ind2) => {
  let midPoint = (ind2 - ind1 + 1) / 2;
  let left = s[midPoint - 1];
  let right = s[midPoint];

  let count = 0;
  for (let i = 0; i < midPoint; i++) {
      if (s[i] === left && s[midPoint + i] === right && s[i] !== s[midPoint + i]) {
          count++
      } else {
          count = -1;
          break;
      }
  }

  return count;
}

console.log(countCons(1, 4))
