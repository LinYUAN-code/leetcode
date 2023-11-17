use crate::Solution;

impl Solution {
    pub fn maximum_sum_queries(
        nums1: Vec<i32>,
        nums2: Vec<i32>,
        queries: Vec<Vec<i32>>,
    ) -> Vec<i32> {
        let mut ans = vec![-1; queries.len()];
        let mut sort_arr: Vec<(i32, i32)> = nums1
            .iter()
            .enumerate()
            .map(|(index, val)| return (*val, nums2[index]))
            .collect();
        sort_arr.sort_by(|a, b| b.0.cmp(&a.0));
        let mut queries: Vec<_> = queries
            .iter()
            .enumerate()
            .map(|(index, val)| {
                return (index, val);
            })
            .collect();
        queries.sort_by(|a, b| b.1[0].cmp(&a.1[0]));

        let mut j = 0;
        let mut stack: Vec<(i32, i32)> = vec![];

        fn binary_search(target: i32, stack: &Vec<(i32, i32)>) -> usize {
            let mut l: i32 = 0;
            let mut r: i32 = stack.len() as i32 - 1;
            while l < r {
                let mid = (l + r) >> 1;
                if stack[mid as usize].0 >= target {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            l as usize
        }

        for query in queries {
            let index = query.0;
            let x = query.1[0];
            let y = query.1[1];
            while j < sort_arr.len() && sort_arr[j].0 >= x {
                while stack.len() > 0 && stack.last().unwrap().1 <= sort_arr[j].0 + sort_arr[j].1 {
                    stack.pop();
                }
                if stack.len() == 0 || sort_arr[j].1 >= stack.last().unwrap().0 {
                    stack.push((sort_arr[j].1, sort_arr[j].0 + sort_arr[j].1));
                }
                j += 1;
            }
            let k = binary_search(y, &stack);
            if k == stack.len() || stack[k].0 < y {
                ans[index] = -1;
            } else {
                ans[index] = stack[k].1;
            }
        }
        ans
    }
}
