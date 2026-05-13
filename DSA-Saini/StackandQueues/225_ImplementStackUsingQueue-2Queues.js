
var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.q1.length;
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let fe=this.q1.shift();
    let temp=this.q1;
    this.q1=this.q2;
    this.q2=temp;
    return fe
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n=this.q1.length;
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let fe=this.q1.shift();
    this.q2.push(fe);
    let temp=this.q1;
    this.q1=this.q2;
    this.q2=temp;
    return fe;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length==0

};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


//Revision

var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.queue1.length == 0) return null;
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    let poped = this.queue1.shift();
    this.queue1 = this.queue2;
    this.queue2 = [];
    return poped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.queue1.length == 0) return null;
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    let last = this.queue1[0];
    this.queue2.push(this.queue1.shift());
    this.queue1 = this.queue2;
    this.queue2=[];
    return last;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.length == 0;
};


