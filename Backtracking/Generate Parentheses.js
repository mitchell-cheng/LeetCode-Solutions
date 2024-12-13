/**
 * @param {number} n
 * @return {string[]}
 */

// Time: O(4^n / sqrt(n)) | Space: O(n)
function generateParenthesis(n) {
  const result = [];

  const backtrack = (open, close, current) => {
    if (open === n && close === n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, current + "(");
    }

    if (close < open) {
      backtrack(open, close + 1, current + ")");
    }
  };

  backtrack(0, 0, "");
  return result;
}

console.log(generateParenthesis(4)); // =>  ["((()))", "(()())", "(())()", "()(())", "()()()"]
