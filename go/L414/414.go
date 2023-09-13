package L414

func thirdMax(nums []int) int {
	d1, d2, d3 := -0x3f3f3f3f3f, -0x3f3f3f3f3f, -0x3f3f3f3f3f
	for i := 0; i < len(nums); i++ {
		if nums[i] > d1 {
			d1, d2, d3 = nums[i], d1, d2
		} else if nums[i] == d1 {
			continue
		} else if nums[i] > d2 {
			d2, d3 = nums[i], d2
		} else if nums[i] == d2 {
			continue
		} else if nums[i] > d3 {
			d3 = nums[i]
		}
	}
	if d3 == -0x3f3f3f3f3f {
		return d1
	}
	return d3
}
