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

let ll1 = new LinkedList();
let ll2 = new LinkedList();
ll1.insert(9);
ll1.insert(9);
ll1.insert(9);
ll1.insert(9);
ll1.insert(9);
ll1.insert(9);
ll1.insert(9);

ll2.insert(9);
ll2.insert(9);
ll2.insert(9);
ll2.insert(9);

// ll.insert(-4, ll.head.next);
console.log(ll1);

let addTwoNumbers = (l1, l2) => {
  let dummy2 = new Node(null);
  dummy2.next = l2;
  l2 = dummy2;

  let dummy1 = new Node(null);
  dummy1.next = l1;
  l1 = dummy1;

  let current1 = l1.next;
  let current2 = l2.next;

  let remainder = null;
  let sum;
  while (current1 && current2) {
    sum = current1.val + current2.val;
    remainder = sum % 10;
    if (dummy2.val >= 10) {
      current1.val = remainder + 1;
      if (current1.val >= 10) {
        current2.val = current1.val;
        current1.val = current1.val % 10;
      }
      current2.val = sum;
    } else {
      current1.val = remainder;
      current2.val = sum;
    }
    dummy2 = dummy2.next;
    dummy1 = dummy1.next;
    current2 = current2.next;
    current1 = current1.next;
  }

  if (current1 === null) {
    dummy1.next = current2;
    if (dummy2.val >= 10) {
      current2.val += 1;
    }
  }

  if (current2 === null) {
    if (dummy2.val >= 10) {
      current1.val += 1;
    }
  }

  return l1;
}

let result = addTwoNumbers(ll1.head, ll2.head);


