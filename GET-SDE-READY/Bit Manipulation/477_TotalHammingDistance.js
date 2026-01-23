/**
 * @param {number[]} nums
 * @return {number}
 */

//Optimized
var totalHammingDistance = function (nums) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let ones = 0;
        let zeros = 0;
        for (let num of nums) {
            if (num & (1 << i)) {
                ones++;
            }
            else {
                zeros++;
            }

        }
        ans = ans + (ones * zeros)
    }
    return ans;
};

//Bruite-Force
var totalHammingDistance = function (nums) {
    let totalHamming = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let xor = nums[i] ^ nums[j];
            let count = 0;
            while (xor != 0) {
                if (xor & 1) count++;
                xor = xor >> 1;
            }
            totalHamming += count;

        }
    }
    return totalHamming;
};

//Bruite Force- Time Limit Exceeds
var totalHammingDistance1 = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let xor = nums[i] ^ nums[j];
            let setBit = countSetBitsByConvertingToBinary(xor)
            ans = ans + setBit
        }
    }
    return ans
};

//Counting digit using (check if i'th bit is set) 
function numberOfSetBits(num) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (num & (1 << i)) count++
    }
    return count;
}

//COunting didgit using Binary conversion
function countSetBitsByConvertingToBinary(num) {
    let count = 0
    while (num > 0) {
        let rem = num % 2;
        if (rem == 1) count++
        num = Math.floor(num / 2);
    }
    return count

}
console.log(totalHammingDistance([4, 14, 2]))