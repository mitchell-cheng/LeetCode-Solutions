/**
 * Time: O(n) | Space: O(n)
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
  const stack = [];

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }

  return stack.join('');
};