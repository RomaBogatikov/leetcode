// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

// solution with creating a new linked list
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  let res = new ListNode(null);
  let returnRoot = res;
  while (l1 && l2) {
      if (l1.val <= l2.val) {
          let newNode = new ListNode(l1.val);
          res.next = newNode;
          res = res.next;
          l1 = l1.next;
      } else {
          let newNode = new ListNode(l2.val);
          res.next = newNode;
          res = res.next;
          l2 = l2.next;
      }
  }

  while (l1) {
      let newNode = new ListNode(l1.val);
      res.next = newNode;
      res = res.next;
      l1 = l1.next;
  }

  while (l2) {
      let newNode = new ListNode(l2.val);
      res.next = newNode;
      res = res.next;
      l2 = l2.next;
  }

  return returnRoot.next;
};

// solution with modifying l1 and l2 linked lists
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  let dummy = new ListNode(null);

  let returnRoot;

  while (l1 && l2) {
      if (dummy.val !== null) {
          if (l1.val <= l2.val) {
              dummy.next = l1;
              dummy = dummy.next;
              l1 = l1.next
          } else {
              dummy.next = l2;
              dummy = dummy.next;
              l2 = l2.next;
          }
      } else {
          if (l1.val <= l2.val) {
              returnRoot = l1;
              dummy.next = l1;
              dummy = dummy.next;
              l1 = l1.next;
          } else {
              returnRoot = l2;
              dummy.next = l2;
              dummy = dummy.next;
              l2 = l2.next;
          }
      }
  }

  if (l2) {
      dummy.next = l2;
  }

  if (l1) {
      dummy.next = l1;
  }

  return returnRoot;
};


// a cleaner solution

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(null);
  let head = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  dummy.next = l1 || l2;

  return head.next;
}
