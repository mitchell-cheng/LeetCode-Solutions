/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function maxProduct(nums) {
  let maxProduct = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    const tempMax = currMax;
    const tempMin = currMin;

    currMax = Math.max(num, tempMax * num, tempMin * num);
    currMin = Math.min(num, tempMax * num, tempMin * num);

    maxProduct = Math.max(maxProduct, currMax);
  }

  return maxProduct;
}

console.log(maxProduct([2, 3, -2, 4])); // => 6
