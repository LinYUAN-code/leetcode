package src.com.lin;

import java.util.HashSet;
import java.util.Set;

public class L142 {
    public ListNode detectCycle(ListNode head) {
        if(head == null) {
            return null;
        }
        Set<ListNode> set = new HashSet<>();
        while(head != null) {
            if(set.contains(head)) {
                return head;
            }
            set.add(head);
            head = head.next;
        } 
        return null;
    }
}
