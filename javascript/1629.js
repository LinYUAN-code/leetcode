/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let r = releaseTimes.map((v,index)=>{
        if(!index)return v;
        return v - releaseTimes[index-1];
    });
    r = r.map((v,index)=>{
        return [v,keysPressed[index]];
    });
    r.sort((a,b)=>{
        if(a[0]===b[0]) {
            return b[1].charCodeAt(0) - a[1].charCodeAt(0);
        }
        return b[0] - a[0];
    });
    return r[0][1];
};