use crate::Solution;

impl Solution {
    pub fn maximum_rows(matrix: Vec<Vec<i32>>, num_select: i32) -> i32 {
        let m = matrix.get(0).unwrap().len();
        let mut ans = 0;
        let count_bits = |mut num| {
            let mut ans = 0;
            while num > 0 {
                ans += 1;
                num -= num & (-1 * num);
            }
            return ans;
        };
        let count_num = |solution: i32| {
            let mut ans = 0;
            for arr in matrix.iter() {
                let mut suc = true;
                for j in 0..m {
                    if (solution >> j) & 1 == 1 || *arr.get(j).unwrap() == 0 {
                        continue;
                    }
                    suc = false;
                }
                if suc {
                    ans += 1;
                }
            }
            ans
        };
        for solution in 0..(1 << m) {
            if count_bits(solution) != num_select {
                continue;
            }
            ans = ans.max(count_num(solution));
        }
        ans
    }
}
