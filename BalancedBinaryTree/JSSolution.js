// Recursive solution:

// Iterative solution?


// BinaryTreeNode class definition:
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

// Recursive solution:

// Iterative solution?

// Construct a tree and test if balanced:

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root));   // should print true

root.insertLeft(10);
console.log(checkBalanced(root));   // should print false

root.insertRight(11);
