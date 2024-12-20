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
 * @return {number[]}
 */

// Time: O(n) | Space: O(h)
function inorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];

  const inorder = (node) => {
    if (!node) {
      return;
    }

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  };

  inorder(root);
  return result;
}

console.log(inorderTraversal([1, null, 2, 3])); // => [1, 3, 2];
