package leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isBalanced(root *TreeNode) bool {
    _,flag := dfs(root)
    return flag
}

func dfs(root *TreeNode) (int,bool) {
    if root==nil {
        return 0,true
    }
    l,flag1 := dfs(root.Left)
    r,flag2 := dfs(root.Right)
    if !flag1 || !flag2 {
        return 0,false
    }
    if abs(l-r)>1 {
        return 0,false
    }
    return max(l,r)+1,true
}

func max(a,b int) int {
    if a < b {
        return b
    }
    return a
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}