/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time: O(n) | Space: O(1)
function nextPermutation(nums) {
  const reverse = (start, nums) => {
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
      right -= 1;
    }
  };

  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i -= 1;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j -= 1;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  reverse(i + 1, nums);

  return i + 1;
}
