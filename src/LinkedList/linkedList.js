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

  // remove node from index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return 'Invalid';
    }
    let current = this.head;
    let previous = current;
    let iterator = 0;
    if (index === 0) {
      // just move the head forward by one
      this.head = current.next;
    } else {
      while (iterator < index) {
        iterator += 1;
        previous = current;
        current = current.next;
      }
      // skip the "current" by going to the next
      // this removes the "current" node
      previous.next = current.next;
    }
    this.size -= 1;
    return current.value; // return the removed element
  }

  removeValue(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      // if there is a match
      if (current.value === value) {
        // base case on match
        if (previous === null) {
          this.head = current.next;
        } else {
          // merge the first link to the last bits
          previous.next = current.next;
        }
        this.size -= 1;
        return current.value;
      }
      // track the last known list
      previous = current;
      // move the list forward one node
      current = current.next;
    }
    return 'No match';
  }

  // Helpers
  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
}

module.exports = LinkedList;
