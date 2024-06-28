class Stack:
    def __init__(self):
        self._items = []
    
    def push(self, item):
        self._items.append(item)
    
    def pop(self):
        return self._items.pop() if not self.is_empty() else None
    
    def is_empty(self):
        return self.length() == 0
  
    def peek(self):
        return self._items[-1] if not self.is_empty() else None

    def length(self):
        return len(self._items)
