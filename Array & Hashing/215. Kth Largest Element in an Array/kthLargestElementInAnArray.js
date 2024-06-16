/**
 * Time O(NlogK) | Space O(K)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.enqueue(num);
    if (k < minHeap.size()) {
      minHeap.dequeue();
    }
  }

  return minHeap.front().element;
};