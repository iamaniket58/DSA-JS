
//My Solution
var MinStack = function() {
    this.stack=[];
    this.minStack=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    if(this.stack.length==0){
        this.stack.push(val);
        this.minStack.push(val);
    }
    else{
        this.stack.push(val);
        let minT=this.minStack[this.minStack.length-1];
        if (minT>val){
            this.minStack.push(val)
        }
        else{
            this.minStack.push(minT)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


