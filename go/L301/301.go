package L301

func removeInvalidParentheses(s string) []string {
	//1 -- 25
	// ( +1 ) -1  其他 +0
	// 找到最后是0的字符串且中间过程必须全程大于0
	minn = 0x3f3f3f3f
	ans = make([]string, 0)
	mp = make(map[string]int)
	find(0, s, 0, 0, make([]bool, 26))
	return ans
}

var mp map[string]int
var ans []string
var minn int

func find(u int, s string, tem int, del int, o []bool) {
	if del > minn {
		return
	}
	if u == len(s) {
		if tem == 0 {
			if del == minn {
				ss := gets(s, o)
				if mp[ss] == 0 {
					ans = append(ans, ss)
					mp[ss] = 1
				}
			} else {
				minn = del
				ans = []string{gets(s, o)}
				mp = make(map[string]int)
				mp[ans[0]] = 1
			}
		}
		return
	}
	if s[u] == '(' {
		find(u+1, s, tem+1, del, o)
		o[u] = true
		find(u+1, s, tem, del+1, o)
		o[u] = false
		return
	}
	if s[u] == ')' {
		if tem-1 >= 0 {
			find(u+1, s, tem-1, del, o)
		}
		o[u] = true
		find(u+1, s, tem, del+1, o)
		o[u] = false
		return
	}
	find(u+1, s, tem, del, o)
}

func gets(s string, o []bool) string {
	ans := ""
	for i := 0; i < len(s); i++ {
		if !o[i] {
			ans += string(s[i])
		}
	}
	return ans
}
