// 445. Add Two Numbers II



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
ll1.insert(7);
ll1.insert(2);
ll1.insert(4);
ll1.insert(3);

let ll2 = new LinkedList();
ll2.insert(5)
ll2.insert(6)
ll2.insert(4)

var addTwoNumbers = function(l1, l2) {
  let reverseLL = (head, prev = null) => {
      if (head === null) return null;
      let next = reverseLL(head.next, head);
      head.next = prev;
      return next || head;
  }

  let l1Reversed = reverseLL(l1);
  let l2Reversed = reverseLL(l2);

  let carryOver = 0;

  let current1 = l1Reversed;
  let current2 = l2Reversed;
  let result;
  let resultCurrentNode;

  while (current1 || current2) {
      let sum =
          current1 && current2
          ? current1.val + current2.val
          : !current1 && current2
          ? current2.val
          : current1.val;

      let newNode = new ListNode(sum % 10 + carryOver, null);

      if (sum >= 10) {
          carryOver = 1;
      } else {
          carryOver = 0;
      }

      if (!result) {
          result = newNode;
      }
      if (!resultCurrentNode) {
          resultCurrentNode = newNode;
      } else {
          resultCurrentNode.next = newNode;
          resultCurrentNode = newNode;
      }

      current1 = current1 ? current1.next : null;
      current2 = current2 ? current2.next : null;
  }

  return reverseLL(result);

};

let result = addTwoNumbers(ll1.head, ll2.head);
