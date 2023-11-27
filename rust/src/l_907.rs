use crate::Solution;

impl Solution {
    pub fn sum_subarray_mins(arr: Vec<i32>) -> i32 {
        let mod_num: i32 = 1_000_000_007;
        let n = arr.len();
        let mut stk: Vec<i32> = vec![];
        let mut f = vec![0; n];
        stk.push(0);
        f[0] = arr[0];
        for i in 1..n {
            while stk.len() > 0 && arr[*stk.last().unwrap() as usize] >= arr[i] {
                stk.pop();
            }
            if stk.len() == 0 {
                f[i] = ((i as i32 + 1) * arr[i]) % mod_num;
            } else {
                let k = stk.last().unwrap();
                f[i] = (f[*k as usize] + arr[i] * (i as i32 - *k)) % mod_num;
            }
            stk.push(i as i32);
        }
        let mut ans = 0;
        for i in 0..n {
            ans = (ans + f[i]) % mod_num;
        }
        ans
    }
}
