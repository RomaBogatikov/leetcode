
var groupAnagrams = function(strs) {
  let isAnagram = (str1, str2) => {
    if (str1 === '' && str2 === '') return true;
    if (str1 === '' || str2 === '') return false;
    let hash1 = {};
    let hash2 = {};

    for (let i = 0; i < str1.length; i++) {
      if (!hash1.hasOwnProperty(str1[i])) {
        hash1[str1[i]] = 0;
      } else {
        hash1[str1[i]]++;
      }
    }
    for (let i = 0; i < str2.length; i++) {
      if (!hash2.hasOwnProperty(str2[i])) {
        hash2[str2[i]] = 0;
      } else {
        hash2[str2[i]]++;
      }
    }

    return Object.keys(hash1).every(key => hash2.hasOwnProperty(key) && hash2[key] === hash1[key])
  }

  let hashMap = {};

  while (strs.length) {
      let str = strs.pop();
      hashMap[str] = [str];

      for (let i = 0; i < strs.length; i++) {
          if (isAnagram(str, strs[i])) {
              hashMap[str].push(strs[i]);
              let leftArr = strs.slice(0, i);
              let rightArr = strs.slice(i+1);
              strs = [...leftArr, ...rightArr];
              i--;
          }
      }
  }

  return Object.values(hashMap)
};

let arr = ['ac', 'c']
let result = groupAnagrams(arr);
console.log(result)
// console.log(isAnagram("ac","c"))
