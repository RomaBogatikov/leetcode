var mySqrt = function(x) {
  if (x === 1) return 1;
  if (x === 0) return 0;
  let left = 0;
  let right = Math.floor(x/2) + 1;

  let eps = 0.00001;
  let previous = right;
  while (Math.abs(right - left) > eps) {
    if (right * right > x) {
      previous = right;
      right = (left + right) / 2;
    } else {
      left = right;
      right = previous;
    }
  }
  return Math.floor(right);
};

// let result = mySqrt(2147395599);
let result = mySqrt(8);

console.log(result);
