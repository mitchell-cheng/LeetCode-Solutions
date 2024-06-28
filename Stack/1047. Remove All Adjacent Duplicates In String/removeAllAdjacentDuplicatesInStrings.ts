const removeDuplicates = function(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }

  return stack.join('');
};