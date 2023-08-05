package src.com.lin;

public class L21 {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = null;
        ListNode now = null;
        while(list1 != null || list2 != null) {
            ListNode next;
            if(list1 == null || list2 == null) {
                next = list1 == null ? list2 : list1;
                list1 = list1 == null ? list1 : list1.next;
                list2 = list2 == null ? list2 : list2.next;
            } else {
                if(list1.val > list2.val) {
                    next = list2;
                    list2 = list2.next;
                } else {
                    next = list1;
                    list1 = list1.next;
                }
            }
            if(head == null) {
                head = next;
                now = next;
            } else {
                now.next = next;
                now = next;
            }
        }
        return head;
    }
}
