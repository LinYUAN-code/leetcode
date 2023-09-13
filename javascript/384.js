// 打乱数组--也就是洗牌咯

/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
    // 保存原来的数组
    this.ori = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.ori;
};

/**
 * @return {number[]}
 */
//  洗牌
// 我们得保证每一个元素在任意一个位置上的概率是一样的
// 最简单的想法，每次都选取一个放在第一个位置上--总共n轮
// 2.洗牌算法 
Solution.prototype.shuffle = function() {
    // // 1.朴素想法
    // // 初始化一个数组来保存最后的答案
    // let n = this.nums.length;
    // let ans = new Array(n).fill(0);
    // let list = [];
    // this.ori.forEach(v=>list.push(v));
    // const floor = Math.floor
    // for(let i=0;i<n;i++) {
    //     let id = floor(Math.random()*list.length);
    //     ans[i] = list.splice(id,1); 
    // }
    // return ans;



    // 2.洗牌算法
    // 前向后
    let n = this.ori.length;
    let ans = this.ori.slice();
    const floor = Math.floor;
    for(let i=0;i<n;i++) {
        let k = floor(Math.random() * (n-i)) + i;
        [ans[i],ans[k]] = [ans[k],ans[i]];
    }
    return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */