package leetcode

import "fmt"

/*
	寻找两个有序数组合并后的中位数

	暴力：直接合并 n
	二分: logn

	还是挺复杂的二分
	不是一般的恶心
 */
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	//保证nums1 <= nums2 这样nums1的每一个位置都可以进行枚举
	if len(nums1) > len(nums2) {
		nums1,nums2 = nums2,nums1
	}
	n,m := len(nums1),len(nums2)
	num := (n + m) >> 1
	l,r := 0,n
	for l < r {
		mid := (l + r + 1)>> 1
		bot := num - mid
		if nums1[mid-1]<=nums2[bot] {
			l = mid
		} else {
			r = mid - 1
		}
	}
	bot := num - l - 1
	fmt.Println(l-1,bot)
	if (n+m) % 2 == 0 {
		ll := max(val(nums1,l-1),val(nums2,bot))
		rr := min(val(nums1,l),val(nums2,bot+1))
		return float64(ll+rr) / 2
	} else {
		return float64(min(val(nums1,l),val(nums2,bot+1)))
	}
	return -1
}

func val(num []int,index int) int {
	if index == len(num) {
		return 0x3f3f3f3f
	} else if index==-1 {
		return -0x3f3f3f3f
	} else {
		return num[index]
	}
}

func max(a,b int) int {
	if a<b {
		return b
	}
	return a
}

func min(a,b int) int {
	if a>b {
		return b
	}
	return a
}
