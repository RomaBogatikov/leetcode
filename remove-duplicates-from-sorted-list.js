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
ll.insert(1);
// ll.insert(1);
// ll.insert(1);
// ll.insert(1);
// ll.insert(3);
// ll.insert(3);
ll.insert(2);
ll.insert(3);
ll.insert(3);

// ll.insert(-4, ll.head.next);
console.log(ll);

let deleteDuplicates = (head) => {
  let current = head;
  let next;

  while (current && current.next) {
    next = current.next;

    let isDuplicate = false;
    while (next !== null && current.value === next.value) {
      isDuplicate = true;
      next = next.next;
    }
    if (isDuplicate) current.next = next;
    current = current.next;
  }

  return head;
}

let result = deleteDuplicates(ll.head);
console.log(result)


