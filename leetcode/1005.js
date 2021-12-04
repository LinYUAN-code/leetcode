/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    // 我们肯定得把负数取反--如果都是正数那么我们取反最小的正数
    // 题目的数字范围很小 我们可以使用桶排序
    let n = nums.length;
    k %= 2*n;
    let buckets = [];
    for(let i=-100;i<=100;i++)buckets[i] = 0;
    for(let x of nums) {
        buckets[x]++;
    } 
    for(let i=-100;i<0 && k>0;i++) {
        if(buckets[i]) {
            if(buckets[i] <= k) {
                buckets[-i] += buckets[i];
                k -= buckets[i];
                buckets[i] = 0;
            } else {
                buckets[-i] += k;
                buckets[i] -= k;
                k = 0;
            }
        }
    }
    // k % 2
    let ans = 0;
    if( k%2 !== 0) {
        for(let i=0;i<=100;i++)
            if(buckets[i]) {
                buckets[i]--;
                buckets[-i]++;
                break;
            }
    }
    for(let i=-100;i<=100;i++) {
        ans += i * buckets[i];
    }
    return ans;
};