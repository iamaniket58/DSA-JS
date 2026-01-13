/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let s='';
    for(let i=0;i<address.length;i++){
        if(address[i]=='.')s+='[.]';
        else s+=address[i];
    }
    return s;
};  