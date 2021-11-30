/**
 * The Queue class represents FIFO (first-in-first-out) list of objects. 
 * All new elements are inserted at the tail of the queue. 
 */
export class Queue {
    /**
     * Creates an empty Queue.
     * Default maxSize is 10
     */
    constructor(maxSize = 10) {
        this.data = [];
        this.size = 0;
        this.maxSize = maxSize;
    }

    /** @returns true if the queue is empty */
    isEmpty() {
        return this.size === 0;
    }

    /** @returns true if the queue is at maxSize */
    isFull() {
        return this.size === this.maxSize;
    }

    /**
     * Inserts an element at the tail of the queue
     * @param {*} item 
     */
    enqueue(item) {
        if (!this.isFull()) {
            this.size = this.data.push(item);
        }
    }

    /**
     * Removes the object at the head of this queue and returns that object.
     * @returns the object that was at the head of the queue
     */
    dequeue() {
        if (!this.isEmpty()) {
            this.size--;
            return this.data.shift();
        }
    }

    /**
     * Gets the element at the front of the queue without removing it.
     * If the queue is empty returns undefined
     * @returns {*} the object at the front of this queue
     */
    peek() {
        if (!this.isEmpty()) {
            return this.data[0];
        }
    }

    /**
     * @param {*} x 
     * @returns true if x is in the queue
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
            this.enqueue(x);
            return true;
        }
        return false;
    }

    /**
     * removes first element that equals x and returns it
     */
    removeFirst(x) {
        for (let i = 0; i < this.size; i++) {
            let item = this.data[i];
            if (item === x) {
                this.data.splice(i, 1);
                this.size--;
                return item;
            }
        }
    }

    print() {
        console.log("Data:", ...this.data, " Size:", this.size);
    }
}


// let test = new Queue();
// test.enqueue(11);
// test.enqueue(22);
// test.enqueue(33);
// test.enqueue(44);
// test.enqueue(55);
// test.print();

// console.log('peek: ', test.peek());
// console.log('isEmpty: ', test.isEmpty());
// console.log('dequeue: ', test.dequeue());
// test.print();


// console.log('contains(44): ', test.contains(44));
// console.log('contains(45): ', test.contains(45));
// console.log('addToStart(1): ', test.addToStart(1));
// test.print();
// console.log('addToEnd(33): ', test.addToEnd(33));
// test.print();
// console.log('removeFirst(33): ', test.removeFirst(33));
// test.print();
