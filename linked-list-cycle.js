// Leet code problem 142 solution
// https://leetcode.com/problems/linked-list-cycle-ii/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value, next = null) {
    let newNode = new Node(value, next);
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
ll.insert(3);
ll.insert(2);
ll.insert(0);
// ll.insert(4);
ll.insert(-4, ll.head.next);
// console.log(ll);

function detectCycle(head) {
  let slow = head;
  let fast = head;

  let cycle = false;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycle = true;
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      // break;
      return slow;
    }
  };

  // if (cycle === false) return null;

  // while (fast !== slow) {
  //   fast = fast.next.next;
  //   slow = slow.next;
  // }

  return fast;
}

console.log(detectCycle(ll.head))
