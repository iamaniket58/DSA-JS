var convertToBinary = (n) => {
    let str = "";
    while (n > 0) {
        let rem = n % 2;
        str = rem + str;
        n = Math.floor(n / 2);
    }
    return str
};