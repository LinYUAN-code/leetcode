/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
 var outerTrees = function(trees) {

    // ConvexHull 二维凸包
    // Andrew算法
    // 用来记录所有凸包上的点
    let ans = [];
    // ba × ca
    const cross = (a,b,c) => {
        let x1 = b[0] - a[0];
        let y1 = b[1] - a[1];
        let x2 = c[0] - a[0];
        let y2 = c[1] - a[1];
        return x1*y2 - x2*y1;
    }

    const Andrew = () => {
        // 从小到大排序 先排x后排y
        trees.sort((a,b)=>{
            if(a[0]===b[0])return a[1] - b[1];
            return a[0] - b[0];
        });
        let m = 0;
        let n = trees.length;
        // 寻找下凸包边界
        for(let i=0;i<n;i++) {
            while( m > 1 && cross(ans[m-2],ans[m-1],trees[i]) < 0)m--;
            ans[m++] = trees[i];
        }
        let k = m;
        // 寻找上凸包边界
        for(let i=n-2;i>=0;i--) {
            while(m > k && cross(ans[m-2],ans[m-1],trees[i]) < 0)m--;
            ans[m++] = trees[i];
        }
        while(ans.length > m)ans.pop();
        // console.log(trees);
        // console.log(ans);
        if(n>1) {
            ans.pop(); 
        }
        ans = [...new Set(ans)];
    }
    Andrew();
    return ans;
};