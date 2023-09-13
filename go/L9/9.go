package L9

/*
1.转化位字符串然后判断
2.在数字的基础上进行判断
*/
func isPalindrome(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}
	tem := 0
	for x > tem {
		tem = tem*10 + x%10
		x /= 10
	}
	return x == tem || x == tem/10
}
