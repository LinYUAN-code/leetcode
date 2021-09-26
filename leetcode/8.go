package leetcode

func myAtoi(s string) int {
	flag := 0 //-1 0 1 无 -- 正 --- 负
	ans := 0
	for i:=0;i<len(s);i++ {
		// 还没有进行符号判断
		if flag==0 {
			if s[i]=='+' {
				flag = 1
				continue
			}
			if s[i]=='-' {
				flag = - 1
				continue
			}
			if isNum(s[i]) {
				flag = 1
				ans = ans*10 + int(s[i]-'0')
				continue
			}
			if s[i]==' ' {
				continue
			}
			break
		} else {
			if !isNum(s[i]) {
				break
			}
			pans := ans*10 + int(s[i]-'0')
			if flag==1&&pans>((1<<31)-1) {
				ans = ((1<<31)-1)
				break
			}
			if flag==-1&&pans>(1<<31) {
				ans = ((1<<31))
				break
			}
			ans = pans
		}
	}
	return ans*flag
}
func isNum(a byte) bool {
	if a>='0' && a <= '9' {
		return true
	}
	return false
}
