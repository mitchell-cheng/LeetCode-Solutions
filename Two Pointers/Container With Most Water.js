/**
 * @param {number[]} height
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return result;
}
