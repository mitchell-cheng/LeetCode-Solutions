/**
 * @param {string} s
 * @return {boolean}
 */

// Time: O(n) | Space: O(n)
function isValid(s) {
  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const c of s) {
    if (!map.has(c)) {
      stack.push(c);
      continue;
    }

    if (map.get(c) === stack.at(-1)) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
}
