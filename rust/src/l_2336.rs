use std::{
    cmp::Reverse,
    collections::{BinaryHeap, HashSet},
};

struct SmallestInfiniteSet {
    cur_max: i32,
    q: BinaryHeap<Reverse<i32>>,
    set: HashSet<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SmallestInfiniteSet {
    fn new() -> Self {
        SmallestInfiniteSet {
            cur_max: 1,
            q: BinaryHeap::new(),
            set: HashSet::new(),
        }
    }

    fn pop_smallest(&mut self) -> i32 {
        match self.q.pop() {
            Some(result) => {
                self.set.remove(&result.0);
                result.0
            }
            None => {
                let result = self.cur_max;
                self.cur_max += 1;
                result
            }
        }
    }

    fn add_back(&mut self, num: i32) {
        if num >= self.cur_max || self.set.contains(&num) {
            return;
        } else {
            self.q.push(Reverse(num));
            self.set.insert(num);
        }
    }
}
