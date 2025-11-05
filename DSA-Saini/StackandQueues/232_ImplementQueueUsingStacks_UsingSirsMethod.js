var MyQueue=function(){
    this.s1=[];
    this.s2=[];
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push=function(x){
    this.s1.push(x);
}

/**
 * @return {number}
 */
MyQueue.prototype.pop=function(){

    // while(this.s1.length){   //This also works instead of For
    //      this.s2.push(this.s1.pop());
    // }
    if(this.s2.length==0){
        let n=this.s1.length
        for(let i=0;i<n;i++){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
}

/**
 * @return {number}
 */
MyQueue.prototype.peek=function(){
    if(this.s2.length==0){
        let n=this.s1.length;
        for(let i=0;i<n;i++){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty=function(){
    return this.s1.length==0 && this.s2.length==0
}