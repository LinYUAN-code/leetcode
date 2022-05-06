var RecentCounter = function() {
    this.l = 0;
    this.a = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.a.push(t);
    while(this.a[this.l]<t-3000) {
        this.l++;
    }
    return this.a.length-this.l;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */