/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time: O(logn) | Space: O(1)
var searchRange = function (nums, target) {
  const result = [-1, -1];

  const findLeftIndex = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

  const findRightIndex = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return right;
  };

  const leftIndex = findLeftIndex(nums, target);
  const rightIndex = findRightIndex(nums, target);

  if (
    leftIndex <= rightIndex &&
    leftIndex < nums.length &&
    nums[leftIndex] === target
  ) {
    result[0] = leftIndex;
    result[1] = rightIndex;
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// => [3,4]
