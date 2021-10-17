package leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func kthSmallest(root *TreeNode, k int) int {
    // O(n)
    // 先进行中序遍历
    num := make([]int,0,10001)
    num = dfs(root,num)
    return num[k-1]
}

func dfs(root *TreeNode,num []int) []int {
    if root == nil {
        return num
    }
    num = dfs(root.Left,num)
    num = append(num,root.Val)
    num = dfs(root.Right,num)
    return num
}