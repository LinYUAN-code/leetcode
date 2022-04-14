var RandomizedSet = function() {
    this.arr = [];
    this.mp = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */


RandomizedSet.prototype.insert = function(val) {
    if(typeof this.mp[val] === 'undefined') {
        this.mp[val] = this.arr.length;
        this.arr.push(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(typeof this.mp[val] !== 'undefined') {
        this.mp[this.arr[this.arr.length-1]] = this.mp[val];
        this.arr[this.mp[val]] = this.arr[this.arr.length-1];
        this.arr.length--;
        this.mp[val] = undefined;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let k = Math.floor(Math.random()*this.arr.length);
    return this.arr[k];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */