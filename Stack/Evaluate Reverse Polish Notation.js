/**
 * @param {string[]} tokens
 * @return {number}
 */

// Time: O(n) | Space: O(n) 
var evalRPN = function(tokens) {
  const operatorMap = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => Math.trunc(a / b)]
  ]);
  const stack = [];

  for (const token of tokens) {
    if (operatorMap.has(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      stack.push(operatorMap.get(token)(operand1, operand2));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};