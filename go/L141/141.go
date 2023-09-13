package L141

import . "github.com/linyuan/leetcode/ListNode"

func hasCycle(head *ListNode) bool {
	//直接原地修改ListNode---来判断
	if head == nil {
		return false
	}
	for {
		if head.Next == nil {
			return false
		}
		if head.Val == 100005 {
			return true
		}
		head.Val = 100005
		head = head.Next
	}
}

// 快慢指针
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
//  func hasCycle(head *ListNode) bool {
//     if head == nil {
//         return false
//     }
//     slow,fast := head,head
//     for {
//         if slow==nil || fast==nil ||fast.Next==nil {
//             return false
//         }
//         slow = slow.Next
//         fast = fast.Next.Next
//         if slow == fast {
//             return true
//         }
//     }
//     return false
// }
