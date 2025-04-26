
//represent the full list
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    append(value) {
        if (this.head === null) {
            this.prepend(value);
           
        } else {
            let tmp = this.head
            while(tmp.next != null) tmp = tmp.next
            
            tmp.next = new Node(value, null)
        }
    }
    prepend(value) {
        this.head = new Node(value, this.head)
    }

    size() {
        let count = 0;
        let tmp = this.head
        while(tmp != null) {
            count++ 
            tmp = tmp.next
        }
        return count;
    }

    head() {
        if (this.head === null) {
            return null
        } else {
            return this.head
        }
    }

    tail() {
        if (this.head === null) {
            return null
        } else {
            let tmp = this.head
            while (tmp.next != null) tmp = tmp.next

            let tail = tmp 
            return tail
        }
    }

    at(index) {
        
    }

}
//contains the value and address to the next node both are empty at the start 
class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}