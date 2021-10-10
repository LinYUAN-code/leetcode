package leetcode

import "container/heap"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1==nil {
		return l2
	}
	if l2==nil {
		return l1
	}
	head := new(ListNode)
	now := head
	for l1!=nil||l2!=nil {
		if l1==nil {
			now.Val = l2.Val
			l2 = l2.Next
		} else if l2==nil {
			now.Val = l1.Val
			l1 = l1.Next
		}else if l1.Val<l2.Val {
			now.Val = l1.Val
			l1 = l1.Next
		} else {
			now.Val = l2.Val
			l2 = l2.Next
		}
		if l1!=nil||l2!=nil {
			now.Next = new(ListNode)
			now = now.Next
		}
	}	
	return head
}
