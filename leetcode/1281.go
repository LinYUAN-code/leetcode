package leetcode

func toM(u int) int {
	ans := 1
	for u {
		ans *= u % 10
		u /= 10
	}
	return ans
}