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
 var sortList = function(head) {
    // 链表排序需要考虑的点是--链表两个节点之间的交换复杂度和他们的位置相关。
    // 1.实现链表排序最简单的应该就是冒泡排序了吧。
    // 2.可以使用归并排序（两个有序链表的合并是可以做到O(n)的--开一个dump头就ok）
    // 3.可以使用至底向上--》就是枚举长度罢了--没必要差不了多少复杂度
    const merge = function(l1,l2) {
        let d = new ListNode();
        let p = d;
        while(l1!=null && l2!=null) {
            if(l1.val <= l2.val) {
                p.next = l1;
                l1 = l1.next;
                p = p.next;
            } else {
                p.next = l2;
                l2 = l2.next;
                p = p.next;
            }
        }
        while(l1!=null) {
            p.next = l1;
            l1 = l1.next;
            p = p.next;
        }
        while(l2!=null) {
            p.next = l2;
            l2 = l2.next;
            p = p.next;
        }
        return d.next;
    }
    const sort = function(head,tail) {
        if(head===null)return head;
        if(head.next===tail) {
            head.next = null;
            return head;
        }
        // 通过快慢指针找到中间分界点。
        let slow = head;
        let fast = head;
        while(fast!=tail) {
            if(fast.next===tail || !fast.next.next === tail) {
                break;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        let l1 = sort(head,slow);
        let l2 = sort(slow,tail);
        return merge(l1,l2);
    }
    return sort(head,null);
};

