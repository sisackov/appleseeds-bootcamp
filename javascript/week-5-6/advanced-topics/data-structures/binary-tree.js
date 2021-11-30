// import * as queue from './queue.js';

class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
        this.size = root ? 1 : 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    /**
     * Recursively inserts a new node with val
     * @returns the newly inserted node
     */
    insert(val, node = this.root) {
        if (!node) {//empty node means we're there
            this.size++;
            node = new TreeNode(val);
            if (!this.root) this.root = node;
            return node;
        } else if (node.value < val) {
            node.right = this.insert(val, node.right);
        } else {
            node.left = this.insert(val, node.left);
        }

        //without this - after insertion, on call stack's travel up the tree, 
        //it will assign undefined to one of the nodes and cause infinite loop
        return node;
    }

    /**
     * Recursively searches for a node with value=val
     * @returns the found node or null if not found
     */
    search(val, node = this.root) {
        if (!node) return null;

        if (node.value === val) {
            return node;
        } else if (node.value < val) {
            return this.search(val, node.right);
        } else {
            return this.search(val, node.left);
        }
    }


    inOrder(node = this.root) {
        if (!node) return;

        this.preOrder(node.left);
        console.log(node.value);
        this.preOrder(node.right);
    }

    preOrder(node = this.root) {
        if (!node) return;

        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postorder(node = this.root) {
        if (!node) return;

        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    levelOrder(node = this.root) {
        let q = new queue.Queue();
        q.enqueue(node);
        let res = '';

        while (!q.isEmpty()) {
            let count = q.size;
            let line = '';

            for (let i = 0; i < count; i++) {
                let curr = q.dequeue();
                line += curr.value + ' ';

                if (curr.left) q.enqueue(curr.left);
                if (curr.right) q.enqueue(curr.right);
            }
            res += line + '\n';
        }
        return res;
    }

    getHeight(node = this.root) {
        if (!node) return 0;

        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    print(node = this.root) {
        let q = new queue.Queue();
        q.enqueue(node);
        let res = '';

        while (!q.isEmpty()) {
            let count = q.size;
            let line = '';

            for (let i = 0; i < count; i++) {
                let curr = q.dequeue();
                let indent = Math.pow(2, this.getHeight(curr) + 1);

                line += ' '.repeat(indent) + curr.value + ' ';

                if (curr.left) q.enqueue(curr.left);
                if (curr.right) q.enqueue(curr.right);
            }
            res += line + '\n';
        }
        return res;
    }

    inOrderWithObject(node = this.root, acc = { inorder: '' }) {
        if (node) {
            this.inOrderWithObject(node.left, acc);
            acc.inorder += node.value + ' ';
            this.inOrderWithObject(node.right, acc);
        }
        return acc;
    }

    inOrderWithArray(node = this.root, acc = []) {
        if (node) {
            this.inOrderWithArray(node.left, acc);
            acc.push(node.value);
            this.inOrderWithArray(node.right, acc);
        }
        return acc;
    }

    inOrderWithString(node = this.root, /* acc = '' */) {
        let acc = '';
        if (node) {
            this.inOrderWithString(node.left, acc);
            acc += node.value + ' ';
            this.inOrderWithString(node.right, acc);
        }
        return acc;
    }
}

function initTree() {
    let binaryTree = new BinaryTree();
    binaryTree.insert(45);
    binaryTree.insert(14);
    binaryTree.insert(47);
    binaryTree.insert(3);
    binaryTree.insert(20);
    binaryTree.insert(46);
    binaryTree.insert(81);
    return binaryTree;
}

let test = initTree();
console.log(test);

console.log(test.inOrderWithObject());
console.log(test.inOrderWithArray());
console.log(test.inOrderWithString());














// function testTree(tree) {
//     console.log(tree.inOrder());

//     console.log();
//     tree.preOrder();

//     console.log();
//     tree.postorder();

//     console.log();
//     console.log(tree.getHeight());

//     console.log(tree.levelOrder());
//     console.dir(tree);

//     console.log(tree.print());

//     console.log(tree.search(20));
//     console.log(tree.search(200));

// }