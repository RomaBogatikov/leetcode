// Problem 371 Sum Of Two Integers


const sumOfTwo = (num1, num2) => {
  let carry = 0;
  result = '';
  while (num1 !== 0 || num2 !== 0) {
    let lastDigit1 = num1 & 1;
    let lastDigit2 = num2 & 1;
    let lastDigitResult = lastDigit1 ^ lastDigit2 ^ carry;
    if (lastDigitResult === 0 && (lastDigit1 === 1 || lastDigit2 === 1)) {
      carry = 1;
    } else {
      carry = 0;
    }
console.log(carry)
    num1 = num1 >> 1;
    num2 = num2 >> 1;

    result = String(lastDigitResult) + result;
  }

  if (carry) result = '1' + result;

  result = '0b' + result;
  // return result;
  return Number(result);
}

console.log(sumOfTwo(10, 11))
