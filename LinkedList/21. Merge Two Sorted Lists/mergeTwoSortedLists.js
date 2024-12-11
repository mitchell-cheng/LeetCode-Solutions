/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0, null);
  let curr = dummy;
  
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  curr.next = list1 || list2;

  return dummy.next;
};