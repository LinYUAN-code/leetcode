use std::collections::HashSet;

use crate::Solution;

impl Solution {
    pub fn smallest_missing_value_subtree(parents: Vec<i32>, nums: Vec<i32>) -> Vec<i32> {
        let n = parents.len();
        let mut node_set: HashSet<i32> = HashSet::new();
        let mut sons: Vec<Vec<i32>> = vec![vec![]; n];
        for i in 0..n {
            if parents[i] == -1 {
                continue;
            }
            sons[parents[i] as usize].push(i as i32);
        }
        let mut vis: Vec<bool> = vec![false; n];
        fn dfs(
            u: usize,
            vis: &mut Vec<bool>,
            node_set: &mut HashSet<i32>,
            sons: &Vec<Vec<i32>>,
            nums: &Vec<i32>,
        ) {
            if vis[u] {
                return;
            }
            vis[u] = true;
            node_set.insert(nums[u]);
            for son in sons[u].iter() {
                dfs(*son as usize, vis, node_set, sons, nums);
            }
        }

        let mut index = 1;
        let mut ans = vec![1; n];
        let mut pos: i32 = -1;

        for i in 0..n {
            if nums[i] == 1 {
                pos = i as i32;
                break;
            }
        }
        if pos == -1 {
            return ans;
        }

        while pos != -1 {
            dfs(pos as usize, &mut vis, &mut node_set, &sons, &nums);
            while node_set.contains(&index) {
                index += 1;
            }
            ans[pos as usize] = index;
            pos = parents[pos as usize];
        }
        ans
    }
}
