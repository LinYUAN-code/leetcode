package leetcode

func removeDuplicates(nums []int) int {
	now := 0
	mp := make(map[int]bool)
	for i := 0; i < len(nums); i++ {
		if !mp[nums[i]] {
			mp[nums[i]] = true
			nums[now] = nums[i]
			now++
		}
	}
	return now
}