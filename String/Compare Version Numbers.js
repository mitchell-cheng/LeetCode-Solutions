/**
 * Time: O(n) | Space: O(1)
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function(version1, version2) {
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");

  const max = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < max; i++) {
    const v1 = parseInt(v1Arr[i]) || 0;
    const v2 = parseInt(v2Arr[i]) || 0;
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    } else {
      continue;
    }
  }

  return 0;
};