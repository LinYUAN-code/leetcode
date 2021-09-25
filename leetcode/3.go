package leetcode

/*
   滑动窗口+哈希
   100%
*/
func lengthOfLongestSubstring(s string) int {
	if len(s)==0  {
		return 0
	}
	ans,l := 1,0
	var mp[256] uint8
	mp[s[0]] = 1
	for i:=1;i<len(s);i++ {
		for mp[s[i]] == 1 {
			mp[s[l]] = 0
			l++
		}
		mp[s[i]] = 1
		ans = max(ans,i-l+1)
	}
	return ans
}

func max(a,b int) int {
	if a<b {
		return b
	}
	return a
}
