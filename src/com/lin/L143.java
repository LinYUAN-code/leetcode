package src.com.lin;

public class L143 {
    public void reorderList(ListNode head) {
        if(head == null) {
            return ;
        }
        ListNode mid = findMid(head);
        ListNode l = mid.next;
        mid.next = null;
        ListNode r = reverse(l);
        merge(head,r);
    }
    public ListNode findMid(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    public ListNode reverse(ListNode head) {
        if(head == null)return null;
        ListNode pre = head;
        ListNode next = head.next;
        head.next = null;
        while(next != null) {
            ListNode t = next.next;
            next.next = pre;
            pre = next;
            next = t;
        }
        return pre;
    }
    public void merge(ListNode l,ListNode r) {
        while(l != null && r != null) {
            ListNode t = l.next;
            ListNode t1 = r.next;
            l.next = r;
            r.next = t;
            r = t1;
            l = t;
        }
    }
}
