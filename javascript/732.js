
var MyCalendarThree = function() {
    // 动态开店线段树+懒惰标记
    this.lazy = new Map();
    this.tree = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.update(1,start,end-1,0,1000000000);
    return this.tree.get(1) || 0;
};


MyCalendarThree.prototype.update = function(idx,start,end,l,r) {
    if(r < start || end < l) {
        return ;
    }
    if(start <= l && r <= end) {
        this.tree.set(idx,(this.tree.get(idx) || 0) + 1);
        // 保存所有的累计＋
        this.lazy.set(idx,(this.lazy.get(idx) || 0) + 1);
    } else {
        const mid = (l + r) >> 1;
        this.update(idx<<1,start,end,l,mid);
        this.update((idx<<1)|1,start,end,mid+1,r);
        this.tree.set(idx,(this.lazy.get(idx) || 0) + Math.max((this.tree.get(2*idx) || 0),(this.tree.get(2*idx + 1) || 0)));
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */