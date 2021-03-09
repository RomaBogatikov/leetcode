// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.

var defangIPaddr1 = function(address) {
  return address.split('.').join('[.]')
};

var defangIPaddr2 = function(address) {
  let result = '';
  for (let i = 0; i < address.length; i++) {
      if (address[i] === '.') {
          result += '[.]'; 
      } else {
          result += address[i];
      }
  }
  return result;
};

var defangIPaddr = function(address) {
  let addressArr = address.split('.');
  let result = '';
  for (let i = 0; i < addressArr.length; i++) {
      if (i !== addressArr.length - 1) {
          result = result + addressArr[i] + '[.]'; 
      } else {
          result = result + addressArr[i];
      }
  }
  return result;
};
