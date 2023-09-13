package src.com.lin;

public class L141 {
    public boolean hasCycle(ListNode head) {
        if(head == null) {
            return false;
        }
        // 快慢指针
        ListNode fast = head;
        ListNode slow = head;
        while(fast != null && fast.next != null && slow != null) {
            fast = fast.next.next;
            slow = slow.next;
            if(fast != null && fast == slow) {
                return true;
            }
        }   
        return false;
    }
}
