var MyCalendar = function() {
    // 暴力
    // 平衡树
    // 线段树
    // 上班累了-.-不想手撸线段树了
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    end--;
    let flag = false;
    for(let x of this.arr) {
        if((x[0]<=end&&x[1]>=start) || (x[1]>=start&&x[0]<=end)) {
            flag = true;
            break;
        }
    }
    if(!flag) {
        this.arr.push([start,end]);
        return true;
    }
    return false;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */