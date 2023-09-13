package L32

// 1.动态规划
// 2.栈
// 3.模拟
func longestValidParentheses(s string) int {
	ans := 0
	l, r := 0, 0
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			l++
		} else {
			r++
		}
		if l == r {
			ans = max(ans, l+r)
		}
		if r > l {
			l, r = 0, 0
		}
	}
	l, r = 0, 0
	for i := len(s) - 1; i > 0; i-- {
		if s[i] == '(' {
			l++
		} else {
			r++
		}
		if l == r {
			ans = max(ans, l+r)
		}
		if l > r {
			l, r = 0, 0
		}
	}
	return ans
}

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}
