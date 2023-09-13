/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
 var maximumBeauty = function(flowers, newFlowers, target, full, partial) {
    // 排序+枚举+二分+前缀和
    // 首先枚举让多少个花园完美
    // 然后枚举让后面的花园可以达到的最小值
    // 二分出有多少个花园没有达到最小值--然后用前缀进行判断
    let ans = 0;
    const max = Math.max;
    // 从大到小排序
    let a = flowers.sort((a,b)=>{
        return b-a;
    });
    let n = a.length;
    let s = [];
    for(let i=0;i<n;i++) {
        if(!i)s[i] = a[i];
        else s[i] = s[i-1] + a[i];
    }

    const find = (st,val) => {
        let l = st;
        let r = n-1;
        while(l<r) {
            let mid = (l+r)>>1;
            if(a[mid] <= val)r = mid;
            else l = mid + 1;
        }
        return l;
    }
    // 二分枚举最小值
    const check = (st,val,knum) => {
        // 找到第一个小于其的值
        // console.log(st,val,knum);
        let k = find(st,val);
        let num = n - k;
        // console.log(a,k,val*num,(s[n-1]-(k>=1?s[k-1]:0)));
        return  num*val - (s[n-1]-(k>=1?s[k-1]:0)) <= knum;
    }
    let i = 0;
    while(i<n&&a[i]>=target)i++;
    let cost = 0;
    for(;i<=n;i++) {
        if(i) {
            if(a[i-1]<target) {
                cost += target - a[i-1];
            }
            if(cost>newFlowers)break;
        }
        let l = 0;
        let r = target-1;
        if(i!==n) {
            while(l<r) {
                let mid = (l+r+1) >> 1;
                if(check(i,mid,newFlowers-cost))l = mid;
                else r = mid - 1;
            }
        }
        ans = max(ans,i*full + l*partial);
    }
    return ans;
};