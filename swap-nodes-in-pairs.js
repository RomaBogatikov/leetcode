// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.


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

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
// ll.insert(4);



var swapPairs = function(head) {
  let swapNodes = (prevLeft, left, right) => {
      let rightNext = right.next;
      prevLeft.next = right;
      right.next = left;
      left.next = rightNext;
  }

  let dummy = new ListNode(null, head);
  let prevLeft = dummy;
  let left = prevLeft.next;
  let right = (!left) ? null : left.next;

  while (right) {
      swapNodes(prevLeft, left, right);
      right = (right && right.next && right.next.next && right.next.next.next ) ? right.next.next.next : null;
      left = (left && left.next) ? left.next : null;
      prevLeft = (prevLeft && prevLeft.next && prevLeft.next.next) ? prevLeft.next.next : null;
  }
  return dummy.next;
};

var swapPairsRecursive = function(head) {
  if (!head || !head.next) return head;
  let v1 = head, v2 = head.next, v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairsRecursive(v3);
  return v2;
}

// let result = swapPairs(ll.head)
let result = swapPairsRecursive(ll.head)

console.log(result);
