/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.val = null;
  this.next = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < this.size) {
    const link = this;
    let link_i = link;
    let step = index + 1; // 还需要往后走几步
    while (link_i.next && step > 0) {
      link_i = link_i.next;
      step -= 1;
    }
    return link_i.val;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let link = this;
  link.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const link = this;
  const { size } = link;
  link.addAtIndex(size, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (_index, val) {
  const link = this;
  const { size } = link;
  let index = _index;

  if (index > size) {
    return;
  }

  if (index <= 0) {
    index = 0;
  }

  let link_i = link;
  let step = index; // 还要往后走几步
  while (step > 0) {
    link_i = link_i.next;
    step -= 1;
  }

  const newLink = {
    val,
    next: null,
  };

  newLink.next = link_i.next;
  link_i.next = newLink;
  link.size += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  const link = this;
  const { size } = link;

  if (index < 0 || index >= size) {
    return;
  }

  let link_i = link;
  let step = index;
  while (step > 0) {
    link_i = link_i.next;
    step -= 1;
  }
  link_i.next = link_i.next.next;
  link.size -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
const methods = [
  "MyLinkedList",
  "addAtHead",
  "deleteAtIndex",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtTail",
  "get",
  "deleteAtIndex",
  "deleteAtIndex",
];
const args = [[], [2], [1], [2], [7], [3], [2], [5], [5], [5], [6], [4]];
5237225;
run(MyLinkedList, methods, args);
function run(Class, methods, args) {
  methods.shift();
  args.shift();
  var obj = new Class();
  methods.forEach((method, index) => {
    console.log(obj[method](...args[index]));
  });
}
