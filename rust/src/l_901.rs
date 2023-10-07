struct StockSpanner {
    stk: Vec<[i32; 2]>,
    cur: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockSpanner {
    fn new() -> Self {
        StockSpanner {
            stk: vec![],
            cur: 0,
        }
    }
    fn next(&mut self, price: i32) -> i32 {
        while self.stk.len() > 0 && price >= self.stk.last().unwrap()[1] {
            self.stk.pop();
        }
        self.cur += 1;
        self.stk.push([self.cur, price]);
        if self.stk.len() == 1 {
            self.cur
        } else {
            self.cur - self.stk.get(self.stk.len() - 2).unwrap()[0]
        }
    }
}

pub fn l_901_debug() {}
