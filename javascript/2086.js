/**
 * @param {string} street
 * @return {number}
 */
 var minimumBuckets = function(street) {
    // 贪心：我们从左到右进行扫描，每次前面的都是以及满足了的，我们优先把桶放在右边
    let ans = 0;
    let n = street.length;
    street = Array.from(street);
    for(let i = 0;i<n;i++) {
        if(street[i] !== 'H')continue;
        if(i-1>=0 && street[i-1]==='B')continue;
        else if(i+1<n && street[i+1]=='.')street[i+1] = "B";
        else if(i-1>=0 && street[i-1]==='.')street[i-1] = "B";
        else return -1;
    }
    let sum = 0;
    street.forEach(v => sum += v==='B');
    return sum;
};