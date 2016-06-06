var LinkedList = function (initialValue) {
  this.head = null;
  this.tail = null;
  this.addToTail(initialValue);
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};
  
LinkedList.prototype.removeHead = function () {
  this.head = this.head.next;
}
  
LinkedList.prototype.contains = function (value) {
  var node = this.head;
  while(node) {
    if(node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
};

var Node = function (value) {
  this.next = null;
  this.value = value;
};