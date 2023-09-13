/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var kMirror = function(k, n) {
    // 每次只需要枚举回文数字即可
    const reverse = function(a) {
        let s = a.split("");
        for(let i=0,j=s.length-1;i<j;i++,j--) {
            [s[i],s[j]] = [s[j],s[i]];
        }
        return s.join("");
    }
    const check = function(x) {
        let b = x.toString(k);
        if(b[0] === '0')return false;
        let rb = reverse(b);
        return b===rb;
    }

    // 怎么找十进制的下一个对称数
    // 1 2--》 9 --》 11 --》我们只需要让前半部分递增就行了
    // 比如：
    // 奇数情况 12321 --》 12421 
    // 偶数情况 1221  --》 1331  ——-》只需要让12递增然后后半部分复制就行 
    // 899998 ---》 99999
    // 10101  ---》 10201
    // 99999  ---》 100001
    // 1221   ---》 1331
    // 129921 ---》 130031
    const MyNext = function(x) {
        x = x.toString().split("");
        let n = x.length;
        let mid = Math.floor((n-1)/2);
        for(let i=mid;i>=0;i--) {
            if(x[i]!='9') {
                x[i]++;
                let k;
                if(n%2==0) {
                    k = 2*mid-i+1;
                } else {
                    k = 2*mid-i;
                }
                if(k != i) 
                    x[k]++;
                for(let j=i+1;j<k;j++)
                    x[j] = 0;
                return parseInt(x.join(""),10);
            }
        }    
        let ans = 1;
        for(let i=0;i<n;i++)ans *= 10;
        return ans+1;
    }

    let tmp = 1;
    let ans = 0;
    while(n) {
        if(check(tmp)) {
            ans += tmp;
            n--;
        }
        tmp = MyNext(tmp);
    }
    return ans;
}