/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    let l=0,r=num;
    while(l<r) {
        let mid = Math.floor((l+r+1)/2)
        if(mid*mid <= num)l = mid;
        else r = mid-1
    }
    // console.log(l);
    if(l*l != num)return false;
    return true;
};