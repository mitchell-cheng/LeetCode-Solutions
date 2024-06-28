const isValid = function (s: string): boolean {
  const map: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  const stack: string[] = [];

  for (const c of s) {
    if (!(c in map)) {
      stack.push(c);
      continue;
    }
    if (stack.length === 0 || map[c] !== stack[stack.length-1]) {
      return false;
    }
    stack.pop();
  }

  return stack.length === 0;
};