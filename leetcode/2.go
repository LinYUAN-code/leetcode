package leetcode
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/*
   模拟相加的过程就好了
	85%
*/
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/*
   模拟相加的过程就好了
*/
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1==nil || l2==nil {
		return nil
	}
	// 建立一个虚拟头节点--方便操作统一
	head := &ListNode{}
	cur := head
	s := 0
	c := 0
	for l1!=nil || l2!=nil {
		s = 0
		if l1 != nil {
			s += l1.Val
		}
		if l2 != nil {
			s += l2.Val
		}
		s += c
		if s>=10 {
			c = 1
		}else {
			c = 0
		}
		cur.Next = &ListNode{Val:s%10,Next:nil}
		cur = cur.Next
		if l1 != nil {
			l1 = l1.Next
		}
		if l2 != nil {
			l2 = l2.Next
		}
	}
	if c > 0 {
		cur.Next = &ListNode{Val:1,Next:nil}
	}
	return head.Next
}
