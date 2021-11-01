/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    // 1.排序后寻找最长连续
    // 2.并查集--将自己加到 x-1的那个点上去
    if(!nums.length)return 0;
    let mp = new Map();
    for(let i=0;i<nums.length;i++) {
        mp.set(nums[i],i+1);
    }
    let f = [],d=[];
    let find = function(x) {
        return x===f[x]?x:f[x] = find(f[x]);
    }
    for(let i=1;i<=nums.length;i++) {
        f[i] = i;
        d[i] = 1;
    }
    let maxx = 1;
    for(let x of nums) {
        if(!mp.has(x-1))continue;
        let i = find(mp.get(x)),j = find(mp.get(x-1));
        if(i===j)continue;
        f[i] = j;
        d[j] += d[i];
        maxx = Math.max(maxx,d[j]);
    }
    return maxx;
};