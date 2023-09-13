package L75

func sortColors(nums []int) {
	// 统计颜色个数就好了吧
	// 或者维护双指针进行交换排序--个人感觉没必要--
	num := make([]int, 3)
	for i := 0; i < len(nums); i++ {
		num[nums[i]]++
	}
	k := 0
	for i := 0; i < num[0]; i++ {
		nums[k] = 0
		k++
	}
	for i := 0; i < num[1]; i++ {
		nums[k] = 1
		k++
	}
	for i := 0; i < num[2]; i++ {
		nums[k] = 2
		k++
	}
	return
}
