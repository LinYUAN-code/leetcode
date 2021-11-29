/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var kthSmallestPrimeFraction = function(arr, k) {
    // 数据范围 1000
    // 1.最简单的方法--那肯定是枚举n^2对数字然后排序---获取用堆来维护前k个值
    // 2.前面的那个方法--我们太暴力了，根本没有使用递增这个条件，
    //   双指针 + 二分 
    //   我们每次二分 一个 实数 t (0,1) 然后用双指针求出有多少数字小于等于它---如果是k那么直接取最大的那个k就是答案
    //   可以证明最大的二分次数不超过30次
    let opt = 2;
    if(opt === 1) {
        let tmp = [];
        for(let i=0;i<arr.length;i++) 
            for(let j=i+1;j<arr.length;j++) {
                tmp.push([arr[i],arr[j]]);
            }
        tmp.sort((a,b)=>{
            return a[0]/a[1] - b[0]/b[1];
        })
        return tmp[k-1];
    } else if (opt === 2) {
        const max = Math.max;
        let n = arr.length;
        const floor = Math.floor;
        const sol = function(t) {
            let i = 0,j = 1;
            let maxx = 0;
            let ii;
            let cnt = 0;
            for(;j<n;j++) {
                for(;i<=j;) {
                    let tem = arr[i]/arr[j];
                    if( tem <= t ) {
                        if(tem > maxx) {
                            maxx = tem;
                            ii = [arr[i],arr[j]];
                        }
                        i++;
                    } else {
                        cnt += i;
                        break;
                    }
                }
            }
            return [cnt,ii];
        }

        let l = 0,r = 1;
        let tem = 0;
        while(true) {
            let mid = (l+r) / 2;
            let x = sol(mid);
            if(x[0]===k) {
                return x[1];
            }
            if(tem>=30)break;
            if(x[0] < k) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return -1;
    } else {

    }
};