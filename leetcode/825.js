/**
 * @param {number[]} ages
 * @return {number}
 */
 var numFriendRequests = function(ages) {
    // x 能够向y发送信息有
    // x > y
    // 0.5x + 7 < y
    // y<100 | x > 100
    // 可以看出条件是构成一个区间的
    // 我们可以排序之后使用双指针来解决这个问题
    ages.sort((a,b)=>{
        return a - b;
    });
    let l = 0;
    let ans = 0;

    for(let r=1;r<ages.length;r++) {
        while(l<r && (ages[l]<=0.5*ages[r]+7 || 
                      ages[l] > ages[r]      ||
                      (ages[l]>100 && ages[r] < 100)
        ))l++;
        ans += r - l;
    }
    // 1 1 1 1
    // n*(n-1)/2 
    let pre = -1;
    let num = 0;
    // console.log(ans);
    // console.log(ages);
    // 解决相同字符的问题
    for(let i=0;i<ages.length;i++) {
        if(ages[i]===pre) {
            num++;
        }
        if(ages[i]!==pre || i===ages.length-1) {
            if(!(pre <= 0.5*pre + 7))
                ans += num*(num-1)/2;
            pre = ages[i];
            num = 1;
        }
    }
    return ans;
};