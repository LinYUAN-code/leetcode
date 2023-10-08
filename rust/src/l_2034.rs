use std::cmp;
use std::collections::{BTreeMap, HashMap};

struct StockPrice {
    prices: BTreeMap<i32, i32>,
    timestamp_to_price: HashMap<i32, i32>,
    current_max_timestamp: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockPrice {
    fn new() -> Self {
        StockPrice {
            prices: BTreeMap::new(),
            timestamp_to_price: HashMap::new(),
            current_max_timestamp: 0,
        }
    }

    fn update(&mut self, timestamp: i32, price: i32) {
        self.current_max_timestamp = cmp::max(self.current_max_timestamp, timestamp);
        if let Some(old_value) = self.timestamp_to_price.get(&timestamp) {
            let old_num = self.prices.get_mut(old_value).unwrap();
            *old_num -= 1;
            if *old_num == 0 {
                self.prices.remove(old_value);
            }
        }
        self.timestamp_to_price.insert(timestamp, price);
        if let Some(num) = self.prices.get_mut(&price) {
            *num += 1;
        } else {
            self.prices.insert(price, 1);
        }
    }

    fn current(&self) -> i32 {
        *self
            .timestamp_to_price
            .get(&self.current_max_timestamp)
            .unwrap()
    }

    fn maximum(&mut self) -> i32 {
        *self.prices.iter().next_back().unwrap().0
    }

    fn minimum(&mut self) -> i32 {
        *self.prices.iter().next().unwrap().0
    }
}
