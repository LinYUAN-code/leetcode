package L5

/*
最长回文子串
1.动态规划--f[i][j]---表示f[i][j]是不是回文子串
2.从中心扩展
3.Manacher算法
*/
func longestPalindrome(s string) string {
	st, e := 0, -1
	for i := 0; i < len(s); i++ {
		len := expand(s, i, i)
		len = max(len, expand(s, i, i+1))
		if e-st+1 < len {
			e = i + len/2
			st = i - (len-1)/2
		}
	}
	return s[st : e+1]
}
func expand(s string, l, r int) int {
	for l >= 0 && r < len(s) && s[l] == s[r] {
		l--
		r++
	}
	return r - l - 1
}

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}
