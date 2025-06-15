/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.k = k
    this.arr = new Array(this.k)
    this.headIdx = -1
    this.tailIdx = -1
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    }
    if (this.isEmpty()) {
        this.headIdx = 0
    }
    this.tailIdx = (this.tailIdx + 1) % this.k
    this.arr[this.tailIdx] = value
    return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false
    }
    if (this.headIdx === this.tailIdx) {
        this.headIdx = -1
        this.tailIdx = -1
    } else {
        this.headIdx = (this.headIdx + 1) % this.k
    }
    return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1
    }
    return this.arr[this.headIdx]
}; 

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    }
    return this.arr[this.tailIdx]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.headIdx === -1
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return ((this.tailIdx + 1) % this.k) === this.headIdx
};



