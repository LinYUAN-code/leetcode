/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    // 统计交集---》也就是找出相等的部分--》我们可以使用哈希表来解决这个问题
    // 但是如果数组是有序的话呢--》 有序的话 ， 我就可以用双指针将两个数从前到后进行扫描就行了
    // 如果num1 比 nums2 小很多--那么我们保存num2的哈希表就ok了吧

    // let mp1 = {};
    // let ans = [];
    // for(let i=0;i<nums1.length;i++) {
    //     if(!mp1[nums1[i]])mp1[nums1[i]] = 1;
    //     else mp1[nums1[i]]++;
    // }
    // for(let i=0;i<nums2.length;i++) {
    //     if(mp1[nums2[i]]) {
    //         mp1[nums2[i]]--;
    //         ans.push(nums2[i]);
    //     }
    // }
    // return ans;

    const cmp = function(a,b) {
        return a - b;
    }
    // 双指针扫描版本
    nums1.sort(cmp);
    nums2.sort(cmp);
    let j = 0;
    let ans = [];
    for(let i=0;i<nums1.length;i++) {
        while(j<nums2.length&&nums2[j]<nums1[i])j++;
        if(j<nums2.length&&nums1[i]===nums2[j]) {
            j++;
            ans.push(nums1[i]);
        }
    }
    return ans;
};