/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    // 1. 数组化
    // 2. 水塘抽样
    /*
        水塘抽样也就是 让每一个被抽到的判定为 1/i 
        如果有三个数字
        比如第一个被抽到的概率 1/1 * (1-1/2) * (1-1/3) =》 1/1 * 1/2 * ... * (n-1)/n ==> 1/n
        同理对于其他的比如2
        1/2 * (1-1/3) ===> 1/k * k/k+1 * .... * n-1/n ==> 1/n
        所以保证所有的概率都一样 
    */
    this.a = [];
    while(head) {
        this.a.push(head.val);
        head = head.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.a[Math.floor(Math.random()*this.a.length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */