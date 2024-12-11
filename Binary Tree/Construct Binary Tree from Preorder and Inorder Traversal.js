/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// Time: O(n) | Space: O(h)
function buildTree(preorder, inorder) {
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i += 1) {
    inorderMap.set(inorder[i], i);
  }

  const buildTreeHelper = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) {
      return null;
    }

    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    const rootIndex = inorderMap.get(rootVal);
    const leftSubtreeSize = rootIndex - inStart;

    root.left = buildTreeHelper(
      preStart + 1,
      preStart + leftSubtreeSize,
      inStart,
      rootIndex - 1
    );
    root.right = buildTreeHelper(
      preStart + leftSubtreeSize + 1,
      preEnd,
      rootIndex + 1,
      inEnd
    );

    return root;
  };

  return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
}
