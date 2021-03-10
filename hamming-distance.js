var hammingDistance = function(x, y) {
  let binaryX = '';
  let binaryY = '';

  while (x > 0) {
      binaryX = String(x % 2) + binaryX;
      x = Math.floor(x / 2);
  }
  while (y > 0) {
      binaryY = String(y % 2) + binaryY;
      y = Math.floor(y / 2);
  }

  if (binaryX.length > binaryY.length) {
      for (let i = 0; i < binaryX.length - binaryY.length; i++) {
          binaryY = '0' + binaryY;
      }
  }
  if (binaryY.length > binaryX.length) {
      for (let i = 0; i <= binaryY.length - binaryX.length; i++) {
          binaryX = '0' + binaryX;
      }
  }

  let count = 0;
  for (let i = 0; i < binaryX.length; i++) {
      if (binaryX[i] !== binaryY[i]) count++
  }

  return count;
};

let result = hammingDistance(2, 9)
