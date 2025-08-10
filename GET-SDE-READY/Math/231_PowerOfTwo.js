var isPowerOfTwo = function (n) {
    if (n == 1) return true
    while (n >= 1) {
        if (n == 1) return true
        n = n / 2   
    }
    return false;

};


var isPowerOfTwo = function (n) {
    while (n > 1) {
        if (n % 2 != 0) return false;
        n = Math.floor(n / 2)
    }
    return n == 1
};
