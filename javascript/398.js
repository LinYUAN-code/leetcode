/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.random = function(x) {
    return Math.floor(Math.random()*x);
}

Solution.prototype.pick = function(target) {
    // 水塘抽样
    let cnt = 0;
    let ans = 0;
    for(let i=0;i<this.nums.length;i++) {
        let x = this.nums[i];
        if(x===target) {
            cnt++;
            if(this.random(cnt)===0) {
                ans = i;
            }
        }
    }
    return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */