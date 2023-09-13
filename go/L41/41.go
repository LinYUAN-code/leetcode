package L41

/*
	寻找缺失的最小的正数

*/

// //方法一：
// func firstMissingPositive(nums []int) int {
//     // 1--n 只需要保存这一个范围之内的数字就好了，因为如果存满了那么说明答案是n+1
//     mp := make(map[int]bool)
//     n := len(nums)
//     for i:=0;i<n;i++ {
//         if nums[i]<=n {
//             mp[nums[i]] = true
//         }
//     }
//     for i:=1;i<=n;i++ {
//         if !mp[i] {
//             return i
//         }
//     }
//     return n+1
// }

// //方法二：置换回正确的位置   原地哈希
func firstMissingPositive(nums []int) int {
	for i := 0; i < len(nums); i++ {
		for nums[i] > 0 && nums[i] <= len(nums) && nums[nums[i]-1] != nums[i] {
			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
		}
	}
	for i := 0; i < len(nums); i++ {
		if nums[i] != i+1 {
			return i + 1
		}
	}
	return len(nums) + 1
}
