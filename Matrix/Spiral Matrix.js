/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Time: O(m * n) | Space: O(1)
function spiralOrder(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      result.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }
      left += 1;
    }
  }

  return result;
}
