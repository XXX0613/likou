class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        let temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return index * 2 + 1;
    }

    getRightIndex(index) {
        return index * 2 + 2;
    }

    shiftUp(index) {
        if (index == 0) return;
        let parentIndex = this.getParentIndex(index);
        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        if (index >= this.heap.length - 1) return;
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if (this.heap[index] > this.heap[rightIndex]) {
            this.swap(index, rightIndex);
            this.shiftDown(rightIndex);
        }
        if (this.heap[index] > this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
    }

    push(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if(this.heap.length > 1){
            this.heap[0] = this.heap.pop();
            this.shiftDown(0);
        } else {
            this.heap = [];
        }
    }

    size() {
        return this.heap.length;
    }

    top() {
        return this.heap[0];
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        let temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftIndex(index) {
        return index * 2 + 1;
    }

    getRightIndex(index) {
        return index * 2 + 2;
    }

    shiftUp(index) {
        if (index == 0) return;
        let parentIndex = this.getParentIndex(index);
        if (this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        if (index >= this.heap.length - 1) return;
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if (this.heap[index] < this.heap[rightIndex]) {
            this.swap(index, rightIndex);
            this.shiftDown(rightIndex);
        }
        if (this.heap[index] < this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftDown(leftIndex);
        }
    }

    push(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if(this.heap.length > 1){
            this.heap[0] = this.heap.pop();
            this.shiftDown(0);
        } else {
            this.heap = [];
        }
    }

    size() {
        return this.heap.length;
    }

    top() {
        return this.heap[0];
    }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.heap_min = new MinHeap();
    this.heap_max = new MaxHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.heap_max.size() == 0) {
        this.heap_max.push(num);
        return;
    }
    if(this.heap_min.size() == this.heap_max.size()){
        if(num <= this.heap_max.top()){
            this.heap_max.push(num);
        } else {
            this.heap_min.push(num);
        }
    }else if (this.heap_min.size() < this.heap_max.size()){
        if(num >= this.heap_max.top()){
            this.heap_min.push(num);
        } else {
            this.heap_min.push(this.heap_max.top());
            this.heap_max.pop();
            this.heap_max.push(num);
        }
    } else if (this.heap_min.size() > this.heap_max.size()){
        if(num <= this.heap_min.top()){
            this.heap_max.push(num);
        } else {
            this.heap_max.push(this.heap_min.top());
            this.heap_min.pop();
            this.heap_min.push(num);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.heap_min.size() == this.heap_max.size()){
        return (this.heap_max.top() + this.heap_min.top()) / 2;
    } else if (this.heap_min.size() > this.heap_max.size()){
        return this.heap_min.top();
    } else {
        return this.heap_max.top();
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

