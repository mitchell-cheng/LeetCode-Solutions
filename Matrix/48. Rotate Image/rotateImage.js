/**
 * Time: O(rows * cols) | Space: O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  reverse(matrix);
  transpose(matrix);
};

const reverse = (matrix) => {
  return matrix.reverse();
}

const transpose = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      swap(matrix, row, col);
    }
  }
}

const swap = (matrix, row, col) => {
  [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
}