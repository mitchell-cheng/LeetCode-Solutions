def binary_search(arr, target):
    """
    Perform binary search on a sorted array.

    :param arr: List[int], The input array to be searched.
    :param target: int, The target integer to search within the array.
    :return: int, The index of the target element in the array, or -1 if not found.
    Time O(logn) | Space O(1)
    """
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if target < arr[mid]:
            right = mid - 1
        elif target > arr[mid]:
            left = mid + 1
        else:
            return mid

    return -1