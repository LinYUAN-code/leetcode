/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    // 1.堆 klogn
    // 2.变种快排---O(n) ==> n(1/2+1/4+1/8+...)
    const findk = function(l,r,k) {
        if(l>=r)return nums[l];
        let mid = (l+r)>>1;
        let tem = nums[mid];
        let i = l-1,j = r+1;
        while(i<j) {
            do i++;while(nums[i]<tem);
            do j--;while(nums[j]>tem);
            if(i<j)[nums[i],nums[j]] = [nums[j],nums[i]];
        }
        let plen = j-l+1;
        if(plen>=k) {
            return findk(l,j,k)
        } else {
            return findk(j+1,r,k-plen);
        }
    }
    return findk(0,nums.length-1,nums.length-k+1);
};