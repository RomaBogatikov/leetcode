// Problem 234. Palindrome linked list

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val, next = null) {
    let newNode = new ListNode(val, next);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;;
    }
  }
}

let ll1 = new LinkedList();

ll1.insert(1);
// ll1.insert(1);
// ll1.insert(3);
// ll1.insert(3);
// ll1.insert(1);

const isPalindrome = (head) => {
  if (head === null) return false;
  if (head.next === null) return true;
  if (head.next.next === null) {
    if (head.val === head.next.val) {
      return true;
    } else {
      return false;
    }
  }
  let dummy = new ListNode();

  let slow = head;
  let fast = head;

  let current = head;
  let next = head.next;


  while(fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next

    current.next = dummy.next;
    dummy.next = current;
    current = next;
    next = next.next;
  }
  current.next = dummy.next;

  // length of linked list is odd
  if (fast.next === null) {
    slow = slow.next;
    fast = next;
  } else {
    // length of linked list is even
    fast = next;
  }

  while (fast !== null && slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;

}

let result = isPalindrome(ll1.head);
console.log(result)