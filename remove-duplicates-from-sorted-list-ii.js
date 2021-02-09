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
ll.insert(1);
// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.insert(3);
// ll.insert(3);
// ll.insert(3);
// ll.insert(4);
// ll.insert(4);
// ll.insert(5);
// ll.insert(4);
// ll.insert(5);
// ll.insert(6);
// ll.insert(6);

// ll.insert(-4, ll.head.next);
console.log(ll);

let deleteDuplicatesPrev = (head) => {
  let previous = null;
  let current = head;
  let next;

  // let beforeNext;
  while (current && current.next) {
    next = current.next;
    let isDuplicate = false;
    while (next !== null && current.value === next.value) {
      isDuplicate = true;
      next = next.next;
    }

    if (isDuplicate) {
      if (previous === null && next === null) {
        head = null;
        return head;
      } else if (previous === null && next !== null) {
        head = next;
        current = next;
      } else if (previous !== null) {
        previous.next = next;
        current = next;
      }
    } else {
      previous = current;
      current = next;
    }
  }

  return head;
}

const deleteDuplicatesDummy = (head) => {
  let dummy = new Node();
  dummy.next = head;
  head = dummy;

  let current = dummy.next;
  if (current === null) return head.next;
  let next = current.next;

  while(current && next) {
    let isDuplicate = false
    while (next !== null && current.value === next.value) {
      next = next.next;
      isDuplicate = true;
    }
    if (isDuplicate === true) {
      dummy.next = next;
    } else {
      dummy = dummy.next;
    }
    current = next;
    if (next === null) return head.next;
    next = next.next;
  }

  return head.next;

}

// let result = deleteDuplicatesPrev(ll.head);
let result = deleteDuplicatesDummy(ll.head);

console.log(result);

const removeValueDummy = (value) => {
  let dummy = new Node();
  dummy.next = ll.head;
  ll.head = dummy;
  let current = dummy.next;
  while (dummy.next !== null) {
    if (current.value === value) {
      dummy.next = current.next;
    } else {
      dummy = current;
    }
    current = current.next;
  }
}



// removeValueDummy(2)
// console.log(ll)


