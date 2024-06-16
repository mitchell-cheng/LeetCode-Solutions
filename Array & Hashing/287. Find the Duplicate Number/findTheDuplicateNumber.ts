const findDuplicate = function(nums: number[], start: number = 0): number {
  const swap = (arr: number[], a: number, b: number): [number, number] => [arr[a], arr[b]] = [arr[b], arr[a]];

  const isSame = (): boolean => nums[start] === nums[nums[start]];
  while (!isSame()) {
    swap(nums, start, nums[start]);
  } 

  return nums[start];
};