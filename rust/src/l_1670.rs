use std::collections::VecDeque;

struct FrontMiddleBackQueue {
    front: VecDeque<i32>,
    back: VecDeque<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FrontMiddleBackQueue {
    fn new() -> Self {
        FrontMiddleBackQueue {
            front: VecDeque::new(),
            back: VecDeque::new(),
        }
    }

    fn push_front(&mut self, val: i32) {
        self.front.push_front(val);
    }

    fn push_middle(&mut self, val: i32) {
        self.balance();
        self.front.push_back(val);
    }

    fn push_back(&mut self, val: i32) {
        self.back.push_back(val);
    }

    fn pop_front(&mut self) -> i32 {
        self.balance();
        self.front
            .pop_front()
            .unwrap_or_else(|| self.back.pop_front().unwrap_or(-1))
    }

    fn pop_middle(&mut self) -> i32 {
        self.balance();
        if (self.front.len() + self.back.len()) % 2 == 0 {
            self.front.pop_back().unwrap_or(-1)
        } else {
            self.back.pop_front().unwrap_or(-1)
        }
    }

    fn pop_back(&mut self) -> i32 {
        self.balance();
        self.back.pop_back().unwrap_or(-1)
    }

    fn balance(&mut self) {
        let num = self.front.len() + self.back.len();
        if num == 0 {
            return;
        }
        let need = num / 2;
        while self.front.len() > need {
            self.back.push_front(self.front.pop_back().unwrap());
        }
        while self.front.len() < need {
            self.front.push_back(self.back.pop_front().unwrap())
        }
    }
}
