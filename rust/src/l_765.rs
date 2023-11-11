use crate::Solution;

impl Solution {
    pub fn min_swaps_couples(row: Vec<i32>) -> i32 {
        let n = row.len() / 2;
        let mut union_set = UnionSet::new(n);
        for i in (0..row.len()).step_by(2) {
            union_set.merge((row[i] / 2) as usize, (row[i + 1] / 2) as usize)
        }
        n as i32 - union_set.size()
    }
}

struct UnionSet {
    f: Vec<usize>,
}

impl UnionSet {
    fn new(n: usize) -> UnionSet {
        let mut f = vec![0; n];
        for i in 0..n {
            f[i] = i;
        }
        UnionSet { f }
    }
    fn find(&mut self, u: usize) -> usize {
        if self.f[u] != u {
            self.f[u] = self.find(self.f[u]);
        }
        self.f[u]
    }
    fn merge(&mut self, a: usize, b: usize) {
        let fa = self.find(a);
        let fb = self.find(b);
        self.f[fa] = self.find(fb);
    }
    fn size(&self) -> i32 {
        let mut ans = 0;
        for i in 0..self.f.len() {
            if self.f[i] == i {
                ans += 1;
            }
        }
        ans
    }
}
