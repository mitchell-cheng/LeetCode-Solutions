class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_map = {}
        freq_list = [[] for i in range(len(nums) + 1)]

        for num in nums:
            count_map[num] = count_map.get(num, 0) + 1

        for element, index in count_map.items():
            freq_list[index].append(element)
        
        res = []

        for i in range(len(freq_list)-1, 0, -1):
            for sub in freq_list[i]:
                res.append(sub)
                if len(res) == k:
                    return res
