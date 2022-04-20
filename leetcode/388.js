/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    // 模拟
    let s = [];
    const check = (i) => {
        let len = 0;
        for(;i<input.length;i++) {
            if(input[i]==='\n') {
            } else if(input[i]==='\t') {
                len++;
            } else {
                break;
            }
        }
        return [i,len];
    }
    for(let i=0;i<input.length;i++) {
        let [k,len] = check(i);
        let num = 0;
        let isFile = false;
        while(k<input.length) {
            if(input[k]!=='\n' && input[k]!=='\t') {
                if(input[k]==='.') {
                    isFile = true;
                }
                num++;
                k++;
            } else break;
        }
        i = k - 1;
        s.push({
            num,
            len,
            isFile
        });
    }
    // console.log(s);
    let ans = 0;
    const max = Math.max;
    let ss = [];
    ss[-1] = 0;
    let len = -1;
    for(let x of s) {
        ss[x.len] = ss[x.len-1] + x.num;
        if(x.isFile) {
            ans = max(ans,ss[x.len]+x.len);
        }
    }
    // console.log(ss);
    return ans;
};