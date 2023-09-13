/**
 * @param {number[]} balance
 */
 var Bank = function(balance) {
    this.b = balance;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    account1 -= 1;
    account2 -= 1;
    if(account2<0 || account1<0 || account1>=this.b.length || account2>=this.b.length)return false;
    if(this.b[account1]<money)return false;
    this.b[account1] -= money;
    this.b[account2] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    account -= 1;
    if(account<0 || account>=this.b.length)return false;
    this.b[account] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    account -= 1;
    if(account<0 || account>=this.b.length)return false;
    if(this.b[account]<money)return false;
    this.b[account] -= money;
    return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */