/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let id = 0;
    nums.sort();
    let p = [];
    let pre = -1.1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===pre) {
            p[p.length-1].num++;
        } else {
            p.push({num:1,x:nums[i]});
            pre = nums[i];
        }
    }
    p.sort(function(a,b){
        return b.num - a.num;
    });
    // console.log(p);

    let ans = [];
    for(let i=0;i<k;i++) {
        ans.push(p[i].x);
    }
    return ans;
};