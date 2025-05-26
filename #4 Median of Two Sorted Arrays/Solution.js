/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalArrayLength = nums1.length + nums2.length;
    var num3 = [...nums1, ...nums2];
    num3 = num3.sort((a, b) => a - b);
    if (totalArrayLength % 2 !== 0) {
        //find the mid
        const midIndex = Math.floor(totalArrayLength/2);
        return num3[midIndex];
    } else {
        //find the medium of the array and average them
        const mid1Index = (totalArrayLength / 2) - 1;
        const mid2Index = totalArrayLength / 2;
        return (num3[mid1Index] + num3[mid2Index]) / 2
    }
};

