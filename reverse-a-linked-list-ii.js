// Problem 92. Reverse Linked List II
// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

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
ll1.insert(2);
// ll1.insert(3);
// ll1.insert(4);
// ll1.insert(5);

const reverseBetween = (head, m, n) => {
  let dummy = new ListNode();
  dummy.next = head;
  head = dummy;
  let current = head.next;
  if (current.next === null || m === n || !m || !n) return head.next;
  for (let i = 1; i < m; i++) {
    current = current.next;
    dummy = dummy.next;
  }
  let dummy2 = new ListNode();
  dummy2 = current;
  current = current.next;
  let next = current.next;
  for (let j = m; j < n; j++) {
    current.next = dummy2;

    dummy2 = current;
    current = next;
    next = (next === null) ? next : next.next;
  }
  
  dummy.next.next = current;
  dummy.next = dummy2;
  
  return head.next;  
}

let result = reverseBetween(ll1.head, 2);
console.log(result);

