/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Time: O(n^2) | Space: O(n)
function dailyTemperatures(temperatures) {
  const stack = [];
  const result = Array.from({ length: temperatures.length }, () => 0);

  for (let i = 0; i < temperatures.length; i += 1) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      const prevDay = stack.pop();
      result[prevDay] = i - prevDay;
    }

    stack.push(i);
  }

  return result;
}
