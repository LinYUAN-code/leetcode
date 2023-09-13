package L149

func maxPoints(points [][]int) int {
	//数据范围300---暴力n^3
	ans := 0
	if len(points) == 1 {
		return 1
	}
	p := points
	for i := 0; i < len(p); i++ {
		for j := i + 1; j < len(p); j++ {
			tem := 0
			for k := 0; k < len(p); k++ {
				if judge(p[i], p[j], p[k]) {
					tem++
				}
			}
			ans = max(ans, tem)
		}
	}
	return ans
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func judge(a, b, c []int) bool {
	ax, ay := a[0]-c[0], a[1]-c[1]
	bx, by := b[0]-c[0], b[1]-c[1]
	return (ax*by - ay*bx) == 0
}
