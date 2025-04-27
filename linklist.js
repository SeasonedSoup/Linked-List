
//represent the full list
export class LinkedList {
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
        if (this.head === null || index > size() - 1 || index < 0) {
            return null
        } else {
            let tmp = this.head 
            let curIndex = 0
           
            while (tmp.next != null) {
                if (index === curIndex) {
                    return tmp.value
                }
                tmp = tmp.next
                curIndex++;
            }
            return null;
        }
    }

    pop() {
        if (this.head === null) {
            return;
        } 
        let tmp = this.head 
        if (tmp.next === null) {
            this.head = null
        }
        while(tmp.next && tmp.next.next != null) {
            tmp = tmp.next
        }
        const value = tmp.next.value
        tmp.next = null
        return value
    }

    contains(value) {
        if (this.head === null) {
            return false;
        } 

        let tmp = this.head 
        while (tmp != null) {
            if (tmp.value === value) return true;
            tmp = tmp.next
        }
        return false;
    }

    find(value) {
        if (this.head === null) {
            return null;
        } 
        let count = 0;
        let tmp = this.head

        while (tmp != null) {
            if (tmp.value === value) return count;
            tmp = tmp.next
            count++
        }
        return null
    }

    toString() {
        let res = ''
        let tmp = this.head 

        while(tmp!= null) {
            res += `( ${tmp.val} ) -> `
            tmp = tmp.next
        }
        res += 'null'
        return res;
    }

    insertAt(value, index) {
        if (index >= this.size() || index < 0) {
            return new Error('not valid index');
        }
        if (index === 0) {
            this.prepend(value)
        }
        let tmp = this.head
        let curIndex = 0;

        while(tmp!=null) {
            if (index - 1 === curIndex) {
                tmp.next = new Node(value, tmp.next)
            }
            tmp = tmp.next
            curIndex++;
        }
    }

    removeAt(index) {  
        if (index >= this.size() || index < 0) {
        return new Error('not valid index');
        } else {
            let tmp = this.head; 

            if (index === 0) {
                this.head = this.head.next
            }
            let curIndex = 0;

            while(index - 1 > curIndex) {
                tmp = tmp.next
                curIndex++
            } 
            tmp.next = tmp.next.next
        }
    }
}
//contains the value and address to the next node both are empty at the start 
export class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}