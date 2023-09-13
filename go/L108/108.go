package L108

import . "github.com/linyuan/leetcode/TreeNode"

func sortedArrayToBST(nums []int) *TreeNode {
	// 因为左右要平衡那么就左右各尽量一般就好
	return dfs(nums)
}

func dfs(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	mid := (len(nums) - 1) / 2
	node := &TreeNode{
		Val: nums[mid],
	}
	node.Left = dfs(nums[:mid])
	node.Right = dfs(nums[mid+1:])
	return node
}
