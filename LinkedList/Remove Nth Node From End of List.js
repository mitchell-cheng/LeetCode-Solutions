/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head);
  let left = dummy;
  let right = dummy;

  for (let i = 0; i < n; i += 1) {
    right = right.next;
  }

  while (right && right.next) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};