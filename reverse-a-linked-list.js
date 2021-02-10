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

  reverseIterativePrev() {
    if (this.head === null) return this.head;
    let previous = null;
    let current = this.head;
    let next = this.head.next;

    while (current!== null && next!== null) {
      current.next = previous;

      previous = current;
      current = next;
      next = next.next;
    }
    current.next = previous;
    this.head = current;
    return this.head
  }

  reverseIterativePrev2() {
    let previous = null;
    while(this.head) {
      let next = this.head.next;
      this.head.next = previous;
      previous = this.head;
      this.head = next;
    }
    this.head = previous;
    return this.head;
  }

  reverseDummy() {
    if (this.head === null) return this.head;
    let dummy = new Node();

    let current = this.head;
    let next = current.next;

    while (current !== null && next !== null) {
      current.next = dummy.next;

      dummy.next = current;
      current = next;
      next = next.next;
    }
    current.next = dummy.next;
    this.head = current;;

    return this.head;
  }

  reverseRecursive() {
    const reverse = (previous, current, next) => {
      if (current === null && next === null) {
        this.head = previous;
        return this.head;
      }

      current.next = previous;
      previous = current;
      current = next;
      next = (next === null) ? next : next.next;

      return reverse(previous, current, next)
    }

    if (this.head === null) return this.head;
    let previous = null;
    let current = this.head;
    let next = this.head.next;
    return reverse(previous, current, next)
  }

}

const reverseRecursive2 = (head, prev = null) => {
  if (head === null) {
    return null
  }

  const next = reverseRecursive2(head.next, head);
  head.next = prev;
  return next || head;
}
let ll1 = new LinkedList();
ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
// ll1.insert(4);
// ll1.insert(5);

// let result = ll1.reverseIterativePrev2();
// let result = ll1.reverseDummy();
// let result2 = ll1.reverseRecursive();
let result3 = reverseRecursive2(ll1.head)
console.log(result)

