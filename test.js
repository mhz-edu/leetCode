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

describe("21. Merge two sorted lists", function() {
    it("merge two lists that are sequntial", function() {
        const list1 = {val:1,next:{val:2,next:{val:3}}}
        const list2 = {val:4,next:{val:5,next:{val:6}}}
        const mergedList = {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6}}}}}}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
    it("merge two lists that are not sequntial", function() {
        const list1 = {val:2,next:{val:4,next:{val:6}}}
        const list2 = {val:3,next:{val:5,next:{val:7}}}
        const mergedList = {val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:{val:7}}}}}}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
    it("merge two lists, when one list is empty", function() {
        const list1 = {val:2,next:{val:4,next:{val:6}}}
        const list2 = {}
        const mergedList = {val:2,next:{val:4,next:{val:6}}}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
    it("both lists are empty", function() {
        const list1 = {}
        const list2 = {}
        const mergedList = {}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
    it("both lists have one element", function() {
        const list1 = {val: 50}
        const list2 = {val: 34}
        const mergedList = {val: 34, next: {val:50}}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
    it("One list has one element to insert in the middle of another", function() {
        const list1 = {val:2,next:{val:4,next:{val:6, next:{val:8}}}}
        const list2 = {val: 5}
        const mergedList = {val:2,next:{val:4,next:{val:5,next:{val:6, next:{val:8}}}}}
        assert.deepEqual(mergeTwoLists(list1,list2), mergedList)
    });
})

describe('26. Remove Duplicates from Sorted Array', function() {
    it('short array, duplicates at the begining', function() {
        const nums = [1,1,2]
        const outNums = [1,2]
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
    it('long array, duplicates at the beginig', function() {
        const nums = [0,0,1,1,1,2,2,3,3,4]
        const outNums = [0,1,2,3,4]
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
    it('long array, duplicates at the end', function() {
        const nums = [0,1,2,3,4,4,5,5,5,6,6]
        const outNums = [0,1,2,3,4,5,6]
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
    it('long array, duplicates int the middle', function() {
        const nums = [0,1,2,3,4,4,5,6,7]
        const outNums = [0,1,2,3,4,5,6,7]
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
    it('no duplicates', function() {
        const nums = [0,1,2,3,4]
        const outNums = [0,1,2,3,4]
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
    it('empty array', function() {
        const nums = []
        const outNums = []
        let k = removeDuplicates(nums)
        assert.deepEqual(nums.slice(0,k), outNums)
    })
})

describe('27. Remove Element', function() {
        it('long array, remove elements at the beginig', function() {
            const nums = [0,0,1,1,1,2,2,3,3,4]
            const outNums = [4,3,1,1,1,2,2,3]
            let k = removeElement(nums, 0)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        it('long array, remove elements in the middle', function() {
            const nums = [0,0,1,1,1,2,2,3,3,4]
            const outNums = [0,0,4,3,3,2,2]
            let k = removeElement(nums, 1)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        it('long array, remove elements at the end', function() {
            const nums = [0,0,1,1,1,2,2,3,3,4]
            const outNums = [0,0,1,1,1,2,2,3,3]
            let k = removeElement(nums, 4)
            console.log(k, nums)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        it('long array, remove elements scattered', function() {
            const nums = [0,0,1,2,1,2,3,1,4]
            const outNums = [0,0,4,2,3,2]
            let k = removeElement(nums, 1)
            console.log(k, nums)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        it('val is not found', function() {
            const nums = [0,0,1,1,1,2,2,3,3,4]
            const outNums = [0,0,1,1,1,2,2,3,3,4]
            let k = removeElement(nums, 5)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        it('array is empty', function() {
            const nums = []
            const outNums = []
            let k = removeElement(nums, 5)
            assert.deepEqual(nums.slice(0,k), outNums)
        })
        
})