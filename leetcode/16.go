package leetcode

import (
	"sort"
)

// 同样双指针和15一样---更简单了


func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	ans := 0x3f3f3f3f
	tt := -1
	for i:=0;i<len(nums); {
		l,r := i+1,len(nums)-1
		for l<r {
			if abs(nums[i] + nums[l] + nums[r] - target) < ans {
				tt = nums[i] + nums[l] + nums[r]
				ans = abs(nums[i] + nums[l] + nums[r] - target)
			}
			if nums[i] + nums[l] + nums[r] < target {
				l++
			} else if nums[i] + nums[l] + nums[r] > target{
				r--
			} else {
				return target
			}
		}

		for i+1<len(nums)&&nums[i]==nums[i+1] {
			i++
		}
		i++
	}
	return tt
}

func abs(a int) int {
	if a < 0 {
		return -a
	} else {
		return a
	}
}
