package leetcode

func groupAnagrams(strs []string) [][]string {
	// 字符串长度很长--直接作为key的话--会影响效率-不如转化为统计字母个数
	mp := make(map[[26]int][]string, len(strs))
	for i := 0; i < len(strs); i++ {
		sp := [26]int{}
		for j := 0; j < len(strs[i]); j++ {
			sp[strs[i][j]-'a']++
		}
		if mp[sp] == nil {
			mp[sp] = make([]string, 0, 4)
		}
		mp[sp] = append(mp[sp], strs[i])
	}
	ans := make([][]string, 0, len(mp))
	for _, val := range mp {
		ans = append(ans, val)
	}
	return ans
}