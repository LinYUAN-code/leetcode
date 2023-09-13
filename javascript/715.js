var RangeModule = function() {
    // 区间题目
    // 1.可以考虑动态开点线段树
    // 2.使用有序集合+区间合并也可以解决这个问题--但是js -.-

    // 标记当前区间是否全是1
    this.tri = {};
    this.lazy = {};
    this.query = (idx,l,r,tl,tr) => {
        if(l>=tl && r<=tr) {
            return this.tri[idx];
        }
        this.pushDown(idx);
        let ans = true;
        let mid = (l+r) >> 1;
        if(tl<=mid)ans &= this.query(idx<<1,l,mid,tl,tr);
        if(tr>mid)ans &= this.query(idx<<1|1,mid+1,r,tl,tr);
        return ans;
    }   
    this.add = (idx,l,r,tl,tr,k) => {
        if(l>=tl && r<=tr) {
            this.tri[idx] = k;
            this.lazy[idx] = k;
            return ;
        }
        this.pushDown(idx);
        let mid = (l+r) >> 1;
        if(tl<=mid)this.add(idx<<1,l,mid,tl,tr,k);
        if(tr>mid)this.add(idx<<1|1,mid+1,r,tl,tr,k);
        this.pushUp(idx);
    } 
    this.pushDown = (idx) => {
        if(typeof this.lazy[idx] === 'undefined') {
            return ;
        }
        this.tri[idx<<1] = this.lazy[idx];
        this.lazy[idx<<1] = this.lazy[idx];
        this.tri[idx<<1|1] = this.lazy[idx];
        this.lazy[idx<<1|1] = this.lazy[idx];
        this.lazy[idx] = undefined;
    }
    this.pushUp = (idx) => {
        this.tri[idx] = this.tri[idx<<1] & this.tri[idx<<1|1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    this.add(1,1,1000000000,left,right-1,true);
};  

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    return this.query(1,1,1000000000,left,right-1);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    this.add(1,1,1000000000,left,right-1,false);
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */