package leetcode

import "sort"
/*
	双指针 + 注意过程中除重操作
*/
func threeSum(nums []int) [][]int {
	// 双指针--时间复杂度n^2
	sort.Ints(nums)
	var ans [][]int
	for i:=0;i<len(nums); {

		l,r := i+1,len(nums)-1
		for l<r {
			if nums[i] + nums[l] + nums[r] == 0 {
				ans = append(ans,[]int{nums[i],nums[l],nums[r]})
				for l+1<len(nums)&&nums[l]==nums[l+1] {
					l++
				}
				l++
				continue
			}
			if nums[i] + nums[l] + nums[r] < 0 {
				l++
			} else {
				r--
			}
		}
		for i+1<len(nums)&&nums[i]==nums[i+1] {
			i++
		}
		i++
	}
	return ans
}
