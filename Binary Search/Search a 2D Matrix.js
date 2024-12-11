/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time: O(logn) | Space: O(1)
function searchMatrix(matrix, target) {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
// => false
