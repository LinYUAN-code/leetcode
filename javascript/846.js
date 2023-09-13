/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    // 首先想到的是一定得要排序
    // 排序之后用哈希表统计数字个数
    // 然后从头向后考虑就行了
    hand.sort((a,b)=>{
        return a - b;
    });
    let mp = {};
    for(let x of hand) {
        if(!mp[x])mp[x] = 0;
        mp[x]++;
    }
    // console.log(mp);
    for(let x in mp) {
        if(!mp[x])continue;
        x = parseInt(x);
        // console.log(x);
        for(let i=1;i<groupSize;i++) {
            // console.log(x+i,mp[x+i]);
            if(!mp[x+i] || mp[x+i]<mp[x])return false;
        }
        for(let i=groupSize-1;i>=0;i--)mp[x+i] -= mp[x];
    }
    return true;
};