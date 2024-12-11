/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(logn) | Space: O(1)
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // minimal value is on the right side
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2])); // => 1
