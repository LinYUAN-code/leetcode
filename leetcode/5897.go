package leetcode

import "sort"

// 折半搜说---之前ACwing上的一道搜索题，，，我真菜
func minimumDifference(nums []int) int {
	n := len(nums)/2
	pre := make([][]int,n+1)
	//pre[m] 存储由m个1的情况下的所有值
	for i:=0;i<(1<<n);i++ {
		tmp := 0
		cnt := 0
		for j:=0;j<n;j++ {
			if (i>>j)&1 == 1 {
				tmp +=  nums[j]
				cnt++
			} else {
				tmp -= nums[j]
			}
		}
		pre[cnt] = append(pre[cnt],tmp)
	}

	// 排序--方便下面的二分
	for i:=0;i<=n;i++ {
		sort.Ints(pre[i])
	}
	ans := 0x3f3f3f3f
	for i:=0;i<(1<<n);i++ {
		tmp := 0
		cnt := 0
		for j:=0;j<n;j++ {
			if (i>>j)&1 == 0 {
				tmp += nums[n+j]
				cnt++
			} else {
				tmp -= nums[n+j]
			}
		}
		k := sort.SearchInts(pre[cnt],tmp)
		if k<len(pre[cnt]) {
			ans = min(ans,pre[cnt][k]-tmp)
		}
		if k > 0 {
			ans = min(ans,tmp-pre[cnt][k-1])
		}
	}
	return ans
}

func min(a,b int)int {
	if a<b {
		return a
	}
	return b
}

