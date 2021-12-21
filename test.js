describe("1. Two Sum", function() {
    it ("two elements at the begining", function() {
        assert.sameMembers(twoSum([2,7,11,15],9),[0,1]);
    });

    it ("two elements at the end", function() {
        assert.sameMembers(twoSum([11,15,4,5],9),[2,3]);
    });

    it ("two elements in the middle", function() {
        assert.sameMembers(twoSum([11,15,4,5,2,3],9),[2,3]);
    });
    
    it ("array has only two elements", function() {
        assert.sameMembers(twoSum([3,3],6),[0,1]);
    });

    it ("one element is zero", function() {
        assert.sameMembers(twoSum([3,0,6,13],6),[1,2]);
    });

    it ("two elements are zero", function() {
        assert.sameMembers(twoSum([0,1,6,0],0),[0,3]);
    });

    it ("expected numbers are not consequitive", function() {
        assert.sameMembers(twoSum([3,2,5,3],6),[0,3]);
    });

    it ("negative numbers", function() {
        assert.sameMembers(twoSum([-1,-2,-3,-4,-5],-8),[2,4]);
    });

    it ("Mixed numbers", function() {
        assert.sameMembers(twoSum([-1,-2,-3,2,-5],-1),[2,3]);
    });
})

describe("9. Palindrome Number", function () {
    it("proper palindrome integer 121", function() {
        assert.isTrue(isPalindrome(121));
    });
    it("not a palindrome 123", function() {
        assert.isFalse(isPalindrome(123));
    });
    it("negative integer -121", function() {
        assert.isFalse(isPalindrome(-121));
    });
    it("single digit 1", function() {
        assert.isTrue(isPalindrome(1));
    });
    it("long palindrome number 1234321", function() {
        assert.isTrue(isPalindrome(1234321));
    });
    it("long non-palindrome number with zeros inside 1000021", function() {
        assert.isFalse(isPalindrome(1000021));
    });
    it("long non-palindrome number with zeros inside 1023201", function() {
        assert.isTrue(isPalindrome(100232001));
    });
});

describe("13. Roman to Integer", function() {
    it("simple case MCLVIII", function() {
        assert.equal(romanToInt('MCLVIII'), 1158);
    });
    it("simple case with IV = 4", function() {
        assert.equal(romanToInt('IV'), 4);
    });
    it("complex case with MCMIV = 1904", function() {
        assert.equal(romanToInt('MCMIV'), 1904);
    });
    it("complex case with MCMXCIV = 1994", function() {
        assert.equal(romanToInt('MCMXCIV'), 1994);
    });
});

describe("14. Longest Common Prefix", function () {
    it("['asd','asd','asd'] expected 'asd'", function() {
        assert.equal(longestCommonPrefix(['asd','asd','asd']), 'asd');
    });
    it("['asdz','asdx','asdc'] expected 'asd'", function() {
        assert.equal(longestCommonPrefix(['asdz','asdx','asdc']), 'asd');
    });
    it("['asd','fgh','zxc'] expected ''", function() {
        assert.equal(longestCommonPrefix(['asd','fgh','zxc']), '');
    });
    it("['asd','','zxc'] expected ''", function() {
        assert.equal(longestCommonPrefix(['asd','','zxc']), '');
    });
    it("['flower','flow','flight'] expected 'fl'", function() {
        assert.equal(longestCommonPrefix(["flower","flow","flight"]), 'fl');
    });
    it("['one'] expected 'one'", function() {
        assert.equal(longestCommonPrefix(['one']), 'one');
    });
    it("[''] expected ''", function() {
        assert.equal(longestCommonPrefix(['']), '');
    });
});

describe("20. Valid Parentheses", function() {
    it("valid string ()", function() {
        assert.isTrue(isValid('()'));
    });
    it("valid string, three groups ()[]{}", function() {
        assert.isTrue(isValid('()[]{}'));
    });
    it("valid string, inner groups ([()[]])", function() {
        assert.isTrue(isValid('([()[]])'));
    });
    it("invalid string, inner groups (]", function() {
        assert.isFalse(isValid('(]'));
    });
    it("invalid string, inner groups ([{})[]])", function() {
        assert.isFalse(isValid('([{})[]])'));
    });
    it("invalid string one char (", function() {
        assert.isFalse(isValid('('));
    });
    it("invalid string start from closing bracket )(", function() {
        assert.isFalse(isValid(')('));
    });
});