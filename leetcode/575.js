/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    // 偶数个也就是分一半如果a有了那么分到b就ok
    let mp = new Map();
    let b =  0;
    let a = 0;
    let ta = 0;
    let h = candyType.length/2;
    for(let x of candyType) {
        if(ta == h)break;
        if(mp[x] && b<h) {
            b++;
            continue;
        }
        if(!mp[x]) {
            a++;
            mp[x] = 1;
        }
        ta++;
    }
    return a;
};