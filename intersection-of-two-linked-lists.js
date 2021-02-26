// 160. Intersection of Two Linked Lists
// Share
// Write a program to find the node at which the intersection of two singly linked lists begins.

// best solution (O(n) time O(1 space))
var getIntersectionNode = function(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;
  
  while (pointerA !== pointerB) {
      if (pointerA === null) {
          pointerA = headB;
      } else {
          pointerA = pointerA.next;
      }
      
      if (pointerB === null) {
          pointerB = headA;
      } else {
          pointerB = pointerB.next;
      }
  }
  
  return pointerA;
};

// brute force implementation O(n2) time, O(1) space
var getIntersectionNodeBruteForce = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  
  while (currentA && currentB) {
      while (currentB) {
          if (currentA === currentB) {
              return currentA;
          }
          currentB = currentB.next;
      }
      currentA = currentA.next;
      currentB = headB;
  }
  return null;
};

// WeakMap implementation O(n) time, O(n) space
var getIntersectionNodeWeakMap = function(headA, headB) {
  let weakMap = new WeakMap();

  let currentA = headA;
  let currentB = headB;

  while (currentA) {
    if (!weakMap.get(currentA)) weakMap.set(currentA, 1);
    currentA = currentA.next;
  }

  while (currentB) {
    if (weakMap.get(currentB)) return currentB;
    currentB = currentB.next;
  }
  return null;
};

// Basic implementation
var getIntersectionNode = function(headA, headB) {
  let lengthA = 0;
  let lengthB = 0;
  
  let currentA = headA;
  let currentB = headB;
  
  while (currentA) {
      lengthA++;
      currentA = currentA.next;
  }
  while (currentB) {
      lengthB++;
      currentB = currentB.next;
  }
  
  currentA = headA;
  currentB = headB;
  
  if (lengthA > lengthB) {
      while (lengthA > lengthB) {
          currentA = currentA.next;
          lengthA--;
      }
      
  } else {
      while (lengthB > lengthA) {
          currentB = currentB.next;
          lengthB--;
      }
  }
  
  while (currentA && currentB) {
      if (currentA === currentB) return currentA;
      currentA = currentA.next;
      currentB = currentB.next;
  }
  
  return null;
};