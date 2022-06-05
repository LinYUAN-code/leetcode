/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
 var Solution = function(radius, x_center, y_center) {
    this.r2 = radius * radius;
    this.r = radius;
    this.x = x_center;
    this.y = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    // 拒绝采样
    while(true) {
        let x = (Math.random()*2*this.r - this.r);
        let y = (Math.random()*this.r*2 - this.r);
        if(x*x + y*y <= this.r2) {
            return [x+this.x,y+this.y];
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */