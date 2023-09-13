package L24

import . "github.com/linyuan/leetcode/ListNode"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
//  1.递归
//  2.迭代---可以使用虚拟头节点来简化操作
func swapPairs(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	nn := head.Next
	head.Next = swapPairs(nn.Next)
	nn.Next = head
	return nn
}
