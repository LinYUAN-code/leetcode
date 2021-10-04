package leetcode

import "unicode"

func licenseKeyFormatting(s string, k int) string {
	num := 0
	for i:=0;i<len(s);i++ {
		if s[i]!='-' {
			num++
		}
	}
	r := num % k
	ans := ""
	for i:=0;i<r;i++ {
		if s[i] == '-' {
			r++
			continue
		}
		ans += string(unicode.ToUpper(rune(s[i])))
	}
	tem := 0
	if r==0 {
		tem = 0
	} else {
		tem = k
	}
	for j:=r;j<len(s);j++ {
		if s[j] == '-' {
			continue
		}
		if tem==k {
			ans += "-"
			tem=0
		}
		tem++
		ans += string(unicode.ToUpper(rune(s[j])))
	}
	return ans
}
