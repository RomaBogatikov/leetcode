// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

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
ll.insert(4);
ll.insert(5);

var removeNthFromEnd = function(head, n) {
  let length = 0;
  let current = head;
  while (current) {
      length++;
      current = current.next;
  }
  current = head;
  let prev = null;
  while (length > n) {
      prev = current;
      current = current.next;
      length--;
  }

  if (current === head) {
      head = head.next;
      return head;
  }

  prev.next = current.next;
  return head;
};

var removeNthFromEndRecursive = function(head, n, prev = null) {
  let traverseAndRemove = (head, n, prev) => {
    if (head === null) {
      flag = true;
      return null;
    };

    let next = traverseAndRemove(head.next, n, head);
    if (flag) {
      countFromEnd++
    }

    if (countFromEnd === n) {
      if (prev === null) {
        head = next;
      } else {
        prev.next = next;
      }
    }

    return head;
  }

  let flag = false;
  let countFromEnd = 0;
  head = traverseAndRemove(head, n, prev);
  return head;
}

var removeNthFromEndTwoPointers = function(head, n) {
  let newHead = new ListNode(null, head);
  let slow = newHead;
  let fast = newHead;
  while (n) {
    fast = fast.next;
    n--;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return newHead.next;
}

// const result = removeNthFromEndRecursive(ll.head, 5)
const result = removeNthFromEndTwoPointers(ll.head, 1)

console.log(result);
