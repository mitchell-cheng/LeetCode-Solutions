/**
 * Time: O(rows * cols) | Space: O(n^2)
 * @param {number} n
 * @return {number[][]}
 */

// Time: O(rows * cols) | Space: O(n^2)
const generateMatrix = function (n) {
  let matrix = Array.from(Array(n), () => Array(n));
  let [top, bot, left, right] = [0, n - 1, 0, n - 1];
  let element = 1;

  while (top <= bot && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = element++;
    }
    top++;

    for (let i = top; i <= bot; i++) {
      matrix[i][right] = element++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bot][i] = element++;
    }
    bot--;

    for (let i = bot; i >= top; i--) {
      matrix[i][left] = element++;
    }
    left++;
  }

  return matrix;
};
