package L27

func removeElement(nums []int, val int) int {
	// 原地删除指定大小的元素
	// 可以进行维护index 然后交换
	index := 0
	tlen := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == val {
			continue
		}
		nums[index] = nums[i]
		index++
		tlen++
	}
	return tlen
}
