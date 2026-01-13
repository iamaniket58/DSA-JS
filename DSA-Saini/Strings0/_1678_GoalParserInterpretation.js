/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let s='';
    for(i=0;i<command.length;i++){
        if(command[i]=='(' && command[i+1]==')'){
            s+='o';
            i++;
        }
        else if(command[i]=='(' && command[i+1]=='a'){
            s+='al';
            i+=3
        }
        else{
            s+='G';
        }
    }
    return s;
};

var interpret = function(command) {
    let s='';
    for(i=0;i<command.length;i++){
        if(command[i]=='(' && command[i+1]==')'){
            s+='o';
            // i++;
        }
        else if(command[i]=='(' && command[i+1]=='a'){
            s+='al';
            // i+=3
        }
        else if(command[i]=='G'){
            s+='G';
        }
    }
    return s;
};