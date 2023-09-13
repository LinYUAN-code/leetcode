/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {
    // 二分答案
    houses.sort((a,b)=>{
        return a-b;
    });
    heaters.sort((a,b)=>{
        return a-b;
    })
    const isIn = function(i,j,r) {
        if(i >= j-r && i <= j+r)return true;
        return false;
    }

    const check = function(r) {
        let j = 0;
        for(let i=0;i<houses.length;i++) {
            while(!isIn(houses[i],heaters[j],r)) {
                j++;
                if(j==heaters.length)return false;
            }
        }
        return true;
    }
    let l=0,r=1e9;
    while(l<r) {
        let mid = (l+r) >> 1;
        if(check(mid))r = mid;
        else l = mid + 1;
    }
    return l;
};