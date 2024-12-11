/**
 * @param {number[][]} grid
 * @return {number}
 */

// Time: O(m * n) | Space: O(1)
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let j = 1; j < n; j += 1) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < m; i += 1) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); // => 7
