/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    // 最简单的想法就是越大的放越前面
    // 但是存在字符串等长情况下比较的问题--比如 9123 ， 9 ， 9 应该是9 9 9123 
    // 所以我们得要重写排序函数
    nums = nums.map((v)=>v.toString(10));
    const cmp = function(a,b) {
        if( a+b > b+a)return -1;
        else return 1;
    }
    nums.sort(cmp);
    let ans = nums.join("");
    let id = 0;
    while(ans[id]==='0')id++;
    return ans.slice(Math.min(ans.length-1,id));
};