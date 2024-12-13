/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
var swapPairs = function(head) {
  const dummy = new ListNode(0, head);
  let curr = dummy;

  while (curr.next && curr.next.next) {
    const first = curr.next;
    const second = curr.next.next;

    curr.next = second;
    first.next = second.next;
    second.next = first;

    curr = first;
  }  

  return dummy.next;
};