/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = head;

  for (let i = 0; i < n; i += 1) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};