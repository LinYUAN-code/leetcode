package L10

/*

给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

*/

//a是待匹配串 --- p是模式串
/*
	f[i][j] 表示a[i] 和 p[j]是否匹配 --- return f[n][m]
*/
func isMatch(s string, p string) bool {
	n, m := len(s), len(p)
	var f [21][31]bool

	f[0][0] = true
	for i := 2; i <= m; i += 2 {
		if p[i-1] == '*' {
			f[0][i] = f[0][i-2]
		}
	}

	for i := 1; i <= n; i++ {
		for j := 1; j <= m; j++ {
			if p[j-1] == '*' {
				if s[i-1] == p[j-2] || p[j-2] == '.' {
					f[i][j] = f[i-1][j] || f[i][j-2]
				} else {
					f[i][j] = f[i][j-2]
				}
			} else {
				if s[i-1] == p[j-1] || p[j-1] == '.' {
					f[i][j] = f[i-1][j-1]
				} else {
					f[i][j] = false
				}
			}
		}
	}

	return f[n][m]
}
