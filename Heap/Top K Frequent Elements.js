/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time: O(nlogn) | Space: O(n)
function topKFrequent(nums, k) {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const num in frequencyMap) {
    const frequency = frequencyMap[num];
    buckets[frequency].push(Number(num));
  }

  const result = [];

  for (let i = buckets.length - 1; i >= 0 && k > 0; i -= 1) {
    if (buckets[i].length > 0) {
      for (const num of buckets[i]) {
        result.push(num);
        k -= 1;
        if (k === 0) {
          break;
        }
      }
    }
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
