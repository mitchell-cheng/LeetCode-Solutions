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
var deleteDuplicates = function(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      const duplicateValue = curr.val;
      while (curr && curr.val === duplicateValue) {
        curr = curr.next;
      } 
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;  
};