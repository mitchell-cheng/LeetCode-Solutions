/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function detectCycle(head) {
  let slow = head;
  let fast = head;

  // phase1: detect cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // phase2: find the entrance
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  return null;
};