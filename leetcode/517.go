package leetcode

func findMinMoves(machines []int) int {
	n := len(machines)
	sum := 0
	for _,val := range machines {
		sum += val
	}
	if sum%n != 0 {
		return -1
	}
	k := sum/n
	for i:=0;i<len(machines);i++ {
		machines[i] -= k
	}

	// 分析一下过程就行了
	maxx := 0
	tem := 0
	for i:=0;i<len(machines);i++ {
		tem += machines[i]
		maxx = max(maxx,max(abs(tem),machines[i]))
	}
	return maxx
}

func max(a,b int) int {
	if a < b {
		return b
	}
	return a
}

func abs(a int) int {
	if a<0 {
		return -a
	}
	return a
}
