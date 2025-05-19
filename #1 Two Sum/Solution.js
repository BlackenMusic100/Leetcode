/**
 * Description: the simple way to solve this question is to brute force, going through every element in the array at most twice (worst case scenario)
 * Logic: Brute Force
 * Time Complexity: O(n^2)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    var firstNumIndex;
    var secondNumIndex;
    for (var i = 0; i < nums.length; i++) { // O(n)
        for (var j = i + 1; j < nums.length; j++) { // O(n^2)
            if (nums[i] + nums[j] === target) {
                firstNumIndex = i;
                secondNumIndex = j;
            }
        }
    }
    return [firstNumIndex, secondNumIndex]
};

/**
 * By creating hash table, it would only needed to go through every element in the array at most once (worst case scenario)
 * Logic: Hash table
 * create an object -> to store each number in the nums param when going through, where the value is the key of object and the index is the value of the object
 * first time will insert the first element of nums into the object. Exp: nums = [4, 2, 5], object = {4: 0}
 * second time will check such as if the target = 6, y = target - x, y = 6 - 2, which is 4. -> find if the object hasOwnProperty, if true return, else insert into object -> object = {4: 0, 2: 1}
 * Time Complexity: O(n)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    const through = {}; // nums[index] as key, index as value
    for (var i = 0; i < nums.length; i++) { // O(n)
        var differences = target - nums[i]; // x + y = target, and thus y = target - x
        if (through.hasOwnProperty(differences)) { 
            return [through[differences], i];
        } else {
            through[nums[i]] = i;    
        }
    }
}

