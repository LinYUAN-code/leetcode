package leetcode

func minMoves(nums []int) int {
	// 相当于让某个值减1
	ans := 0
	minn := 0x3f3f3f3f
	for i := 0; i < len(nums); i++ {
		minn = min(minn, nums[i])
	}
	for i := 0; i < len(nums); i++ {
		ans += (nums[i] - minn)
	}
	return ans
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}