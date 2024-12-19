/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// Time: O(n) | Space: O(1)
function addStrings(num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  let result = '';

  while (p1 >= 0 || p2 >= 0 || carry) {
    const digit1 = Number(num1[p1] ?? 0);
    const digit2 = Number(num2[p2] ?? 0);
    const sum = digit1 + digit2 + carry;

    carry = sum > 9 ? 1 : 0;
    result = (sum % 10) + result;
    p1 -= 1;
    p2 -= 1;
  }

  return result;
};