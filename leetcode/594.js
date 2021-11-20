/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    // 最大和最小的插值是1也就是统计元素个数就完事了
    let mp = {};
    for(let x of nums) {
        if(typeof mp[x] === 'undefined')mp[x] = 1;
        else mp[x]++;
    }
    let ans = 0;
    const max = Math.max
    for(let x in mp) {
        x = parseInt(x,10);
        let tem = (mp[x+1]?mp[x+1]:-1000000) + mp[x];
        ans = max(ans,tem);
    }
    return ans;
};