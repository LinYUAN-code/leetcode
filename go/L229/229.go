package L229

func majorityElement(nums []int) []int {
	// 只可能出现两个这样的数字
	// 但是不保证---所以最后需要验证一下
	// 只需要验证3个不相同即可--摩尔投票的扩展问题
	ans := make([]int, 0)
	n := len(nums)
	x, y, nx, ny := 0, 0, 0, 0
	for i := 0; i < n; i++ {
		if nums[i] == x || nums[i] == y {
			if nums[i] == x {
				nx++
			} else if nums[i] == y {
				ny++
			}
			continue
		}
		if nx == 0 || ny == 0 {
			if nx == 0 {
				x = nums[i]
				nx = 1
			} else if ny == 0 {
				y = nums[i]
				ny = 1
			}
			continue
		}
		nx, ny = nx-1, ny-1
	}
	// 不一定保证有解，所以需要验证
	nx, ny = 0, 0
	for i := 0; i < n; i++ {

		if nums[i] == x {
			nx++
		}
		if nums[i] == y {
			ny++
		}
	}
	if nx > n/3 {
		ans = append(ans, x)
	}
	if ny > n/3 && x != y {
		ans = append(ans, y)
	}
	return ans
}
