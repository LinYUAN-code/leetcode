package leetcode

func calculateMinimumHP(dungeon [][]int) int {
	n := len(dungeon)
	m := len(dungeon[0])
	f := make([][]int, n+1)
	for i := 1; i <= n; i++ {
		f[i] = make([]int, m+1)
	}
	// f[i][j] 到这一格子时候 所需要的最小生命值
	if dungeon[n-1][m-1] <= 0 {
		f[n][m] = -dungeon[n-1][m-1] + 1
	} else {
		f[n][m] = 1
	}
	for i := m - 1; i >= 1; i-- {
		f[n][i] = f[n][i+1] - dungeon[n-1][i-1]
		f[n][i] = max(f[n][i], 1)
	}
	for i := n - 1; i >= 1; i-- {
		f[i][m] = f[i+1][m] - dungeon[i-1][m-1]
		f[i][m] = max(f[i][m], 1)
	}

	for i := n - 1; i >= 1; i-- {
		for j := m - 1; j >= 1; j-- {
			f[i][j] = min(f[i+1][j], f[i][j+1]) - dungeon[i-1][j-1]
			f[i][j] = max(f[i][j], 1)
		}
	}
	return max(f[1][1], 1)
}

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
