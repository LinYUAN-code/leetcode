/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let n = nums.length;
    let l = 0;
    let r = n-1;
    while(l<r) {
        while(r>0&&nums[r]%2===1)r--;
        while(l<n-1&&nums[l]%2===0)l++;
        if(l<r) {
            let t = nums[r];
            nums[r] = nums[l];
            nums[l] = t;
            l++;
            r--;
        }
    }
    return nums;
};