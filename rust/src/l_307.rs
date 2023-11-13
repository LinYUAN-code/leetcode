struct NumArray {
    f: Vec<i32>,
}

fn low_bit(n: i32) -> i32 {
    n & -n
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {
    fn new(nums: Vec<i32>) -> Self {
        let mut num_array = NumArray {
            f: vec![0; nums.len()],
        };
        for i in 0..nums.len() {
            num_array.update_add(i as i32, nums[i]);
        }
        num_array
    }

    fn update_add(&mut self, index: i32, val: i32) {
        let mut i = index as usize + 1;
        while i <= self.f.len() {
            self.f[i - 1] += val;
            i += low_bit(i as i32) as usize;
        }
    }

    fn update(&mut self, index: i32, val: i32) {
        let new_val = val - self.sum(index + 1) + self.sum(index);
        self.update_add(index, new_val);
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        self.sum(right + 1) - self.sum(left)
    }
    fn sum(&self, index: i32) -> i32 {
        let mut ans = 0;
        let mut i = index;
        while i > 0 {
            ans += self.f[i as usize - 1];
            i -= low_bit(i);
        }
        ans
    }
}
