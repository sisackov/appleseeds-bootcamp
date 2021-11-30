/**
 * A linked list is a sequence of data structures, which are connected together via links.
 * Linked List is a sequence of links which contains items.
 * Each link contains a connection to another link.
 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null, maxSize = 10) {
        this.head = head;
        this.size = head ? 1 : 0;
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
     * @param {*} x
     * @returns true if x is in the list
     */
    contains(x) {
        let iterator = this.head;
        while (iterator) {
            if (iterator.data === x) return true;

            iterator = iterator.next;
        }

        return false;
    }

    /**
     * @returns true if succesful
     */
    addToStart(x) {
        if (!this.isFull()) {
            let node = new ListNode(x);
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
            this.head = new ListNode(x);
            this.size++;
            added = true;
        } else if (!this.isFull()) {
            let iterator = this.head;
            while (iterator.next) {
                iterator = iterator.next;
            }

            iterator.next = new ListNode(x);
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

// let test = new LinkedList(new ListNode(11));
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