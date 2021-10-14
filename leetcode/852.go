package leetcode

func peakIndexInMountainArray(arr []int) int {
	l, r := 1, len(arr)-2
	for l < r {
		mid := (l + r) / 2
		if arr[mid] < arr[mid+1] {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return l
}