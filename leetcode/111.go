package leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 var flag = true
func minDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    minn := 0x3f3f3f3f
    l := minDepth(root.Left)
    r := minDepth(root.Right)
    if l==0 {
        minn = r
    } else if r==0 {
        minn = l
    } else if  l < r {
        minn = l
    } else {
        minn = r
    }
    return minn+1
}

func min(a,b int) int {
    if a > b {
        return b
    }
    return a
}