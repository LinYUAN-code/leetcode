var StockSpanner = function() {
    // 单调栈
    this.stk = [];
    this.arr = [];
    this.id = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.arr.push(price);
    while(this.stk.length && price >= this.arr[this.stk[this.stk.length - 1]]) {
        this.stk.pop();
    }
    const p = this.stk[this.stk.length-1];
    let pre = typeof p !== 'undefined' ? p : -1;
    this.stk.push(this.id++);
    // console.log(this.stk.map(v=>this.arr[v]),price,pre);
    return this.id - pre - 1;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */