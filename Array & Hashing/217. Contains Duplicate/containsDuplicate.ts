/**
 * Time O(1) | Space O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums: number[]): boolean {
  const numSet: Set<number> = new Set(nums);
  
  return numSet.size !== nums.length;
}