/**
 * Time: O(n) | Space: O(n)
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  const stack = [];

  for (const c of s) {
    if (!(c in map)) {
      stack.push(c);
      continue;
    }
    if (stack.length === 0 || map[c] !== stack[stack.length-1]) {
      return false;
    }
    stack.pop();
  }

  return stack.length === 0;
};