package L40

import "sort"

func combinationSum2(candidates []int, target int) [][]int {
	// 枚举选择几个
	sort.Ints(candidates)
	num := make([][]int, len(candidates))
	pre := 0
	n := -1
	for i := 0; i < len(candidates); i++ {
		if candidates[i] == pre {
			num[n][1]++
		} else {
			n++
			num[n] = make([]int, 2)
			num[n][0] = candidates[i]
			pre = candidates[i]
			num[n][1]++
		}
	}
	tmp := make([]int, 0)
	ans := make([][]int, 0)
	var dfs func(int, int)
	dfs = func(u, target int) {
		if target == 0 {
			ans = append(ans, append([]int{}, tmp...))
			return
		}
		if u == n+1 || target < 0 {
			return
		}
		dfs(u+1, target)
		for i := 1; i <= num[u][1]; i++ {
			tmp = append(tmp, num[u][0])
			dfs(u+1, target-i*num[u][0])
		}
		tmp = tmp[:len(tmp)-num[u][1]]
	}
	dfs(0, target)
	return ans
}
