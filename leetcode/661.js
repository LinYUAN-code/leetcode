/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {
    // 虽然可以前缀和写--但是没什么必要
    let n = img.length;
    let m = img[0].length;
    let dx = [-1,-1,0,1,1,1,0,-1];
    let dy = [0,1,1,1,0,-1,-1,-1];
    const getCount = function(x,y) {
        let ans = img[x][y];
        let count = 1;
        for(let i=0;i<8;i++) {
            let k = img[x+dx[i]]?.[y+dy[i]];
            if(typeof k !== "undefined") {
                count++;
                ans += k;
            } 
        }
        return Math.floor(ans/count);
    }
    let ans = [];
    for(let i=0;i<n;i++)ans[i] = [];
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++) {
            ans[i][j] = getCount(i,j);
        }
    return ans;
};