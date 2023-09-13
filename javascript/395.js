/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubstring = function(s, k) {
    // 1--10^4
    // 只有小写字母
    // 1.前缀和+暴力枚举
    // 2.二分长度+前缀和--时间复杂度nlogn
    // 3.滑动窗口--->我们可以枚举最多的字符个数--26*26*n
    // 4. 对于出现个数少于k且大于0的字符,肯定不会出现在我们的答案中,他们会将我们的字符划分成多段,接着我们再递归进行处理,
    //    时间复杂度分析:每一层的时间复杂度是O(n) , 然后最多有26层(26个字母)--所以时间复杂度26*n
    let ans = 0;
    const max = Math.max;
    const sol = function(l,r) {
        // 找到大于0且小于k的字符
        // console.log(l,r);
        if(l>r)return 0;
        let cnt = {};
        for(let i=l;i<=r;i++) {
            if(typeof cnt[s[i]] === 'undefined') cnt[s[i]] = 1;
            else cnt[s[i]]++;
        }
        let ans = 0;
        let flag = false;
        let t;
        for(let x in cnt) {
            if(cnt[x]>0&&cnt[x]<k) {
                flag = true;
                t = x;
                break;
            }
        }
        if(!flag)return r-l+1;
        let start = l;
        for(;start<=r;start++) {
            while(s[start]===t)start++;
            if(start>r)break;
            let end = start;
            while(end<r&&s[end]!==t)end++;
            if(s[end]!==t)ans = max(ans,sol(start,end));
            else ans = max(ans,sol(start,end-1));
            start = end;
        }
        return ans;
    }

    return sol(0,s.length-1);
};