/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Time: O(n) | Space: O(h)
var sumNumbers = function(root) {
  const dfs = (node, currentSum) => {
    // base case
    if (!node) {
      return 0;
    }

    currentSum = currentSum * 10 + node.val;

    if (!node.left && !node.right) {
      return currentSum;
    }

    return dfs(node.left, currentSum) + dfs(node.right, currentSum);
  }

  return dfs(root, 0);
};