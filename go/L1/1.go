package L1

/*
	1.暴力 n^2
	2.哈希表 n
	97%
*/

func twoSum(nums []int, target int) []int {
	var mp = make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if val, ok := mp[target-nums[i]]; ok {
			return []int{val, i}
		}
		mp[nums[i]] = i
	}
	return nil
}
