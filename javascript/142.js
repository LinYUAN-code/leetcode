/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // flody判环法
    if(head===null)return null;
    let slow = head;
    let fast = head;
    while(true) {
        if(!fast.next || !fast.next.next) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)break;
    }
    let ptr = head;
    while(ptr!=slow) {
        ptr = ptr.next;
        slow = slow.next;
    }
    return ptr;
};