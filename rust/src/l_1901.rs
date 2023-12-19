use crate::Solution;

impl Solution {
    pub fn find_peak_grid(mat: Vec<Vec<i32>>) -> Vec<i32> {
        // 问题转化为 行/列 最大值 构成的一维数组中找到峰值
        // 而且求出行/列最大值是懒惰的 随着二分进行的 所以时间复杂度是 3nlogm
        let get_max = |k: i32| {
            if k == -1 || k == mat.len() as i32 {
                return (-1, 0);
            }
            let arr = mat.get(k as usize).unwrap();
            let mut maxx_index = 0;
            for i in 0..arr.len() {
                if arr[i] > arr[maxx_index] {
                    maxx_index = i;
                }
            }
            return (arr[maxx_index], maxx_index);
        };
        let mut l = 0;
        let mut r = mat.len() - 1;
        while l < r {
            let mid = (l + r) >> 1;
            let (a, _) = get_max(mid as i32 - 1);
            let (b, index) = get_max(mid as i32);
            let (c, _) = get_max(mid as i32 + 1);
            if a < b && b > c {
                return vec![mid as i32, index as i32];
            }
            if b < c {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        vec![l as i32, get_max(l as i32).1 as i32]
    }
}
