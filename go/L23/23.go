package L23

import "container/heap"
import . "github.com/linyuan/leetcode/ListNode"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 **/
/*
   1.分治
   2.堆
*/
func mergeKLists(lists []*ListNode) *ListNode {
	h := new(minHeap)
	k := len(lists)
	for i := 0; i < k; i++ {
		if lists[i] != nil {
			heap.Push(h, lists[i])
		}
	}
	head := new(ListNode)
	now := head
	for h.Len() != 0 {
		node := heap.Pop(h).(*ListNode)
		if node.Next != nil {
			heap.Push(h, node.Next)
		}
		now.Next = node
		now = now.Next
	}
	return head.Next
}

// Go默认是小根堆
type minHeap []*ListNode

func (h minHeap) Len() int {
	return len(h)
}
func (h minHeap) Less(i, j int) bool {
	return h[i].Val < h[j].Val
}
func (h minHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}
func (h *minHeap) Push(x interface{}) {
	*h = append(*h, x.(*ListNode))
}
func (h *minHeap) Pop() interface{} {
	x := (*h)[len(*h)-1]
	*h = (*h)[0 : len(*h)-1]
	return x
}
