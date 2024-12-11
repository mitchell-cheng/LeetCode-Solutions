/**
 * https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */

// Time: O(n) | Space: O(1)
function trainingPlan(head, cnt) {
  let slow = head;
  let fast = head;

  // move fast
  for (let i = 0; i < cnt; i += 1) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};