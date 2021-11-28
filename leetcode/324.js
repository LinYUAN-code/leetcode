/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var wiggleSort = function(nums) {
    // 我们只需要将数组分成两个    
    // 1.最简单的想法那肯定是暴力的排序了---这样子做还不能原地排序---有点拉跨
    // 但是我们可以发现，我们并不需要前后两部分内部有序，我们只需要能够把他们分开就完事了，所以理论上来说时间复杂度还是可以降低的
    // 2.最有灵感的方法来自有第k大数---也就是快速排序求第k大数的那道题目
    let opt = 2;
    const floor = Math.floor
    if(opt===1) {
        nums.sort((a,b)=>{
            return a-b;
        });
        // 让前面的多一点
        // 4 5 5 6
        // [5,6,4,5]
        // 5 6 4 5
        // 4 5 5 6
        // a1 a2 a3 a4
        // a1 a3 a2 a4
        // 但是这样子排列如果a2和a2相等的话就会出问题
        // 最好的排列方式是什么呢
        // a2 a4 a1 a2
        // 题目保证会有解---有没有更加普遍的方法去生成这个答案呢？
        let l = floor((nums.length-1)/2);
        let r = nums.length - 1;
        let ans = [];
        while(l >=0 || r > floor(nums.length/2)) {
            ans.push(nums[l]);
            l--;
            if(r < nums.length)
                ans.push(nums[r]);
            r--;
        }
        for(let i=0;i<nums.length;i++)
            nums[i] = ans[i];        
    } else {
        // 对于上面发生的冲突其实就是两个子数组里面出现了相同元素导致,这里假定相同元素为r我们可以发现,相同元素一定是数组里面的中位数
        // 并且只有中位数的大小大于一定范围的时候才会造成冲突,所以后面我们取了个反序进行排列,这样就可以错开中位数相遇的情况
        // 那么我们的算法就可以简化为找出中位数,找出大于中位数的数组 找出小于中位数的数组--然后将中位数填充进去就完事了.
        // ok问题进一步简化为寻找无序数组的中位数...无序数组的中位数怎么找呢--我们可以想到寻找数组中的第k大叔--中位数不就是第
        // (nums.length)/2 个数字嘛 --我们找出来后直接线性扫描一次就完事了
        const find = function(l,r,k) {
            if(l>=r)return nums[l];
            let mid = floor((l+r)/2);
            let tem = nums[mid];
            let i = l-1;
            let j = r+1;
            while(i<j) {
                do i++;while(nums[i]<tem);
                do j--;while(nums[j]>tem);
                if(i<j)[nums[i],nums[j]] = [nums[j],nums[i]];
            }
            // [l-j]就是全部都是小于等于nums的值
            let cnt = j - l + 1;
            if(k<=cnt) {
                return find(l,j,k);
            } else {
                return find(j+1,r,k-cnt);
            }
        }
        let mid = find(0,nums.length-1,(nums.length)/2);
        let num = 0;
        
        // 原地处理
        // A:[mid...,a]
        // B:[b,....mid..]
        // mid b mid b mid b a 。。 a mid
        // 原地处理还真想出来
        for(let i=0;i<nums,length;i++) {
            
        }

    }
};