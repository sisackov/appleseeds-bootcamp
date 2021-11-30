/**
 * Doubly Linked List is a variation of Linked list in which navigation 
 * is possible in both ways, either forward and backward easily as 
 * compared to Single Linked List. Following are the important terms 
 * to understand the concept of doubly linked list.
 */


class DoublyLinkNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(linkNode, maxSize = 10) {
        this.head = linkNode;
        this.tail = new DoublyLinkNode('DUMMY VALUE');

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 1;
        this.maxSize = maxSize;
    }

    /** @returns true if the list is empty */
    isEmpty() {
        return this.size === 0;
    }

    /** @returns true if the list is at maxSize */
    isFull() {
        return this.size === this.maxSize;
    }

    /**
     * We can cut the search time by half if we search from both ends of the list
     * @param {*} x
     * @returns true if x is in the list
     */
    contains(x) {//TODO test on empty list
        let forward = this.head;
        let backward = this.tail;
        while (forward !== backward) {
            if (forward.data === x || backward.data === x) return true;

            forward = forward.next;
            backward = backward.prev;
        }

        return false;
    }

    /**
     * @returns true if succesful
     */
    addToStart(x) {
        if (!this.isFull()) {
            let node = new DoublyLinkNode(x);
            node.next = this.head;
            this.head = node;
            this.size++;

            return true;
        }
        return false;
    }

    /**
     * @returns true if succesful
     */
    addToEnd(x) {
        let added = false;
        if (this.isEmpty()) {
            this.head = new DoublyLinkNode(x);
            this.size++;
            added = true;
        } else if (!this.isFull()) {
            let iterator = this.head;
            while (iterator.next) {
                iterator = iterator.next;
            }

            iterator.next = new DoublyLinkNode(x);
            this.size++;
            added = true;
        }
        return added;
    }

    /**
     * removes first element that equals x and returns it
     */
    removeFirst(x) {
        let prev = null;
        let curr = this.head;
        while (curr) {
            if (curr.data === x) {
                if (prev) {
                    prev.next = curr.next;
                } else {//in case this is the head
                    this.head = curr.next;
                }
                curr.next = null; // disconnect the node from the list
                this.size--;
                return curr;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    print() {
        let data = '';
        let curr = this.head;
        while (curr) {
            data += curr.data + ' -> ';
            curr = curr.next;
        }

        console.log("Data:", data, " Size:", this.size);
    }
}

// let test = new DoublyLinkedList(new DoublyLinkNode(11));
// test.print();
// test.addToEnd(22);
// test.addToEnd(33);
// test.addToEnd(44);
// test.addToEnd(55);
// test.print();


// console.log('isEmpty: ', test.isEmpty());
// console.log('contains(44): ', test.contains(44));
// console.log('contains(45): ', test.contains(45));
// console.log('addToStart(1): ', test.addToStart(1));
// test.print();
// console.log('addToEnd(33): ', test.addToEnd(33));
// test.print();
// console.log('removeFirst(33): ', test.removeFirst(33));
// test.print();