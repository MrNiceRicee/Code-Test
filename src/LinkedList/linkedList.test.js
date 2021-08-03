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
  test('should add 2 initial nodes, and 1 in between', () => {
    head.add(1);
    head.add(3);
    expect(head.size).toBe(2);
    head.insertAt(2, 1);
    expect(head.size).toBe(3);
    expect(head.head.value).toBe(1);
    expect(head.head.next.value).toBe(2);
    expect(head.head.next.next.value).toBe(3);
  });
  test('insertAt edge case', () => {
    expect(head.insertAt(1, -1)).toBe('Invalid');
    head.add(1);
    expect(head.size).toBe(1);
    expect(head.head.value).toBe(1);
    head.insertAt(2, 0);
    expect(head.size).toBe(2);
    expect(head.head.value).toBe(2);
  });
  test('Helper First', () => {
    head.add(1);
    expect(head.getFirst().value).toBe(1);
  });
  test('Helper Last', () => {
    head.add(1);
    head.add(2);
    head.add(3);
    expect(head.getLast().value).toBe(3);
  });
});
