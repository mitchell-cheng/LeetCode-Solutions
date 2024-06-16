class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashset = set(nums)
        longest = 0

        for num in hashset:
            if num-1 not in hashset:
                length = 1
                while num+length in hashset:
                    length += 1
                longest = max(longest, length)
        
        return longest