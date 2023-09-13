package L69

func mySqrt(x int) int {
	l, r := 0, x
	mid := 0
	for l < r {
		mid = (l + r + 1) / 2
		if mid*mid <= x {
			l = mid
		} else {
			r = mid - 1
		}
	}
	return l
}
