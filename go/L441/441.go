package L441

func arrangeCoins(n int) int {
	// 二分查找
	l, r := int64(0), int64(n)
	for l < r {
		var mid = (l + r + 1) / 2
		if mid*(mid+1)/2 > int64(n) {
			r = mid - 1
		} else {
			l = mid
		}
	}
	return int(l)
}
