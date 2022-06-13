/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    // 注意到学生的身高都很矮...可以进行桶排序
    let b = [];
    for(let i=1;i<=100;i++)b[i] = 0;
    for(let x of heights) {
        b[x]++;
    }
    let i = 0;
    let ans = 0;
    for(let val=1;val<=100;val++) {
        for(let k=0;k<b[val];k++,i++) {
            if(heights[i]!==val)ans++;
        }
    }
    return ans;
};