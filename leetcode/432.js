var AllOne = function() {
    this.List = function List(key,val,pre,next) {
        this.val = val;
        this.pre = pre;
        this.next = next;
        this.key = key;
    }
    this.head = new this.List("",99999999);
    this.end = new this.List("",-10);
    this.head.next = this.end;
    this.head.pre = null;
    this.end.pre = this.head;
    this.end.next = null;

    this.insert = function(key,val) {
        let p = new this.List(key,val);
        let pre = this.end.pre;
        p.next = this.end;
        this.end.pre = p;
        pre.next = p;
        p.pre = pre;
        return p;
    }

    this.change = function(pre,node) {
        pre.pre.next = node;
        node.pre = pre.pre;
        node.next.pre = pre;
        pre.next = node.next;
        node.next = pre;
        pre.pre = node;
    }

    this.movFront = function(node) {
        while(node.val > node.pre.val) {
            let pre = node.pre;
            this.change(pre,node);
        }
    }

    this.moveBack = function(node) {
        if(node.val===0) {
            node.pre.next = node.next;
            node.next.pre = node.pre;
            this.mp[node.key] = null; 
            return ;
        }
        while(node.val < node.next.val) {
            this.change(node,node.next);
        }
    }


    this.mp = {};
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if(this.mp[key]) {
        this.mp[key].val++;
        this.movFront(this.mp[key]);
    } else {
        this.mp[key] = this.insert(key,1);
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    this.mp[key].val--;
    this.moveBack(this.mp[key]);
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    return this.head.next.key;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    return this.end.pre.key;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */