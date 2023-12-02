use crate::Solution;

impl Solution {
    pub fn car_pooling(trips: Vec<Vec<i32>>, capacity: i32) -> bool {
        let mut arr = Vec::with_capacity(trips.len() * 2);
        for a in trips {
            arr.push((a[1], a[0], 1));
            arr.push((a[2], a[0], -1));
        }
        arr.sort_by(|a, b| {
            if a.0 != b.0 {
                a.0.cmp(&b.0)
            } else {
                a.2.cmp(&b.2)
            }
        });

        let mut num = 0;
        for op in arr {
            num = num + op.1 * op.2;
            if num > capacity {
                return false;
            }
        }
        true
    }
}
