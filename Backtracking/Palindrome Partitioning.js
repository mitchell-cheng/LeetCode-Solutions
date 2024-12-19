/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
  const result = [];

  // helper 
  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left += 1;
      right -= 1;
    }

    return true;
  }

  const backtrack = (start, current) => {
    // handle end case
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < s.length; i += 1) {
      if (isPalindrome(s, start, i)) {
        current.push(s.slice(start, i + 1));
        backtrack(i + 1, current);
        current.pop();
      }
    }
  }

  backtrack(0, []);
 
  return result;
};