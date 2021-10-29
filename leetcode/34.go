package leetcode

func searchRange(nums []int, target int) []int {
	if len(nums) == 0 {
		return []int{-1, -1}
	}
	l, r := 0, len(nums)-1
	for l < r {
		mid := (l + r) / 2
		if nums[mid] >= target {
			r = mid
		} else {
			l = mid + 1
		}
	}
	st := l
	l, r = 0, len(nums)-1
	for l < r {
		mid := (l + r + 1) / 2
		if nums[mid] <= target {
			l = mid
		} else {
			r = mid - 1
		}
	}
	ed := l

	if nums[st] != target {
		st = -1
	}
	if nums[ed] != target {
		ed = -1
	}
	return []int{st, ed}
}