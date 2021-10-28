package leetcode

func reorderedPowerOf2(n int) bool {
	//1.搜索回溯9!
	//2.打表
	num = make([]int, 0)
	for n > 0 {
		num = append(num, n%10)
		n /= 10
	}
	st = make([]bool, len(num))
	return dfs(0, num, 0)
}

var num []int
var st []bool

func dfs(u int, num []int, sum int) bool {
	// fmt.Println(u,sum)
	if u == len(num) {
		return (sum & (-sum)) == sum
	}
	for i := 0; i < len(num); i++ {
		if st[i] {
			continue
		}
		if u == 0 && num[i] == 0 {
			continue
		}
		st[i] = true
		if dfs(u+1, num, sum*10+num[i]) {
			return true
		}
		st[i] = false
	}
	return false
}
