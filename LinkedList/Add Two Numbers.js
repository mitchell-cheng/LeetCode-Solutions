/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode(0, null);
  let carry = 0;
  let curr = dummy;

  while (l1 || l2 || carry) {
    const v1 = l1?.val ?? 0;
    const v2 = l2?.val ?? 0;
    const sum = v1 + v2 + carry;
    carry = sum > 9 ? 1 : 0;
    const node = new ListNode(sum % 10);
    curr.next = node;
    curr = curr.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;  
};