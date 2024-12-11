/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time: O(logn) | Space: O(1)
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // => 2