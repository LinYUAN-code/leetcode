package leetcode

func combinationSum(candidates []int, target int) [][]int {
	// 时间复杂度n2^n --- 暴力dfs
	ans := make([][]int, 0)
	tmp := make([]int, 0)
	n := len(candidates)
	var dfs func(int, int)
	dfs = func(u, target int) {
		if u == n && target != 0 {
			return
		}
		if target == 0 {
			ans = append(ans, append([]int{}, tmp...))
			return
		}
		dfs(u+1, target)
		if target >= candidates[u] {
			tmp = append(tmp, candidates[u])
			dfs(u, target-candidates[u])
			tmp = tmp[:len(tmp)-1]
		}
	}
	dfs(0, target)
	return ans
}