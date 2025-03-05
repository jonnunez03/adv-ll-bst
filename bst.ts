// Binary Search Tree Implementation
export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  // EASY: Insert a value into the BST
  insert(value: number): void {
    const node = new BSTNode(value);
    if(!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while(true) {
      if(value < current.value) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  // EASY: Check if a value exists in the BST
  contains(value: number): boolean {
    let current = this.root;
    while(current) {
      if (current.value === value) {
        return true;
    }
    if (value < current.value) {
        current = current.left;  
    } else {
        current = current.right; 
    }
  }
  return false;
}

  // MEDIUM: Find the minimum value in the BST
  findMin(): number | null {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // MEDIUM: Find the maximum depth of the BST
  maxDepth(): number {
    const getDepth = (node: BSTNode | null): number => {
      if(!node) return -1;
      const left = getDepth(node.left);
      const right = getDepth(node.right);
      return Math.max(left, right) + 1;
    }
    return getDepth(this.root);
  }

  // MEDIUM: Depth-First Search (DFS) Traversal
  dfs(): number[] {
    const result: number[] = [];
    const depthSearch = (node: BSTNode | null) => {
      if(!node) return;
      result.push(node.value);
      depthSearch(node.left);
      depthSearch(node.right);
    }
    depthSearch(this.root);
    return result;
  }

  dfsInOrder(): number[] {
    const result: number[] = [];
    const depthSearch = (node: BSTNode | null) => {
      if(!node) return;
      depthSearch(node.left);
      result.push(node.value);
      depthSearch(node.right);
    }
    depthSearch(this.root);
    return result;
  }

  dfsPostOrder(): number[] {
    const result: number[] = [];
    const depthSearch = (node: BSTNode | null) => {
      if(!node) return;
      depthSearch(node.left);
      depthSearch(node.right);
      result.push(node.value);
    }
    depthSearch(this.root);
    return result;
  }
  // MEDIUM: Breadth-First Search (BFS) Traversal
  bfs(): number[] {
    const result: number[] = [];
    const rows: (BSTNode | null)[] = [];
    if(this.root) rows.push(this.root);
    while(rows.length) {
      let row = rows.shift()!;
      result.push(row.value);
      if (row.left) rows.push(row.left);
      if (row.right) rows.push(row.right);
    }
    return result;
  }
}

// Test Cases
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("BST Contains 7:", bst.contains(7)); // Expected: true
console.log("BST Min Value:", bst.findMin()); // Expected: 3
console.log("BST Max Depth:", bst.maxDepth()); // Expected: 2
console.log("BST DFS Traversal:", bst.dfs()); // Expected: [10, 5, 3, 7, 15, 13, 17] (or similar)
console.log("BST DFS Traversal In Order:", bst.dfsInOrder()); // root in middle..
console.log("BST DFS Traversal Post Order:", bst.dfsPostOrder()); // root is last
console.log("BST BFS Traversal:", bst.bfs()); // Expected: [10, 5, 15, 3, 7, 13, 17] (or similar)
