// 905. Sort Array By Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.



// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

var sortArrayByParity = function(A) {
  let result = [];
  for (number of A) {
      if ((number & 1) === 0) {
          result.unshift(number);
      } else {
          result.push(number);
      }
  }
  return result;
};

// modify array A in place
var sortArrayByParity = function(A) {
  // let swap = (ind1, ind2) => {
  //     let temp = A[ind1];
  //     A[ind1] = A[ind2];
  //     A[ind2] = temp;
  // }

  let swapIndex = 0;
  for (let i = 0; i < A.length; i++) {
      if ((A[i] & 1) === 0) {
          // swap(swapIndex, i);
          [A[swapIndex], A[i]] = [A[i], A[swapIndex]];
          swapIndex++;
      }
  }

  return A;
};

