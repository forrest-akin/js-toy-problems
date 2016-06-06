// Queue Stack
// Write a stack. Once you’re done, implement a queue using two stacks. 
// Do not create a storage array for your queue.

var Stack = function() {
  var storage = [];
  this.push = (val) => storage.push(val);
  this.pop = () => storage.pop();
  this.size = () => storage.length;
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();
  this.enqueue = (val) => inbox.push(val);
  this.dequeue = () => {
    if(outbox.size() === 0)
      while(inbox.size() > 0)
        outbox.push(inbox.pop());
    return outbox.pop();
  }
  this.size = () => inbox.size();
};