class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        for idx, ele in enumerate(nums):
          complement = target - ele
          if (complement in hashmap):
              return [idx, hashmap[complement]]
          hashmap[ele] = idx