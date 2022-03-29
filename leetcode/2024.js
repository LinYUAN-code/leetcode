/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
 var maxConsecutiveAnswers = function(answerKey, k) {
    /*
        蛮经典的一道题目
            答案肯定来自一个区间-其中有k个需要更改的字母
        需要更改的字母是具有递增性的--所以我们可以使用滑动区间去做这道题目 
    */
    let n = answerKey.length;
    let l = 0;
    let r = 0;
    let mp = {};
    mp["T"] = mp["F"] = 0;
    let ans = 1;
    while(true) {
        if(l===n)break;
        while(r<n && Math.min(mp[answerKey[r]]+1,mp[(answerKey[r]==='T'?'F':'T')]) <= k) {
            mp[answerKey[r]]++;
            r++;
        }
        // console.log(l,r,mp);
        ans = Math.max(ans,r-l);
        mp[answerKey[l]]--;
        l++;
    }
    return ans;
};