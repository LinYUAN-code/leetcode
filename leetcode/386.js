/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    // 递归解法
    // let ans = [];
    // const dfs = (u) =>  {
    //     if(u)ans.push(u);
    //     for(let i=0;i<=9;i++) {
    //         if(!u && !i)continue;
    //         if(parseInt(u+i)<=n)dfs(u+i);
    //     }
    // }
    // dfs("");


    // 迭代解法
    /*
        如果能够增加位数优先增加位数
        如果不能够增加位数了--那么减少位数-再加一
    */
    let ans = [];
    let num = 1;
    for(let i=1;i<=n;i++) {
        ans.push(num);
        if(num*10<=n) {
            num *= 10;
        } else {
            while(num%10===9 || num+1>n) {
                num = Math.floor(num/10);
            }
            num++;
        }
    }
    return ans;
};