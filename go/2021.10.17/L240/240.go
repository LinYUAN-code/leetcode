package L240

func searchMatrix(matrix [][]int, target int) bool {
	//从左下角开始遍历
	//如果大于当前值--向右走--否则向下走---直到出界或者找到目标元素
	n := len(matrix)
	m := len(matrix[0])
	i, j := n-1, 0
	for ; i >= 0; i-- {
		for j < m && target > matrix[i][j] {
			j++
		}
		if j < m && target == matrix[i][j] {
			return true
		}
	}
	return false
}
