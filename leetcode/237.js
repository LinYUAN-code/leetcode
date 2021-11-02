/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    //  交换值然后删除后面一个节点就好了
    [node.val,node.next.val] = [node.next.val,node.val];
    node.next = node.next.next;
};