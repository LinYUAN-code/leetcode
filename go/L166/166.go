package L166

import "strconv"

func fractionToDecimal(numerator int, denominator int) string {
	if numerator%denominator == 0 {
		return strconv.Itoa(numerator / denominator)
	}
	ans := []byte{}
	// 符号处理
	if numerator > 0 != (denominator > 0) {
		// 符号不相同--为负
		numerator = abs(numerator)
		denominator = abs(denominator)
		ans = append(ans, '-')
	}
	numerator = abs(numerator)
	denominator = abs(denominator)
	//整数部分
	above := numerator / denominator
	numerator %= denominator
	top := strconv.Itoa(above)
	ans = append(ans, top...)
	ans = append(ans, '.')

	// 小数部分
	// 记录被除数的出现位置--来处理循环节问题
	mp := make(map[int]int)
	for numerator != 0 && mp[numerator] == 0 {
		mp[numerator] = len(ans)
		numerator *= 10
		ans = append(ans, '0'+byte(numerator/denominator))
		numerator = numerator % denominator
	}
	// 出现循环节
	if mp[numerator] != 0 {
		index := mp[numerator]
		ans = append(ans[:index], append([]byte{'('}, ans[index:]...)...)
		ans = append(ans, ')')
	}
	return string(ans)
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}
