/**
 * @param {string} digits
 * @return {string[]}
 */

// Time: O(4^n) | Space: O(n)
function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const phoneMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const result = [];

  const backtrack = (current, index) => {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = phoneMap.get(digits[index]);

    for (const letter of letters) {
      backtrack(current + letter, index + 1);
    }
  };

  backtrack("", 0);

  return result;
}

console.log(letterCombinations("23"));
// =>  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
