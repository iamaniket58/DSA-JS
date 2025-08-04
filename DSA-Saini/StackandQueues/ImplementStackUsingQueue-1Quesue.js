
//Implementing using 1 queue

var MyStack = function() {
    this.q=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.q.length;
   for(let i=0;i<n-1;i++){
    this.q.push(this.q.shift())
   }
   return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n=this.q.length;
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift())
    }
    let fe=this.q.shift();
    this.q.push(fe);
    return fe;
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length==0

};

let stack = new MyStack();

stack.push(1);
stack.push(2);
console.log(stack.top());    // Output: 2
console.log(stack.pop());    // Output: 2
console.log(stack.empty());  // Output: false
console.log(stack.pop());    // Output: 1
console.log(stack.empty());  // Output: true