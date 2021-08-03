/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const LinkedList = require('./linkedList');

describe('LinkedList', () => {
  let head;
  beforeEach(() => {
    head = new LinkedList();
  });
  test('should add 3 nodes', () => {
    head.add(1);
    head.add(2);
    head.add(3);
    expect(head.size).toBe(3);
    expect(head.head.value).toBe(1);
    expect(head.head.next.value).toBe(2);
    expect(head.head.next.next.value).toBe(3);
  });
});
