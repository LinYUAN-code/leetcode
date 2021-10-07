package leetcode


// kmp算法
/*
   Next数组 ： xxxxxx 中的最大匹配的前缀和后缀！
   每次失败了移动Next数组即可
*/
func strStr(haystack string, needle string) int {
	if len(needle)==0 {
		return 0
	}
	needle = " "+needle
	haystack = " "+haystack
	next := getNext(needle)
	for i,j := 1,0;i<len(haystack);i++ {
		for j!=0&&needle[j+1]!=haystack[i] {
			j = next[j]
		}
		if needle[j+1]==haystack[i] {
			j++
		}
		if j==len(needle)-1 {
			return i-len(needle)+1
		}
	}
	return -1
}

// 相当于是正向和反向进行匹配
func getNext(a string) []int {
	ne := make([]int,len(a))
	n := len(a)
	for i,j:=2,0;i<n;i++ {
		for j!=0&&a[j+1]!=a[i] {
			j = ne[j]
		}
		if a[j+1]==a[i] {
			j++
		}
		ne[i] = j
	}
	return ne
}
