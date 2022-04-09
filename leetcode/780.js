/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
 var reachingPoints = function(sx, sy, tx, ty) {
    // 首先tx >= sx ty >= sy
    // 反向推到
    while(tx!==ty && tx > sx && ty > sy) {
        if(tx > ty)tx %= ty;
        else if(ty > tx)ty %= tx;
    }
    // console.log(tx,ty);
    if(tx===sx && ty===sy)return true;
    if(tx===sx) {
        return ty>sy && (ty-sy)%sx === 0;
    }
    if(ty===sy) {
        return tx>sx && (tx-sx)%sy === 0;
    }
    return false;
};