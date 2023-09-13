/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    //  很经典的一道题目
    // 1.暴力--直接取k^2个数字
    // 1.堆解法
    const q = new MinPriorityQueue({
        priority: (v) => {
            return nums1[v[0]] + nums2[v[1]];
        }
    });
    for(let i=0;i<nums1.length;i++) {
        q.enqueue([i,0]);
    }
    let ans = [];
    while(k && q.size()) {
        let top = q.dequeue().element;
        k--;
        ans.push([nums1[top[0]],nums2[top[1]]]);
        if(top[1]+1<nums2.length) {
            q.enqueue([top[0],top[1]+1]);
        }
    }
    return ans;
};