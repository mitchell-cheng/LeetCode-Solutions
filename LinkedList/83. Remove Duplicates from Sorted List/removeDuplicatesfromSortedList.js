/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function deleteDuplicates(head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
