const longestConsecutive = function(nums: number[]): number {
  const hashset: Set<number> = new Set(nums);
  let longest: number = 0;

  for (const element of hashset) {
    if (!hashset.has(element-1)) {
      let length = 1;
      while (hashset.has(element+length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
};