package leetcode

func plusOne(digits []int) []int {
	// 数最长后缀
	k := len(digits) - 1
	for ; k >= 0; k-- {
		if digits[k] != 9 {
			break
		}
	}
	k++
	for i := k; i < len(digits); i++ {
		digits[i] = 0
	}
	if k != 0 {
		digits[k-1]++
	} else {
		digits[0] = 1
		digits = append(digits, 0)
	}
	return digits
}