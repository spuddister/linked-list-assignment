#!/usr/bin/node

//CLASSES

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  prepend(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (this.head === null) return 0;
    let count = 1;
    let current = this.head;
    while (current.next != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  returnHead() {
    return this.head;
  }

  returnTail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index === 0) return this.head;
    let count = 1;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
      if (index === count) {
        return current;
      }
      count++;
    }
    return count;
  }

  pop() {
    let current = this.head;
    let prev;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  contains(data) {
    if (this.head.data === data) return true;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
      if (current.data === data) return true;
    }
    return false;
  }

  find(data) {
    if (this.head.data === data) return 0;
    let count = 1;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
      if (data === current.data) {
        return count;
      }
      count++;
    }
    return null;
  }

  toString() {
    let list = "";
    let current = this.head;
    while (current != null) {
      list = list + `( ${current.data} ) -> `;
      current = current.next;
    }
    list = list + "null";
    return list;
  }
}

class Node {
  constructor(data, next) {
    data ? (this.data = data) : (this.data = null);
    next ? (this.next = next) : (this.next = null);
  }

  addValue(data) {
    this.data = data;
  }

  addNext(next) {
    this.next = next;
  }
}

//RUN: remove comments below to test

// let list1 = new LinkedList();
// list1.append("world");
// list1.append("world2");
// list1.append("world3");
// list1.prepend("hello");

// console.log("Size: " + list1.size());
// console.log("Head: " + list1.returnHead().data);
// console.log("Tail: " + list1.returnTail().data);
// console.log("At 2: " + list1.at(2).data);

// console.log(list1.toString());
// list1.pop();
// console.log(list1.toString());

// console.log("Contains world: " + list1.contains("world"));
// console.log("Index of world2: " + list1.find("world2"));
