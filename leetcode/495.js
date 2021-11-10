/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let pre = timeSeries[0];
    let end = timeSeries[0] + duration - 1;
    let ans = 0;
    for(let i=1;i<timeSeries.length;i++) {
        if(timeSeries[i]<=end)end = timeSeries[i] + duration - 1;
        else {
            ans += end - pre + 1;
            end = 0;
            pre = timeSeries[i];
            end = pre + duration - 1;
        }
    }
    if(end){
        ans += end - pre + 1;
    }
    return ans;
};