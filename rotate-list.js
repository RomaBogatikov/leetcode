// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.
// my solution
var rotateRight = function(head, k) {
  let dummy = new ListNode(null, head);
  let length = 0;
  let current = head;
  while (current) {
      length++;
      current = current.next;
  }

  k = k % length;
  if (k === 0) return head;

  let fast = dummy;
  let kthPrev = dummy;
  for (let i = 1; i <= k; i++) {
      fast = fast.next;
  };

  while (fast.next) {
      fast = fast.next;
      kthPrev = kthPrev.next;
  }
  let kth = kthPrev.next;

  fast.next = head;
  kthPrev.next = null;
  head = kth;
  return head;
};
