/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    // 1.暴力直接排序--时间复杂度nlogn
    // 2.归并排序--时间复杂度更优 2*logk*n^
    // 3.快速排序--时间复杂度 n^2v ---> 快速排序求第k个数
    // 4.二分查找
    /*     上面的例子我们没有使用到有序这一个性质
           怎么利用起来呢？
           我们知道每一行的元素都是有序的
           有点像在两个有序数组里面找中位数的意思了 这道题目可以看作是那道题目的扩展了
           
           
           同时也和一道矩形方格里面去数的题目很像
           我们可以二分答案数字，然后判断矩形中有多少数字是小于它的，由于矩形的有序性，我们可以在O(n)的时间复杂度内进行判定
           所以总共时间复杂度就是 n*log(max - min)
           
    */
    let opt = 4;
    let n = matrix.length;
    let m = matrix[0].length;
    if(opt===1) {
        // 暴力直接排序
        // 时间复杂度 2*n^2*logn
        let tmp = [];
        for(let i=0;i<n;i++)
            for(let j=0;j<m;j++) {
                tmp.push(matrix[i][j]);
            }
        tmp.sort((a,b)=>{
            return a - b;
        });
        return tmp[k-1];
    } else if(opt === 3) {
        // 
        let arr = [];
        for(let i=0;i<n;i++)
            for(let j=0;j<m;j++)
                arr.push(matrix[i][j]);
        const find = function(l,r) {
            if(l>=r) {
                return arr[l];
            }
            let mid = Math.floor((l+r)/2);
            let tem = arr[mid];
            let i = l-1,j = r + 1;
            while(i < j) {
                do i++;while(arr[i]<tem);
                do j--;while(arr[j]>tem);
                if(i<j)[arr[i],arr[j]] = [arr[j],arr[i]];
            }   
            let kk = j - l + 1;
            if(k <= kk) {
                return find(l,j);
            }else {
                k -= kk;
                return find(j+1,r);
            }
        }
        return find(0,arr.length-1);
    } else {
        // 二分法
        let l = matrix[0][0];
        let r = matrix[n-1][m-1];
        const floor = Math.floor;
        const check = function(mid) {
            let cnt = 0;
            let i = n-1;
            let j = 0;
            while(i>=0) {
                while(j<n&&matrix[i][j]<=mid)j++;
                cnt += j;
                i--;
            }
            return cnt >= k;
        }
        while(l<r) {
            let mid = floor((l+r)/2);
            // 还可以最小
            if(check(mid))r = mid;
            else l = mid + 1; 
        }
        return l;
    }

};