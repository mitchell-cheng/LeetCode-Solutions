class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // helper 
  removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    const node = this.cache.get(key);
    this.removeNode(node);
    this.addToHead(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.removeNode(node);
    }

    const newNode = new ListNode(key, value);
    this.addToHead(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size > this.capacity) {
      const tailNode = this.tail.prev;
      this.removeNode(tailNode);
      this.cache.delete(tailNode.key);
    }
  }
}