// Linked List Implementation
export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    const newList = new ListNode(value);
    if(!this.head) {
      this.head = newList;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newList;
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    let current = this.head;
    while(current) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    let prev: ListNode | null = null;
    let current = this.head;
    while(current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    if(!this.head) return;
    if(this.head.value === value) {
      this.head = this.head.next;
      return
    }
    let current = this.head;
    while(current.next) {
      if(current.next.value === value){
        current.next = current.next.next;
        return;
      };
    current = current.next;
    }
  }
  print(): void {
    let current = this.head;
    let result: number[] = [];
    while(current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result)
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.print()

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.reverse();
linkedList.print()
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
linkedList.print()
