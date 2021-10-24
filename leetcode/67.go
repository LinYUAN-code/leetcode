package leetcode

func addBinary(a string, b string) string {
	if len(a) < len(b) {
		return addBinary(b, a)
	}
	ba := []byte(a)
	bb := []byte(b)
	ans := make([]byte, 0, len(a))
	reverse(ba)
	reverse(bb)
	var c byte = 0
	for i := 0; i < len(ba); i++ {
		t := ba[i] - '0' + c
		if i < len(bb) {
			t += bb[i] - '0'
		}
		ans = append(ans, t%2+'0')
		c = t / 2
	}
	if c > 0 {
		ans = append(ans, '1')
	}
	reverse(ans)
	return string(ans)
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func reverse(a []byte) {
	for i, j := 0, len(a)-1; i < j; i, j = i+1, j-1 {
		a[i], a[j] = a[j], a[i]
	}
}