class MyQueue:

    def __init__(self):
        self._s1 = []
        self._s2 = []

    def push(self, x: int) -> None:
        self._s1.append(x)

    def pop(self) -> int:
        if len(self._s2) == 0:
            while len(self._s1) > 0:
                self._s2.append(self._s1.pop())
        return self._s2.pop()

    def peek(self) -> int:
      if len(self._s2) == 0:
          while len(self._s1) > 0:
              self._s2.append(self._s1.pop())
      return self._s2[len(self._s2) - 1]

    def empty(self) -> bool:
        return len(self._s1) == 0 and len(self._s2) == 0
