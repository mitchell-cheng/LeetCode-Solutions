/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Time: O(n) | Space: O(1)
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let merged = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[merged] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[merged] = nums2[p2];
      p2 -= 1;
    }
    merged -= 1;
  }

  while (p1 >= 0) {
    nums1[merged] = nums1[p1];
    p1 -= 1;
    merged -= 1;
  }

  while (p2 >= 0) {
    nums1[merged] = nums2[p2];
    p2 -= 1;
    merged -= 1;
  }

  return nums1;
};