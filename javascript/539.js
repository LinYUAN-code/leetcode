/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
    
    // 最小时差肯定出现在相邻的时间附近
    const get = function(b,a) {
        let ah = parseInt(a.split(":")[0]);
        let am = parseInt(a.split(":")[1]);
        let bh = parseInt(b.split(":")[0]);
        let bm = parseInt(b.split(":")[1]);
        console.log(ah,am,bh,bm);
        return Math.min((24+bh-ah)*60 + (bm - am),(ah-bh)*60 + (am - bm));
    }
    timePoints.sort((a,b)=>{
        if(a===b)return 0;
        if(a>b)return 1;
        if(a<b)return -1;
    });
    let ans = 99999;
    for(let i=0;i<timePoints.length-1;i++) {
        ans = Math.min(ans,get(timePoints[i],timePoints[i+1]));
    }
    ans = Math.min(ans,get(timePoints[0],timePoints[timePoints.length-1]));
    return ans;
};