/**
 * @param {number[][]} rects
 */
 var Solution = function(rects) {
    // 前缀和 + 二分
    this.a = rects;
    this.s = [];
    this.s[-1] = 0;
    for(let x of rects) {
        // 边线也算
        let x1 = x[2] - x[0] + 1;
        let y1 = x[3] - x[1] + 1;
        // 前缀和
        this.s.push(this.s[this.s.length-1] + x1*y1);
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let k = Math.floor(Math.random() * this.s[this.s.length - 1]) + 1;
    // 0
    let l = 0;
    let r = this.s.length-1;
    while(l<r) {
        let mid = (l+r) >> 1;
        if(this.s[mid] < k)l = mid + 1;
        else r = mid;
    }
    console.log(this.s,k,l);
    k -= this.s[l-1];
    k--;
    let w = this.a[l][2] - this.a[l][0] + 1;
    return [this.a[l][0] + k%w,Math.floor(k/w) + this.a[l][1]];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */