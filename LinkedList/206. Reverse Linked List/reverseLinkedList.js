/**
 * https://leetcode.com/problems/reverse-linked-list/description/
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};