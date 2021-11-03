/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    // 温度范围 30--100
    // 时间复杂度 nm
    // 优化---单调栈--
    // let m = [];
    // let ans = [];
    // let n = temperatures.length;
    // ans[n-1] = 0;
    // m[temperatures[n-1]] = n-1;
    // for(let i=n-2;i>=0;--i) {
    //     ans[i] = 0x3f3f3f3f;
    //     for (let j=temperatures[i]+1;j<=100;j++) {
    //         if(m[j])
    //             ans[i] = Math.min(ans[i],m[j]-i);
    //     }
    //     if(ans[i]===0x3f3f3f3f)ans[i]=0;
    //     m[temperatures[i]] = i;
    // }
    // return ans;


// 单调栈解法
    let tk = [];
    let top = -1;
    let ans = [];
    let n = temperatures.length;
    for(let i=n-1;i>=0;i--) {
        while(top>=0&&temperatures[i]>=temperatures[tk[top]])top--;
        if(top==-1)ans[i] = 0;
        else ans[i] = tk[top] - i;
        tk[++top] = i;
    }
    return ans;
};