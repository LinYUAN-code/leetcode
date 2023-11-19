use crate::Solution;

impl Solution {
    pub fn max_sum_of_three_subarrays(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let n = nums.len();
        let mut ans = vec![-1; 3];
        let mut sum = vec![0; n];
        for i in 0..n {
            sum[i] = if i == 0 {
                nums[i]
            } else {
                nums[i] + sum[i - 1]
            }
        }
        let mut f: Vec<Vec<i32>> = vec![vec![i32::MIN; n]; 3];
        let mut maxx: Vec<Vec<i32>> = vec![vec![i32::MIN; n]; 3];

        for i in 0..n {
            if i + 1 >= k as usize {
                f[0][i] = if i as i32 - k >= 0 {
                    sum[i] - sum[i - k as usize]
                } else {
                    sum[i]
                }
            }
            maxx[0][i] = if i > 0 {
                std::cmp::max(f[0][i], maxx[0][i - 1])
            } else {
                f[0][i]
            }
        }
        for num in 1..3 {
            for i in 0..n {
                if i as i32 - k < 0 {
                    continue;
                }
                f[num][i] = maxx[num - 1][i - k as usize] + sum[i] - sum[i - k as usize];
                maxx[num][i] = std::cmp::max(f[num][i], maxx[num][i - 1]);
            }
        }

        // 找到答案
        let find = |arr: &Vec<i32>, target: i32| -> i32 {
            for i in 0..arr.len() {
                if arr[i] == target {
                    return i as i32;
                }
            }
            return -1;
        };
        let mut max_value = 0;
        for i in 0..n {
            max_value = std::cmp::max(max_value, maxx[2][i]);
        }
        println!("{:?}", maxx);
        println!("{:?}", f);
        for i in (0..3).rev() {
            ans[i] = find(&f[i], max_value);
            max_value = max_value - sum[ans[i] as usize]
                + if ans[i] - k < 0 {
                    0
                } else {
                    sum[(ans[i] - k) as usize]
                };
        }
        ans.iter().map(|x| x - k + 1).collect()
    }
}
