package leetcode

import "sort"

func fourSum(nums []int, target int) [][]int {
	ans := make([][]int,0)
	if len(nums)<4 {
		return ans
	}
	sort.Ints(nums)
	n := len(nums)
	for i:=0;i<n;i++ {
		for j:=i+1;j<n;j++ {
			l,r := j+1,n-1
			for l<r {
				if nums[i]+nums[j]+nums[l]+nums[r] < target {
					l++
				} else if nums[i]+nums[j]+nums[l]+nums[r] > target {
					r--
				} else {
					ans = append(ans,[]int{nums[i],nums[j],nums[l],nums[r]})
					for l+1<r&&nums[l]==nums[l+1] {
						l++
					}
					l++
				}
			}
			for j+1<n&&nums[j+1]==nums[j] {
				j++
			}
		}
		for i+1<n&&nums[i+1]==nums[i] {
			i++
		}
	}
	return ans
}
