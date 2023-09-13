package L169

func majorityElement(nums []int) int {
	// 数组总是存在多数元素
	n := 0
	num := 0x3f3f3f3f
	for i := 0; i < len(nums); i++ {
		if n == 0 {
			num = nums[i]
			n = 1
			continue
		}
		if nums[i] == num {
			n++
		} else {
			n--
		}
	}
	return num
}
