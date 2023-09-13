package L202

func isHappy(n int) bool {
	if n == 1 {
		return true
	}
	get := func(n int) int {
		ans := 0
		for n > 0 {
			c := n % 10
			ans += c * c
			n /= 10
		}
		return ans
	}
	mp := make(map[int]bool)
	mp[n] = true
	for {
		n = get(n)
		if mp[n] {
			return false
		}
		if n == 1 {
			return true
		}
		mp[n] = true
	}
	return false
}
