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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// Time: O(n) | Space: O(h)
function flatten(root) {
  let curr = root;

  while (curr) {
    if (curr.left) {
      let rightmost = curr.left;
      while (rightmost.right) {
        rightmost = rightmost.right;
      }
      rightmost.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }

    curr = curr.right;
  }

  return curr;
}
