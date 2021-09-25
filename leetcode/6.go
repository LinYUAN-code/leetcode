package leetcode

import (
	"sort"
	"strconv"
)

func convert(s string, numRows int) string {
	//周期性---3*k - 2
	/*
	   第一类 ：1--k
	   第二类： k+1 -- 2*k-2
	*/
	if numRows == 1 {
		return s
	}
	rows := make([]string,numRows+1)
	var t = 0
	for i:=0;i<len(s);i++ {
		t++
		if t<=numRows {
			rows[t] += string(s[i])
			if numRows==2&&t==numRows {
				t = 0
			}
		} else if t<=2*numRows-2 {
			rows[numRows - (t-numRows)] += string(s[i])
			if t==2*numRows-2 {
				t = 0
			}
		}
	}
	ans := ""
	for i:=1;i<=numRows;i++ {
		ans += rows[i]
	}
	strconv.Itoa()
	return ans
}
