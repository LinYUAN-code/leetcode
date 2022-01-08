/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // 构造题了---怎么构造格雷码
    // 1.公式法
    // 2.对称反转构造---我觉得这种方法比较容易想到--第一种不太好想
    // g[i] = b[i]^b[i+1]
    // 想一想为什么可以这么做
    /*
        0 ^ 0  , 1 ^ 0 , 10 ^ 1 , .... 
    */
    // let ans = [];
    // n = 2**n;
    // for(let i=0;i<n;i++) {
    //     ans[i] = i^(i>>1);
    // }
    // return ans;

    let ans = [0,1];
    for(let i=1;i<n;i++) {
        let b = ans.map(v=>{
            return v += 1<<i;
        }).reverse();
        ans = ans.concat(b);
    };
    return ans;
};