const twoSum = function(nums: number[], target: number): number[] {
  const hashmap: { [key: number]: number } = {};
  
  for (const [index, element] of nums.entries()) {
    const complement = target - element;
    if (complement in hashmap) {
      return [index, hashmap[complement]];
    }
    hashmap[element] = index;
  }
};