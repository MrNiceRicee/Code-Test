const Node = require('./linkedListNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    let current;

    // base case, check if the root is null
    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      // traverse the linked list until we reach the end
      while (current.next) {
        // switch current to the next node
        current = current.next;
      }
      // establish the "next" to be the created node
      current.next = newNode;
    }
    this.size += 1;
  }
}

module.exports = LinkedList;
