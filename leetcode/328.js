/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    // 重构整条链表--保存奇数节点的尾部以及偶数节点的尾部
    if(head===null)return null;
    let now = head;
    let ohaed = new ListNode();
    let ehead = new ListNode();
    let odd = ohaed;
    let even = ehead;
    let flag = 0;
    while(now!=null) {
        if(!flag) {
            odd.next = now;
            now = now.next;
            odd.next.next = null;
            odd = odd.next;
        } else {
            even.next = now;
            now = now.next;
            even.next.next = null;
            even = even.next;
        }
        flag = (flag+1)%2;
    }
    odd.next = ehead.next;

    return ohaed.next;
};