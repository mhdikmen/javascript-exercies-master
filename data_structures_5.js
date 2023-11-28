/*
In This article, we would be implementing Queue data structure in javascript. A Queue works on the FIFO(First in First Out) principle. Hence, it performs two basic operations which are the addition of elements at the end of the queue and the removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure. 

Note: Assuming a queue can grow dynamically we are not considering the overflow condition Now let’s see an example of a queue class using an array:- 

To implement a queue data structure we need the following methods:

enqueue : To add elements at end of the queue.
dequeue: To remove an element from the front of the queue.
peek: To get the front element without removing it.
isEmpty: To check whether an element is present in the queue or not.
printQueue: To print the elements present in queue.
First, we will be implementing the data structure by creating a queue object and defining the methods for it. We will use additional variables and time complexity will be O(1) which will make the execution of functions faster irrespective of the size of the queue. The additional variables keep track of the index of the first and last element so we do not have to iterate the queue at each insertion and deletion.

*/
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }
  dequeue() {
    console.log(`dequeue before: ${this.frontIndex}`);
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    console.log(`dequeue after: ${this.frontIndex}`);
    return item;
  }
  peek() {
    console.log(`peek: ${this.frontIndex}`);
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}
const queue = new Queue();
console.log(queue.enqueue(7));
console.log(queue.enqueue(2));
console.log(queue.enqueue(6));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
var str = queue.printQueue;
console.log(str);

//delete arr[0] keeps array length the same. Not as .pop()
var arr = [0, 1, 2, 3, 4, 5, 6];
delete arr[0];
console.log(arr);
