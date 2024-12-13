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

// Time: O(nlogn) | Space: O(logn)
var sortList = function(head) {
  if (!head || !head.next) {
    return head
  }

  const mergeTwoLists = (list1, list2) => {
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

    curr.next = list1 ?? list2;

    return dummy.next;   
  };

  const getMiddle = (node) => {
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  const mid = getMiddle(head);
  const midNext = mid.next;
  mid.next = null;
  
  const leftSorted = sortList(head);
  const rightSorted = sortList(midNext);

  return mergeTwoLists(leftSorted, rightSorted);      
};