package src.com.lin;



public class L328 {
    public ListNode oddEvenList(ListNode head) {
        if(head == null)return null;
        ListNode p = head;
        ListNode pNode = head;
        ListNode node = head.next;
        int num = 0;
        while(node != null) {
            if(num % 2 == 1) {
                pNode.next = node.next;
                node.next = p.next;
                p.next = node;
                p = node;
                node = pNode.next;
            } else {
                pNode = node;
                node = node.next;
            }
            num++;
        }
        return head;
    }
}
