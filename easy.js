/**
 * 1. Two Sums
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Bruteforce variant
 var twoSumBrute = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
// Recursive variant
var twoSum = function(nums, target) {
    let indexedArr = nums.map((item, index) => [index, item]);
    
    let mergeCall = (left, right, target) => {
        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < right.length; j++) {
                if (left[i][1] + right[j][1] === target) {
                    return [left[i][0], right[j][0]];
                }
            }
        }
    }

    let recursiveCall = (nums, target) => {
        if (nums.length === 1) { return; }
        if (nums.length === 2) {
            if (nums[0][1] + nums[1][1] === target) {
                return [nums[0][0], nums[1][0]];
            }
        }
        let mid = Math.round(nums.length / 2);
        let leftHalf = nums.slice(0, mid);
        let rightHalf = nums.slice(mid);
        return recursiveCall(leftHalf, target) || recursiveCall(rightHalf, target) || mergeCall(leftHalf, rightHalf, target);
    }

    return recursiveCall(indexedArr, target);
};

/**
 * 9. Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
 var isPalindromeStr = function(x) {
    const stringRepresentation = Number(x).toString();
    let i = 0;
    let j = stringRepresentation.length - 1;
    for (;i < (stringRepresentation.length / 2); i++ ) {
        if (stringRepresentation[i] !== stringRepresentation[j - i]) {
            return false;
        }
        return true;
    };
};

// No conversion to string
var isPalindrome = function(x) {
    let recCall = (num, digits) => {
        if (digits < 2) {
            return true;
        } else {
            let rightDigit = num % 10;
            
            let divider = Math.pow(10, digits - 1);
            let leftDigit = Math.trunc(num / divider);

            let remainder = Math.trunc((num  % divider) / 10);
        
            return (leftDigit === rightDigit) && recCall(remainder, digits - 2);
        }
    }

    let digitsNumber  = Math.trunc(Math.log10(x)) + 1;
    return recCall(x, digitsNumber);

};