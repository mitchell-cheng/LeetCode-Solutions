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

// Time: O(n) | Space: O(n)
var zigzagLevelOrder = function(root) {
  if (!root || root.length === 0) {
    return [];
  }

  const queue = [root];
  const result = [];
  let leftToRight = true;

  while (queue.length !== 0) {
    const levelSize = queue.length;
    const levelNodes = [];
    
    for (let i = 0; i < levelSize; i += 1) {
      const node = queue.shift();

      if (leftToRight) {
        levelNodes.push(node.val);
      } else {
        levelNodes.unshift(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    leftToRight = !leftToRight;
    result.push(levelNodes);
  }

  return result;
};