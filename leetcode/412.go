package leetcode

import "strconv"

func fizzBuzz(n int) []string {
	s3 := "Fizz"
	s5 := "Buzz"
	s35 := "FizzBuzz"
	ans := make([]string, 0, n)
	for i := 1; i <= n; i++ {
		if i%3 == 0 && i%5 == 0 {
			ans = append(ans, s35)
			// fmt.Println(s35)
		} else if i%3 == 0 {
			ans = append(ans, s3)
			// fmt.Println(s3)
		} else if i%5 == 0 {
			ans = append(ans, s5)
			// fmt.Println(s5)
		} else {
			ans = append(ans, strconv.Itoa(i))
			// fmt.Println(i)
		}
	}
	return ans
}