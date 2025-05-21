/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0;
    var map = new Map();
    var left = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            // Move the left pointer to the right of the previous index of s[right]
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right); // Update the latest index of the character
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength
};