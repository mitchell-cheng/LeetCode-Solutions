/**
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums, start = 0) {
  const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

  const isSame = () => nums[start] === nums[nums[start]];
  while (!isSame()) {
    swap(nums, start, nums[start]);
  } 

  return nums[start];
};