package leetcode

import "bytes"

// 恶心的模拟
// 1234567891
// 我们可以把数字分成四组
// 分别对应 Billion Million Thousand
// 然后写一个函数对三位数进行统一处理

var (
	singles = []string{"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"}
	teens = []string{"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"}
	tens = []string{"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"}
	thousands = []string{"", "Thousand", "Million", "Billion"}
)


func numberToWords(num int) string {
	if num==0 {
		return "Zero"
	}
	ans := &bytes.Buffer{}
	for i,bit:=3,1000000000;i>=0;i,bit=i-1,bit/1000 {
		tnum := num/bit
		if tnum > 0 {
			num -= tnum*bit
			deal(ans,tnum)
			ans.WriteString(thousands[i])
			ans.WriteString(" ")
		}
	}
	return string(bytes.Trim(ans.Bytes()," "))
}

func deal(bf *bytes.Buffer,num int)  {
	if num==0 {
		return
	}else if num < 10 {
		bf.WriteString(singles[num])
		bf.WriteString(" ")
	} else if num < 20 {
		bf.WriteString(teens[num-10])
		bf.WriteString(" ")
	} else if num < 100 {
		bf.WriteString(tens[num/10])
		bf.WriteString(" ")
		deal(bf,num%10)
	} else {
		bf.WriteString(singles[num/100])
		bf.WriteString(" ")
		bf.WriteString("Hundred ")
		deal(bf,num%100)
	}
}
