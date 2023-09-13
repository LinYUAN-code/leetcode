package L476

func findComplement(num int) int {
	ans := 0
	for i := 0; num > 0; i++ {
		if (num & 1) == 0 {
			ans |= (1 << i)
		}
		num /= 2
	}
	return ans
}
