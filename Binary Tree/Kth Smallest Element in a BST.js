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
 * @param {number} k
 * @return {number}
 */

// Time: O(n) | Space: O(h)
function kthSmallest(root, k) {
  if (!root) {
    return [];
  }

  let result = 0;
  let count = 0;

  const inorder = (node) => {
    if (!node) {
      return;
    }

    inorder(node.left);
    count += 1;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  };

  inorder(root);
  return result;
}
