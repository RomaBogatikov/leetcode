// 203. Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

var removeElementsDummy = function(head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  head = dummy;
  
  let current = head;
  while(current) {
      if (current.val === val) {
          dummy.next = current.next;
          current = current.next;
      } else {
          dummy = current;
          current = current.next;
      }
  }
  
  return head.next;
};

var removeElementsRecursive = function(head, val, prev = null) {
  // base case
  if (head === null) return null;
    
  let next = removeElementsRecursive(head.next, val, head);
  
  if (head.val === val) {
    if (prev !== null) {
      prev.next = next;
    }
    return next;
  } else {
    return head;
  }
};


class Node {
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
    let newNode = new Node(val, next);
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

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(6);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(6);

let result = removeElementsRecursive(ll.head, 1);
console.log(result)