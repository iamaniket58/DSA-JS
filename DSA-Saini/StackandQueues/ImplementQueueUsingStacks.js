
//My Solution
var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let n = this.s1.length;
    for (let i = n - 1; i > 0; i--) {
        this.s2.push(this.s1.pop())
    }
    let poped = this.s1.pop();
    for (let i = this.s2.length - 1; i >= 0; i--) {
        this.s1.push(this.s2.pop())
    }
    return poped
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let n = this.s1.length;
    for (let i = n - 1; i > 0; i--) {
        this.s2.push(this.s1.pop())
    }
    let poped = this.s1[0];
    for (let i = this.s2.length - 1; i >= 0; i--) {
        this.s1.push(this.s2.pop())
    }
    return poped
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


//Same as previous- Only changed the way for for Loop

var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let n = this.s1.length;
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop())
    }
    let poped = this.s1.pop();
    let n2=this.s2.length;// Store it before so it doesnot gets change later

    for (let i = 0; i < n2; i++) {
        this.s1.push(this.s2.pop())
    }
    return poped
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let n = this.s1.length;
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop())
    }
    let n2=this.s2.length;// Store it before so it doesnot gets change later
    let poped = this.s1[0];
    for (let i = 0; i < n2; i++) {
        this.s1.push(this.s2.pop())
    }
    return poped
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length == 0
};