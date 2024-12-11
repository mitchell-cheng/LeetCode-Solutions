/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Time: O(m * n * 4^L) | Space: O(L)
function exist(board, word) {
  const m = board.length;
  const n = board[0].length;

  const dfs = (i, j, index) => {
    if (index === word.length) {
      return true;
    }

    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }

    const temp = board[i][j];
    board[i][j] = "0";
    const found =
      dfs(i - 1, j, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i, j - 1, index + 1) ||
      dfs(i, j + 1, index + 1);

    board[i][j] = temp;

    return found;
  };

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
// => true
