package L1590

// 移除最短子数组
// 问题转化为：找到sum为某个值的区间
// 接着转化为--扫描哈希问题
func minSubarray(nums []int, p int) int {
	nums[0] %= p
	for i := 1; i < len(nums); i++ {
		nums[i] = (nums[i-1] + nums[i]%p) % p
	}
	// 找到和为nums
	target := nums[len(nums)-1]
	if target == 0 {
		return 0
	}
	mp := make(map[int]int)
	ans := 0x3f3f3f3f
	mp[0] = 1
	for i := 0; i < len(nums); i++ {
		// a - b % mod = target
		// a - tar  = b
		if mp[((nums[i]-target)%p+p)%p] != 0 {
			if i == len(nums)-1 && mp[((nums[i]-target)%p+p)%p] == 1 {

			} else {
				ans = min(ans, i-mp[((nums[i]-target)%p+p)%p]+2)
			}
		}
		mp[nums[i]] = i + 2
	}
	if ans == 0x3f3f3f3f {
		return -1
	}
	return ans
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
