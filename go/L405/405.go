package L405

func toHex(num int) string {
	// 每四位一组
	ans := ""
	k := 32
	for i := 0; i < 8; i++ {
		k -= 4
		p := (num >> (k)) & 0xf
		if len(ans) > 0 || p > 0 {
			if p < 10 {
				ans += string(p + '0')
			} else {
				ans += string(p - 10 + 'a')
			}
		}
	}
	if len(ans) == 0 {
		return "0"
	}
	return ans
}
