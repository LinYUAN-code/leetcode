package L638

var (
	n  int
	mp []map[string]int
)

func shoppingOffers(price []int, special [][]int, needs []int) int {
	// 问题转化位完全背包
	sum := 0
	n = len(needs)
	for i := 0; i < n; i++ {
		sum += needs[i] * price[i]
	}

	for i := 0; i < len(special); i++ {
		tem := 0
		for j := 0; j < n; j++ {
			tem += special[i][j] * price[j]
		}
		special[i][n] = tem - special[i][n]
	}

	s := ""
	// 最后一位表示选到哪一个species
	for i := 0; i < n; i++ {
		s += string(byte(needs[i]) + '0')
	}
	mp = make([]map[string]int, len(special))
	for i := 0; i < len(special); i++ {
		mp[i] = make(map[string]int)
	}
	return sum - dfs(0, s, price, special, needs)
}

func dfs(u int, state string, price []int, special [][]int, needs []int) int {
	if u == len(special) {
		return 0
	}
	//记忆化
	if val, ok := mp[u][state]; ok {
		return val
	}
	b := []byte(state)
	mp[u][state] = dfs(u+1, state, price, special, needs)
	if u > 0 {
		mp[u][state] = max(mp[u][state], mp[u-1][state])
	}
	k := 0
	for {
		k++
		flag := true
		for i := 0; i < n; i++ {
			b[i] -= byte(special[u][i])
			if b[i] < '0' {
				flag = false
				break
			}
		}
		if !flag {
			break
		}
		mp[u][state] = max(mp[u][state], dfs(u+1, string(b), price, special, needs)+k*special[u][n])
	}
	return mp[u][state]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
