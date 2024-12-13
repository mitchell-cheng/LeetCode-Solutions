/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
var reverseBetween = function(head, left, right) {
  const dummy = node = new ListNode(0, head);

  let leftPrev = dummy;
  let curr = head;
  let prev = null;

  for (let i = 0; i < left - 1; i += 1) {
    leftPrev = leftPrev.next;
    curr = curr.next;
  }

  // for (let i = 0; i < right - left + 1; i += 1) {
  for (let i = left; i <= right; i += 1) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;  
};