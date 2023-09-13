package L223

func computeArea(ax1 int, ay1 int, ax2 int, ay2 int, bx1 int, by1 int, bx2 int, by2 int) int {
	ans := (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1)
	ans -= get_g(ax1, ax2, bx1, bx2) * get_g(ay1, ay2, by1, by2)
	return ans
}

func get_g(x1, x2, x3, x4 int) int {
	if x4 > x2 {
		return get_gg(x1, x2, x3, x4)
	} else {
		return get_gg(x3, x4, x1, x2)
	}
}

func get_gg(x1, x2, x3, x4 int) int {
	if x3 < x1 {
		return x2 - x1
	} else if x3 < x2 {
		return x2 - x3
	}
	return 0
}
