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
// ll1.insert(2);
// ll1.insert(3);
// ll1.insert(4);
// ll1.insert(5);
// ll1.insert(6);
// ll1.insert(7);
// ll1.insert(8);

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

// let result = reverseBetween(ll1.head, 2);
// console.log(result);



const reverseBetweenRecursive = (head, m, n) => {
  if (!head) return null;

  let left = head;
  let right = head;
  let stop = false;

  const recurseAndReverse = (right, m, n) => {
    // base case, don't proceed any further
    if (n === 1) return;

    // keep moving the right pointer one step forward until (n === 1)
    right = right.next;

    // keep moving the left pointer to the right until we reach the proper node
    // from where the reversal is to start
    if (m > 1) {
      left = left.next;
    }

    // recurse with m and n reduced
    recurseAndReverse(right, m-1, n-1);

    // In case both pointers cross each other or become equal, we stop, i.e. don't swap data any further. We are done reversing at this point

    if (left === right || right.next === left) {
      stop = true;
    }

    if (!stop) {
      let temp = left.val;
      left.val = right.val;
      right.val = temp;

      // move left one step to the right
      // the right pointer moves one step back via backtracking
      left = left.next;
    }
  }

  recurseAndReverse(right, m, n);
  return head;
}

// let result = reverseBetweenRecursive(ll1.head, 3, 6);
// console.log(result)


const reverseBetweenIterative2 = (head, m, n) => {
  if (!head) return null;
  let current = head;
  let previous = null;

  while (m > 1) {
    previous = current;
    current = current.next;
    m--;
    n--;
  }

  let tail = current;
  let nodeBeforeM = previous;

  let next = current.next;
  while (n > 1) {
    current.next = previous;
    previous = current;
    current = next;
    next = next.next;
    n--
  }
  current.next = previous;

  if (nodeBeforeM) {
    nodeBeforeM.next = current;
  } else {
    head = current;
  }
  tail.next = next;

  return head;
}

let result = reverseBetweenIterative2(ll1.head, 1);
console.log(result)
