/**
 Do not return anything, modify matrix in-place instead.
 */
 const rotate = function(matrix: number[][]): void {
  reverse(matrix);
  transpose(matrix);
};

const reverse = (matrix: number[][]): number[][] => {
  return matrix.reverse();
}

const transpose = (matrix: number[][]): void => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      swap(matrix, row, col);
    }
  }
}

const swap = (matrix: number[][], row: number, col: number): void => {
  [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
}