/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time: O(nlogn) | Space: O(n)
function topKFrequent(nums, k) {
  const hashmap = new Map();
  const result = [];

  for (const num of nums) {
    hashmap.set(num, (hashmap.get(num) ?? 0) + 1);
  }

  const arr = Array.from(hashmap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
