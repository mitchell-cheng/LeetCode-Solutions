/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function reverseBetween(head, left, right) {
  const dummy = new ListNode(0, head);
  let leftPrev = dummy;
  let curr = head;

  // move curr to left
  for (let i = 0; i < left - 1; i += 1) {
    leftPrev = leftPrev.next;
    curr = curr.next;
  }

  // reverse between left and right
  let prev = null;
  for (let i = 0; i < right - left + 1; i += 1) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // hook leftPrev
  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
};