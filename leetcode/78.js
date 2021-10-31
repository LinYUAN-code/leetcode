/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let ans = [];
    let n = nums.length;
    for(let i=0;i<(1<<n);i++) {
        ans.push(nums.filter((val,index)=>{
            if((i>>index)&1)return true;
        }));
    }
    return ans;
};