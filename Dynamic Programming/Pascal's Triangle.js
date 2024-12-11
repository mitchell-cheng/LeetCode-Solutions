/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Time: O(n^2) | Space: O(n)
function generate(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i += 1) {
    const row = Array.from({ length: i + 1 }, () => 1);

    for (let j = 1; j < i; j += 1) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result.push(row);
  }

  return result;
}

console.log(generate(5));
// => [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
