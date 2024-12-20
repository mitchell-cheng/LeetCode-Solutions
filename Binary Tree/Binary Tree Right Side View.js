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
 * @return {number[][]}
 */

// Time: O(n) | Space: O(h)
function rightSideView(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i += 1) {
      const node = queue.shift();
      if (i === levelSize - 1) {
        result.push(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}
