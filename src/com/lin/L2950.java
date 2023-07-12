package src.com.lin;

public class L2950 {
    public ListNode deleteMiddle(ListNode head) {
        if(head.next == null) {
            return null;
        }
        ListNode fast = head;
        ListNode slow = head;
        ListNode pre = head;
        while(fast != null && fast.next != null) {
            fast = fast.next.next;
            pre = slow;
            slow = slow.next;
        }
        pre.next = slow.next;
        return head;
    }
}
