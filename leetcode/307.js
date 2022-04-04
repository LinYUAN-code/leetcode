/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    // 树状数组
    this.tri = [];
    let n = nums.length;
    this.nums = nums;
    const lowbit = (x) => {
        return x & (-x);
    }
    for(let i=0;i<=n;i++)this.tri[i] = 0;
    this.add = (x,val) => {
        for(;x<=n;x+=lowbit(x)) {
            this.tri[x] += val;
        }

    }
    this.sum = (x) => {
        let ans = 0;
        for(;x;x-=lowbit(x)) {
            ans += this.tri[x];
        }
        return ans;
    }
    for(let i=0;i<nums.length;i++) {
        this.add(i+1,nums[i]);
    }

};



/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.add(index+1,val-this.nums[index]);
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sum(right+1) - this.sum(left);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */