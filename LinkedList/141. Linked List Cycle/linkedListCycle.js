/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */

// Time: O(n) | Space: O(1)
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};