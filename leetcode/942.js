/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    /*
        如果是I开头  第一个数组选0
        如果是D开头  第一个数字选n
        同时保证了下一个数字可以选任意值
        问题变为 [1-n] 或者 [0,n-1]  ---> 问题规模减小了
        这样就可以保证一定有解
    */
    let ans = [];
    let n = s.length;
    let l = 0;
    let r = n;
    for(let i=0;i<s.length;i++) {
        if(s[i]==='I') {
            ans.push(l++);
        } else {
            ans.push(r--);
        }
    }
    ans.push(l);
    return ans;
};