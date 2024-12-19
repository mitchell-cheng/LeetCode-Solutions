/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Time: O(nlogk) | Space: O(1)
var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return null;
  // helper 
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
  }

  while (lists.length > 1) {
    const list1 = lists.shift();
    const list2 = lists.shift();
    // Or
    /*
      const list1 = lists.pop();
      const list2 = lists.pop();
    */
    const mergedList = mergeTwoLists(list1, list2);
    lists.push(mergedList);
  }
  
  return lists[0];
};