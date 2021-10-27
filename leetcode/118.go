package leetcode

func generate(numRows int) [][]int {
	var ans [][]int
	ans = make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		ans[i] = make([]int, i+1)
	}
	ans[0][0] = 1
	for i := 1; i < numRows; i++ {
		for j := 0; j < i+1; j++ {
			t := 0
			if j < i {
				t = ans[i-1][j]
			}
			if j > 0 {
				t += ans[i-1][j-1]
			}
			ans[i][j] = t
		}
	}
	return ans
}