const topKFrequent = function(nums: number[], k: number): number[] {
  const hashmap: Map<number, number> = new Map();
  const result: number[] = [];

  for (const num of nums) {
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  const arr: number[][] = Array.from(hashmap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }

  return result;   
};