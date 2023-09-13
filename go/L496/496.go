package L496

func nextGreaterElement(nums1 []int, nums2 []int) []int {
	// 没有重复元素
	// 暴力--n^n
	// 维护一个单调栈--
	mp := make(map[int]int)
	for i := 1; i <= len(nums1); i++ {
		mp[nums1[i-1]] = i
		nums1[i-1] = -1
	}
	st := make([]int, len(nums2))
	top := -1
	for i := len(nums2) - 1; i >= 0; i-- {
		for top >= 0 && nums2[i] >= st[top] {
			top--
		}
		if mp[nums2[i]] != 0 && top != -1 {
			nums1[mp[nums2[i]]-1] = st[top]
		}
		top++
		st[top] = nums2[i]
	}
	return nums1
}
