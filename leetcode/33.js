/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l=0,r=nums.length-1;
    while(l<r) {
        let mid = Math.floor((l+r)/2);
        if(target === nums[mid])return mid;
        if(target===nums[r])return r;
        if(target===nums[l])return l;
        if(target<nums[r]) {
            if(nums[mid]<target)l = mid+1;
            else if(nums[mid]>nums[r])l = mid+1;
            else r = mid;
        } else {
            if(nums[mid]>target)r = mid-1;
            else if(nums[mid]<nums[l])r = mid-1;
            else l = mid+1;
        }
   }
   if(nums[l]==target)return l;
   if(nums[r]==target)return r;
   return -1;
};