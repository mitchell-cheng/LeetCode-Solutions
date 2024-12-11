/**
 * @param {number[]} height
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function trap(height) {
  let water = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] <= leftMax) {
        water += leftMax - height[left];
      } else {
        leftMax = height[left];
      }
      left += 1;
    } else {
      if (height[right] <= rightMax) {
        water += rightMax - height[right];
      } else {
        rightMax = height[right];
      }
      right -= 1;
    }
  }

  return water;
}
