// 143. Reorder List

// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
// ll1.insert(2);
// ll1.insert(3);
// ll1.insert(4);
// ll1.insert(5);

var reorderList = function(head) {
  let reverse = (head) => {
      let prev = null;
      let next = null
      while (head) {
          next = head.next;
          head.next = prev;
          prev = head;
          head = next;
      }
  }

  if (!head) return head;
  if (head && !head.next) return head;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // if the number of nodes is odd
  let middle;
  if (fast.next === null) {
    middle = slow;
  }

  fast = slow.next;
  slow.next = null;
  reverse(head);
  if (middle !== undefined) {
    slow = slow.next;
    middle.next = null;
  }

  let slowNext = slow.next;
  let fastNext = fast.next;

  if (middle !== undefined) {
    fast.next = middle;
  } else {
    fast.next = null;
  }

  while(slowNext && fastNext) {
    let slowPrev = slow;
    slow.next = fast;
    slow = slowNext;
    fast = fastNext;
    slowNext = slowNext.next;
    fastNext = fastNext.next;
    if (fast) fast.next = slowPrev;
  }
  slow.next = fast;
  return slow;
};


let result = reorderList(ll1.head)
console.log(result);
