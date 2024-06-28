class MyQueue {
  constructor() {
    this._s1 = [];
    this._s2 = [];
  }

  push(x) {
    while (this._s1.length > 0) {
      this._s2.push(this._s1.pop());
    }
    this._s1.push(x);
    while (this._s2.length > 0) {
      this._s1.push(this._s2.pop());
    }
  }

  pop() {
    return this._s1.pop();
  }

  peek() {
    return this._s1[this._s1.length - 1];
  }

  empty() {
    return this._s1.length === 0;
  }
}