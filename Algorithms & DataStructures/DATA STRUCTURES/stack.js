// * STACK
// * Add or Remove elements from the top of the stack
// * Last in, first out
// * Push and pop used in Arrays


class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    //  Add Element to the top of the stack
    push(element) {
        // this.items.push(element);
        this.items[this.count] = element;
        console.log(`Element ${element} pushed to the stack at index ${this.count}`);
        this.count++;
        // return this.count - 1; // 0
    }

    //  Remove Element from the top of the stack And Return it
    // Return undefined if stack is empty
    pop() {
        if (this.count === 0) {
            return undefined;
        } else {
            let deleteItem = this.items[this.count - 1];
            this.count--;
            console.log(`Element ${deleteItem} popped from the stack at index ${this.count}`);
            return deleteItem
        }
    }

    // Return the top element of the stack
    peek() {
        if (this.count === 0) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // size of the stack
    size() {
        return this.count;
    }

    // Print the stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        console.log('Elements in Stack are : ' + str);
    }

    // Clear the stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack Cleared');
        return this.items;
    }
}

const myStack = new Stack();

myStack.push(100)
myStack.push(200)
myStack.push(300)
console.log(`stack has ${myStack.count} elements`);

myStack.pop();
myStack.pop();
console.log(`Stack has ${myStack.size()} elements`);
console.log(`stack has ${myStack.count} elements`);


// console.log(` ${myStack.peek()} is the top element of the stack`);
// console.log(`Stack is Empty? -> ${myStack.isEmpty()} `);
// console.log(`Stack has ${myStack.size()} elements`);



// myStack.print();

// myStack.clear();
// myStack.print();
