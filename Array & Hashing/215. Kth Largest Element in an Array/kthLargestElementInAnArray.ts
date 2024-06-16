const findKthLargest = function(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.enqueue(num);
    if (k < minHeap.size()) {
      minHeap.dequeue();
    }
  }

  return minHeap.front().element;
};