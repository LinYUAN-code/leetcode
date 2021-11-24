/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // 200
    // 我们可以将前两个数弄成一组--后两个数弄成一组然后存进哈希表里
    // 为什么不能是前三个数呢？--这样就是三次方了
    // 
    let mp1 = {};
    for(let i=0;i<nums1.length;i++)
        for(let j=0;j<nums2.length;j++) {
            let k = nums1[i] + nums2[j];
            if(typeof mp1[k] === 'undefined')mp1[k] = 0;
            mp1[k]++;
        }
    let mp2 = {};
    for(let i=0;i<nums3.length;i++)
        for(let j=0;j<nums4.length;j++) {
            let k = nums3[i] + nums4[j];
            if(typeof mp2[k] === 'undefined')mp2[k] = 0;
            mp2[k]++;
        }

    let ans = 0;
    for(let x in mp1) {
        if(mp2[-x]) {
            ans += mp1[x] * mp2[-x];
        }
    }
    return ans;
};