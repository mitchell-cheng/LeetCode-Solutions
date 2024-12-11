/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Time: O(nlogn) | Space: O(n)
function merge(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i += 1) {
    if (result.at(-1)[1] >= intervals[i][0]) {
      result.at(-1)[1] = Math.max(intervals[i][1], result.at(-1)[1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
}
