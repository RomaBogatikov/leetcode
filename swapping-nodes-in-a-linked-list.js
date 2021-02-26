// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

var swapNodes = function(head, k) {
  let dummy = new ListNode(null, head);
  let kthFromBeginning = dummy;
  for (let i = 1; i <= k; i++) {
      kthFromBeginning = kthFromBeginning.next;
  }

  let kthFromEnd = dummy;
  let fast = kthFromBeginning;
  while (fast) {
      kthFromEnd = kthFromEnd.next;
      fast = fast.next;
  }

  let temp = kthFromBeginning.val;
  kthFromBeginning.val = kthFromEnd.val;
  kthFromEnd.val = temp;

  return dummy.next;
};
