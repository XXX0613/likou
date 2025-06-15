
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // this.arr.push(x);
    this.arr[this.arr.length] = x
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // return this.arr.shift() ;
    let [a, ...newArr] = this.arr;
    this.arr = newArr;
    return a;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.arr.length == 0) return true;
    return false;
};


