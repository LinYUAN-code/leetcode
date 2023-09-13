var MapSum = function() {
    // 2.利用哈希表来实现
    //   插入的时候要把原来的删除
    //
    this.mp = {};
    this.pre = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let delta = val;
    if(this.mp[key]) {
        delta -= this.mp[key];
    }
    for(let i=1;i<=key.length;i++) {
        let s = key.slice(0,i);
        if(!this.pre[s])this.pre[s] = 0;
        this.pre[s] += delta;
    }
    this.mp[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    return this.pre[prefix]?this.pre[prefix]:0;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */