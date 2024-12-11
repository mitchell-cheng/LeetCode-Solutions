/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Time: O(n) | Space: O(logn)
function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return [];
  }

  const buildBST = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildBST(left, mid - 1);
    root.right = buildBST(mid + 1, right);

    return root;
  };

  return buildBST(0, nums.length - 1);
}
