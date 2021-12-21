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

/**
 * 13. Roman to Integer
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    switch (s[0]) {
        case 'I':
            switch (s.slice(0, 2)) {
                case 'IV':
                    return 4 + romanToInt(s.slice(2));
                    break;
                case 'IX':
                    return 9 + romanToInt(s.slice(2));
                    break;
                case 'I':
                    return 1;
                    break
                default:
                    return 1 + romanToInt(s.slice(1));
                    break;
            }
            break;
        case 'V':
            return 5 + romanToInt(s.slice(1));
            break;
        case 'X':
            switch (s.slice(0, 2)) {
                case 'XL':
                    return 40 + romanToInt(s.slice(2));
                    break;
                case 'XC':
                    return 90 + romanToInt(s.slice(2));
                    break;
                case 'X':
                    return 10;
                    break
                default:
                    return 10 + romanToInt(s.slice(1));
                    break;
            }
            break;
        case 'L':
            return 50 + romanToInt(s.slice(1));
            break;
        case 'C':
            switch (s.slice(0, 2)) {
                case 'CD':
                    return 400 + romanToInt(s.slice(2));
                    break;
                case 'CM':
                    return 900 + romanToInt(s.slice(2));
                    break;
                case 'C':
                    return 100;
                    break
                default:
                    return 100 + romanToInt(s.slice(1));
                    break;
            }
            break;
        case 'D':
            return 500 + romanToInt(s.slice(1));
            break;
        case 'M':
            return 1000 + romanToInt(s.slice(1));
            break;
        default:
            return 0;
            break;
    }
};

/**
 * 14. Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix1 = function(strs) {
    let chars = [];
    let strings = [];
    for (const elem of strs) {
        chars.push(elem.slice(0, 1));
        strings.push(elem.slice(1));
    }
    if (chars.every(item => item === chars[0])) {
        if (chars[0] === '') {
            return '';
        } else {
            return chars[0] + longestCommonPrefix(strings);
        }
    } else {
        return '';
    }
};
// Varian with one cycle
var longestCommonPrefix2 = function(strs) {
    let recCall = function(pos) {
        let char = strs[0][pos];
        if (!char) {
            return '';
        }
        for (const elem of strs) {
            if (char === elem[pos]) {
                continue;
            } else {
                return '';
            }
        }
        return char + recCall(pos + 1);
    };
    return recCall(0);
};
// Devide and conquer approach
var longestCommonPrefix = function(strs) {
    let lcr2 = function(strings) {
        let min, max;
        if (strings[0].length >= strings[1].length) {
            min = strings[0];
            max = strings[1];
        } else {
            min = strings[1];
            max = strings[0];
        }
        while(!max.startsWith(min) && min.length > 0) {
            min = min.slice(0, -1)
        };
        return min;
    };
    let recCall = function(strings) {
        if (strings.length === 0) {
            return '';
        }
        if (strings.length === 1) {
            return strings[0];
        }
        if (strings.length === 2) {
            return lcr2(strings);
        }
        let mid = Math.round(strings.length / 2);
        let leftLCR = recCall(strings.slice(0, mid));
        let rightLCR = recCall(strings.slice(mid));
        return lcr2([leftLCR, rightLCR]);
    };
    return recCall(strs);
}

/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length === 1) {
        return false;
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[i]);
                break;
            case ')':
            case ']':
            case '}':
                if (stack.length === 0) {
                    return false;
                }
                let stackTop = stack.pop();
                if (s[i].charCodeAt(0) === stackTop.charCodeAt(0) + 1 || s[i].charCodeAt(0) === stackTop.charCodeAt(0) + 2) {
                    continue;
                } else {
                    return false;
                }
                break;
            default:
                return false;
                break;
        }
    }
    return (stack.length === 0);
};