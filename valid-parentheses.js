let string = '[]{}()'

const isValid = (str) => {
  let stack = [];
  let helper = {
    '[': ']',
    '(': ')',
    '{': '}',
  }

  let current = 0;
  let currentChar = str.charAt(current);
  let loop = false;
  while (str.charAt(current) !== "") {
    loop = true;
    currentChar = str.charAt(current);
    if (helper[currentChar]) {
      stack.push(currentChar)
    } else {
      if (stack.length === 0) return false;
      let fromStack = stack.pop();
      let mapping = helper[fromStack]
      if (currentChar !== mapping) {
        return false;
      }
    }
    current++;
  }

  if (loop === true && !stack.length) { return true} else { return false }
}

const isValidTwo = (str) => {
  let stack = [];
  let map = {
    '[': ']',
    '(': ')',
    '{': '}',
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (map[currentChar]) {
      stack.push(currentChar);
    } else if (currentChar !== map[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('()'))
