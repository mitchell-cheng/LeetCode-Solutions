/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function middleNode(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }

  return slow;
};