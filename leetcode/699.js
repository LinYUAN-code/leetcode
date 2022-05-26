/**
 * @param {number[][]} positions
 * @return {number[]}
 */
 var fallingSquares = function(positions) {
    // 俄罗斯方块
    //  1.暴力枚举：由于可能的x轴长度为10^8 所以我们只好维护枚举每一块
    //  2.利用平衡树加快搜索[l,r]内最高的点的过程
    //  3.动态开点线段树
    //  4.线段树加离散化
    let n = positions.length;
    let h = [];
    h[0] = positions[0][1];
    let ans = [];
    let maxx = h[0];
    ans[0] = h[0];
    for(let i=1;i<n;i++) {
        let l = positions[i][0];
        let r = l + positions[i][1] - 1; 
        let hei = positions[i][1];
        for(let j=0;j<i;j++) {
            if(r>=positions[j][0] && l<=positions[j][0]+positions[j][1]-1) {
                hei = Math.max(hei,h[j]+positions[i][1]);
            }
        }
        h[i] = hei;
        maxx = Math.max(maxx,h[i]);
        ans[i] = maxx;
    }
    return ans;
};