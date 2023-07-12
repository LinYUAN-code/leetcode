package src.com.lin;

public class L206 {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null)return head;
        ListNode now = head.next;
        ListNode pre = head;
        head.next = null;
        while(true) {
            ListNode t = now.next;
            now.next = pre;
            if(t == null)break;
            pre = now;
            now = t;
        }
        return now;
    }
}
