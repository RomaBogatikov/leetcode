// 461. Hamming Distance
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.


var hammingDistance = function(x, y) {
    let count = 0;
    
    while(!(x===0 && y===0)) {
        if ((x & 1) !== (y & 1)) count++;
        x = x>>1;
        y = y>>1;
    }
    
    return count;
};

var hammingDistance2 = function(x, y) {
    let xorVal = x ^ y;
    let count = 0;
    while (xorVal) {
        if (xorVal & 1) count++;
        xorVal = xorVal >> 1;
    }
}

let result = hammingDistance(1, 4)
