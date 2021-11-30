/**
 * The Stack class represents a last-in-first-out (LIFO) stack of objects. 
 * The usual push and pop operations are provided, as well as a method to get the top item on the stack, 
 * a method to test for whether the stack is empty, 
 * and a method to search the stack for an item and discover how far it is from the top.
 * When a stack is first created, it contains no items.
 */
class Stack {
    /**
     * Creates an empty Stack.
     * Default maxSize is 10
     */
    constructor(maxSize = 10) {
        this.data = [];
        this.size = 0;
        this.maxSize = maxSize;
    }

    /** @returns true if the stack is empty */
    isEmpty() {
        return this.size === 0;
    }

    /** @returns true if the stack is at maxSize */
    isFull() {
        return this.size === this.maxSize;
    }

    /**
     * Pushes an item onto the top of this stack. 
     * @param {*} item 
     */
    push(item) {
        if (!this.isFull()) {
            this.data.push(item);
            this.size++;
        }
    }

    /**
     * Removes the object at the top of this stack and returns that object.
     * @returns the object that was on top of the stack
     */
    pop() {
        if (!this.isEmpty()) {
            this.size--;
            return this.data.pop();
        }
    }

    /**
     * Gets the object at the top of the stak without removing it.
     * If the stack is empty returns undefined
     * @returns {*} the object at the top of this stack
     */
    get top() {
        if (!this.isEmpty()) {
            return this.data[this.size - 1];
        }
    }

    /**
     * Returns the 1-based position where an object is on this stack. 
     * If the object obj occurs as an item in this stack, 
     * this method returns the distance from the top of the stack of the 
     * occurrence nearest the top of the stack; 
     * the topmost item on the stack is considered to be at distance 1. 
     * @returns {number} the 1-based position from the top of the stack where the object is located; 
     * the return value -1 indicates that the object is not on the stack.
     */
    search(obj) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === obj) return this.size - i;
        }

        return -1;
    }

    /**
     * @param {*} x 
     * @returns true if x is in the stack
     */
    contains(x) {
        for (const item of this.data) {
            if (item === x) {
                return true;
            }
        }
        return false;
    }

    /**
     * @returns true if succesful
     */
    addToStart(x) {
        if (!this.isFull()) {
            this.size = this.data.unshift(x);
            return true;
        }
        return false;
    }

    /**
     * @returns true if succesful
     */
    addToEnd(x) {
        if (!this.isFull()) {
            this.push(x);
            return true;
        }
        return false;
    }

    /**
     * removes first element that equals x and returns it
     */
    removeFirst(x) {
        let helper = new Stack();
        while (!this.isEmpty()) {
            let item = this.pop();
            if (item === x) {
                while (!helper.isEmpty()) {
                    this.push(helper.pop());
                }
                return item;
            } else {
                helper.push(item);
            }
        }
    }

    print() {
        console.log("Data: ", this.data);
        console.log("Size: ", this.size);
    }
}


// let test = new Stack();
// test.push(11);
// test.push(22);
// test.push(33);
// test.push(44);
// test.push(55);
// test.print();
// console.log(test.search(44));
// console.log(test.search(45));


// console.log('top: ', test.top);
// console.log('isEmpty: ', test.isEmpty());
// test.print();
// console.log('pop: ', test.pop());
// test.print();


// console.log('contains(44): ', test.contains(44));
// console.log('contains(45): ', test.contains(45));
// console.log('addToStart(1): ', test.addToStart(1));
// test.print();
// console.log('addToEnd(33): ', test.addToEnd(33));
// test.print();
// console.log('removeFirst(33): ', test.removeFirst(33));
// test.print();


