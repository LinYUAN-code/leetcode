package src.com.lin;



public class L2130 {
    public int pairSum(ListNode head) {
        if(head == null)return 0;
        int ans = 0;
        ListNode slow = head;
        ListNode fast = head;
        while(fast != null && fast.next != null) {
            if(fast.next.next != null) {
                fast = fast.next.next;
            } else {
                fast = fast.next;
            }
            slow = slow.next;
        }
        ListNode pre = slow;
        slow = slow.next;
        pre.next = null;
        while(slow != null) {
            ListNode t = slow.next;
            slow.next = pre;
            pre = slow;
            slow = t;
        }
        ListNode now = head;
        while(fast != null) {
            ans = Math.max(ans, now.val + fast.val);
            now = now.next;
            fast = fast.next;
        }
        return ans;
    }
}
