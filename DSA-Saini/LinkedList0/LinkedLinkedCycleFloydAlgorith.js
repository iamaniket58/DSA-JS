var hasCycle=function(head){
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;

};


//Lengthy solution
var hasCycle1=function(head){
    let slow=head;
    let fast=head;
    if(head==null){
        return false;
    }
    while(fast!=slow){
        if(fast==null || fast.next==null){
            return false;
        }
        slow=slow.next;
        fast=fast.next.next;
       
    }
    return true;

};