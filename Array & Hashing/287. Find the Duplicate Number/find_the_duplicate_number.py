class Solution:
    def findDuplicate(self, nums: List[int], start: int = 0) -> int:
      def swap(arr: List[int], a: int, b: int) -> None:
        arr[a], arr[b] = arr[b], arr[a]
      
      def is_same() -> bool:
        return nums[start] == nums[nums[start]]

      while not is_same():
        swap(nums, start, nums[start])
      
      return nums[start]
      