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
function diameterOfBinaryTree(root) {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  dfs(root);

  return diameter;
}
