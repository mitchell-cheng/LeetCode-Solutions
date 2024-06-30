/**
 * @param {Array<number>} arr The input array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of the target element in the array, or -1 if not found.
 * Time O(logn) | Space O(1)
 */

export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target  > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};