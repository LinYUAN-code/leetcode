package L187

func findRepeatedDnaSequences(s string) []string {
	if len(s) <= 10 {
		return []string{}
	}
	mp := make(map[int64]int, 0)
	var tem int64 = 0
	var mod int64 = 10000000000
	for i := 0; i < len(s); i++ {
		var c int64
		if s[i] == 'A' {
			c = 1
		} else if s[i] == 'C' {
			c = 2
		} else if s[i] == 'G' {
			c = 3
		} else if s[i] == 'T' {
			c = 4
		}
		tem = tem*10 + c
		tem %= mod

		if i >= 9 {
			mp[tem] = mp[tem] + 1
			// fmt.Println(tem)
		}
	}
	ans := make([]string, 0)
	for key, val := range mp {
		if val >= 2 {
			// fmt.Println(key)
			ans = append(ans, toString(key))
		}
	}
	return ans
}

func toString(p int64) string {
	ans := ""
	for i := 0; i < 10; i++ {
		c := p % 10
		p /= 10
		if c == 1 {
			ans += "A"
		}
		if c == 2 {
			ans += "C"
		}
		if c == 3 {
			ans += "G"
		}
		if c == 4 {
			ans += "T"
		}
	}
	return reverse(ans)
}

func reverse(s string) string {
	tmp := []byte(s)
	ans := ""
	for i := len(s) - 1; i >= 0; i-- {
		ans += string(tmp[i])
	}
	return ans
}
