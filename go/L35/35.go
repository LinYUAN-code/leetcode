package L35

func searchInsert(nums []int, target int) int {
	// 找到第一个大于等于它的元素
	l, r := 0, len(nums)-1
	mid := 0
	for l < r {
		mid = (l + r) / 2
		if nums[mid] >= target {
			r = mid
		} else {
			l = mid + 1
		}
	}
	if nums[l] == target {
		return l
	}
	if nums[l] < target {
		return l + 1
	} else {
		return l
	}
}
