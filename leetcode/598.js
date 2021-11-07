/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 var maxCount = function(m, n, ops) {
    if(ops.length===0)return m*n;
    let ma = [];
    let a = 0x3f3f3f3f
        ,b = 0x3f3f3f3f;
    for(let i=0;i<ops.length;i++) {
        a = Math.min(a,ops[i][0]);
        b = Math.min(b,ops[i][1]);
    }
    return a*b;
};