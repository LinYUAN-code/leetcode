package L14

func longestCommonPrefix(strs []string) string {
	// O(n*n)
	if len(strs[0]) == 0 {
		return ""
	}
	if len(strs) == 1 {
		return strs[0]
	}
	i := 0
	for ; i < len(strs[0]); i++ {
		ch := strs[0][i]
		for j := 1; j < len(strs); j++ {
			if len(strs[j]) == i || strs[j][i] != ch {
				return strs[0][:i]
			}
		}
	}
	return strs[0]
}
