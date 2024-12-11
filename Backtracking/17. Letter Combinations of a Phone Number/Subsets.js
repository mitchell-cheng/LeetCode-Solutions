/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time: O(2^n) | Space: O(n)
function subsets(nums) {
  const result = [];

  const backtrack = (start, current) => {
    result.push([...current]);

    for (let i = start; i < nums.length; i += 1) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
/*
[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
*/
