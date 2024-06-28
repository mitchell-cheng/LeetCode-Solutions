export default class Stack {
  constructor() {
    this._items = [];
  }

  push(item) {
    return this._items.push(item);
  }

  pop() {
    return this._items.pop();
  }

  isEmpty() {
    return this._items.length() === 0;
  }

  peek() {
    return this.isEmpty() ? undefined : this._items[this.length() - 1];
  }

  length() {
    return this._items.length;
  }
}