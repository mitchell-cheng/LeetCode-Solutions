class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || this.minStack.at(-1) >= val) {
      this.minStack.push(val);
    }
  }

  pop() {
    const poppedValue = this.stack.pop();
    if (poppedValue === this.minStack.at(-1)) {
      this.minStack.pop();
    }
  }

  top() {
    if (this.stack.length > 0) {
      return this.stack.at(-1);
    }
  }

  getMin() {
    if (this.minStack.length > 0) {
      return this.minStack.at(-1);
    }
  }
}
