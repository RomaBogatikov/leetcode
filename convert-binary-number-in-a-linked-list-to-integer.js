// 1290. Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.



// Example 1:


// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:

// Input: head = [0]
// Output: 0
// Example 3:

// Input: head = [1]
// Output: 1
// Example 4:

// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880
// Example 5:

// Input: head = [0,0]
// Output: 0


// Constraints:

// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.


var getDecimalValueRecursive = function(head) {
  let traverse = (node) => {
      if (!node) return -1;
      let decimalPlace = traverse(node.next) + 1;
      result += node.val * 2**decimalPlace;
      return decimalPlace;

  }

  let result = 0;
  traverse(head);
  return result;
};

var getDecimalValueIterative = function(head) {
  let length = 0;
  let current = head;
  while (current) {
      length++;
      current = current.next;
  }
  length--;

  let result = 0;
  current = head;
  while (length > -1) {
      result +=  current.val * 2**length;
      current = current.next;
      length--;
  }
  return result;

};
