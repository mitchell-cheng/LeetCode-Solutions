/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Time: O(N^(T/M)) | Space: O(T/M)
function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (start, current, sum) => {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i += 1) {
      if (candidates[i] > target - sum) {
        continue;
      }

      current.push(candidates[i]);
      backtrack(i, current, candidates[i] + sum);
      current.pop();
    }
  };

  backtrack(0, [], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
// => [[2,2,3],[7]]
