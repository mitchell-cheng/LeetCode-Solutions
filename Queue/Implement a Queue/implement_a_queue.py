class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None
        self.prev = None

class Queue:
    def __init__(self):
        self._dummy_head = Node()
        self._dummy_tail = Node()
        self._dummy_head.prev = self._dummy_tail
        self._dummy_tail.next = self._dummy_head
        self._length = 0

    def enqueue(self, item):
        """Adds an item to the back of the queue.
        Args:
            item: The item to be pushed onto the queue.
        Returns:
            int: The new length of the queue.
        """
        node = Node(item)
        prev_last = self._dummy_tail.next
        prev_last.prev = node

        node.next = prev_last
        node.prev = self._dummy_tail
        self._dummy_tail.next = node
        self._length += 1
        return self._length

    def dequeue(self):
        """Remove an item from the front of the queue.
        Returns:
            The item at the front of the queue if it is not empty, `None` otherwise.
        """
        if self.is_empty():
            return None

        node = self._dummy_head.prev
        new_first = node.prev
        self._dummy_head.prev = new_first
        new_first.next = self._dummy_head
        # Unlink the node to be dequeued.
        node.prev = None
        node.next = None
        self._length -= 1
        return node.value

    def is_empty(self):
        """Determines if the queue is empty.
        Returns:
            bool: `True` if the queue has no items, `False` otherwise.
        """
        return self._length == 0

    def front(self):
        """Returns the item at the front of the queue without removing it from the queue.
        Returns:
            The item at the front of the queue if it is not empty, `None` otherwise.
        """
        if self.is_empty():
            return None

        return self._dummy_head.prev.value

    def back(self):
        """Returns the item at the back of the queue without removing it from the queue.
        Returns:
            The item at the back of the queue if it is not empty, `None` otherwise.
        """
        if self.is_empty():
            return None

        return self._dummy_tail.next.value

    def length(self):
        """Returns the number of items in the queue.
        Returns:
            int: The number of items in the queue.
        """
        return self._length
