/**
 * @param {number[]} strength
 * @return {number}
 */
 var totalStrength = function(strength) {
     /*
        首先考虑所有非空连续子数组的和怎么求？
        f[i] 表示以i为结尾的所有的连续子数组的和
        f[i+1] = (i+1)*a[i] + f[i]
        
        但是这道题目加上了一个限制条件--还必须乘以所有子数组中的最小值
        如果数组时单调递减的话我们的计算过程只需要改成
        f[i+1] = (f[i] + i*a[i])/a[i]*a[i+1] + a[i+1]*a[i+1]

        但是显然我们的运气不会这么好

        比如 1 2 4 3
        对于f[3]来说
        [2,3] 区间内的连续子数组的最小值就是自身---答案很容易算出来 --》我们可以算出[2,3]区间内所有的连续子数组的和然后乘以a[3]
        前面剩下的值 2 * (2+4+3)
                    1 * (1+2+4+3)

        这个思路想不下去了


        看题解原来枚举每个值最为区间最小值的思路是可行的无语...

     */
};