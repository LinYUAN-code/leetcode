/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
 var longestSubsequence = function(arr, difference) {
    // 定差子序列--动态规划
    // 软件管理：权重法--扼杀局部最优
    let f = [];
    let mp = {};
    let ans = 1;
    for(let i=arr.length-1;i>=0;i--) {
        let j = arr[i] + difference;
        if(!mp[j]) {
            mp[arr[i]] = 1;
        } else {
            mp[arr[i]] = Math.max(mp[arr[i]] || 0,mp[j]+1);
            ans = Math.max(mp[arr[i]],ans);
        }
    }
    return ans;
};