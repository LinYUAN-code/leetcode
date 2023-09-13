package L38

import "strconv"

func countAndSay(n int) string {
	// 可以通过递归寻找
	// 暴力从 n ---> n+1 需要的时间复杂度是O(长度) -》时间复杂度n^2
	ans := "1"
	for i := 2; i <= n; i++ {
		s := ""
		// 寻找一个前缀x
		pre := len(ans) - 1
		for pre >= 0 {
			end := pre
			for end-1 >= 0 && ans[end] == ans[end-1] {
				end--
			}
			s = strconv.Itoa(pre-end+1) + string(ans[pre]) + s
			pre = end - 1
		}
		ans = s
	}
	return ans
}
