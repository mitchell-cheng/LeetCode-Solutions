/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time: O(n!) | Space: O(n)
function permute(nums) {
  const result = [];

  const backtrack = (current) => {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (const num of nums) {
      if (current.includes(num)) {
        continue;
      }

      current.push(num);
      backtrack(current);
      current.pop();
    }
  };

  backtrack([]);
  return result;
}

console.log(permute([1, 2, 3]));
/*
[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/
