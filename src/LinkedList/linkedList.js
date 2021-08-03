const Node = require('./linkedListNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // basic add to the structure
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

  // add at certain index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return 'Invalid';
    }
    const node = new Node(value);
    let current;
    let previous;
    current = this.head;
    // check if its affecting the root
    if (index === 0) {
      // add the current head as the next
      node.next = this.head;
      // replace head with the new node
      this.head = node;
    } else {
      let iterator = 0;
      while (iterator < index) {
        iterator += 1;
        previous = current;
        current = current.next;
      }
      // add the last bits on the node.next
      node.next = current;
      // join the previous to the node list
      previous.next = node;
    }
    this.size += 1;
    return this.size;
  }
}

module.exports = LinkedList;
