/**
 * @param {string} num
 * @return {boolean}
 */
 var isAdditiveNumber = function(num) {
    // 有点意思的题目 --- 构成一个类型fibo序列
    // 那么我们可以枚举前两位数 然后调用高精度加法
    String.prototype.g = function(i) {
        return this.charCodeAt(i) - "0".charCodeAt(0);
    };
    String.prototype.reverse = function() {
        return this.split("").reverse().join("");
    };
    const add = function(a,b) {
        if(a.length < b.length)return add(b,a);
        a = a.reverse();
        b = b.reverse();
        let ans = [];
        let t = 0;
        for(let i=0;i<a.length;i++) {
            t += a.g(i);
            if(i<b.length)t += b.g(i);
            ans.push(t%10+"");
            t = Math.floor(t/10);
        }
        if(t)ans.push("1");
        return ans.join("").reverse();
    }
    const gets = function(f0,f1,n) {
        let ans = f0 + f1;
        let f = "";
        while(true) {
            if(ans.length >= n)break;
            let f = add(f0,f1);
            f0 = f1;
            f1 = f;
            ans += f1;
        }
        return ans;
    }
    let n = num.length;
    for(let i=0;i<n;i++)
        for(let j=i+1;j<n-1;j++) {
            let f0 = num.slice(0,i+1);
            let f1 = num.slice(i+1,j+1);
            // 不能有前导0
            if(f0.length!==1 && f0[0]==='0')continue;
            if(f1.length!==1 && f1[0]==='0')continue;
            let s = gets(f0,f1,n);
            if(s===num) {
                // console.log(f0,f1);
                return true;
            }
        }
    return false;
};