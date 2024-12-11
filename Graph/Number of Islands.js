/**
 * @param {character[][]} grid
 * @return {number}
 */

// Time: O(m * n) | Space: O(1)
function numIslands(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  let count = 0;

  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    grid[i][j] = "0";
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
// => 1
