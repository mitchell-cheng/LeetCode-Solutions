/**
 * Time O(NlogN) | Space O(N) 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hashmap = new Map();
  const result = [];

  for (const num of nums) {
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  const arr = Array.from(hashmap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }

  return result;
};