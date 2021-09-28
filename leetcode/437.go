package leetcode


/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
//  O(n^2)---暴力---又每一个节点向下做一次dfs即可
//  O(n) 记录前缀和--然后每一点 ans += mp[cur-target]
func pathSum(root *TreeNode, targetSum int) int {
	if root == nil {
		return 0
	}
	mp[0] = 1
	return dfs(root,targetSum,0)
}
var mp = make(map[int]int)
func dfs(u *TreeNode,target,sum int) int {
	if u==nil {
		return 0
	}
	ans := 0
	sum += u.Val
	if val,ok := mp[sum-target];ok {
		ans += val
	}
	mp[sum]++
	ans += dfs(u.Left,target,sum)
	ans += dfs(u.Right,target,sum)
	mp[sum]--
	return ans
}
