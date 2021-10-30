/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    // 暴力--把数组保存起来然后判断
    // 找到中间节点过程中将前半部分反转--然后比较--太麻烦了..
    let res = [];
    while(head) {
        res.push(head.val);
        head = head.next;
    }
    let l=0,
        r=res.length-1;
    while(l<r) {
        if (res[l]!=res[r])return false;
        l++;
        r--;
    }
    return true;
};