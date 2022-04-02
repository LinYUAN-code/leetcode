/**
 * @param {string} password
 * @return {number}
 */
 var strongPasswordChecker = function(password) {
    /*
        题目要求：
            1.长度要求
            2.必须出现小写字母 大写字母 和一个数字
            3.同一字符不能连续出现三次

            第三个要求比较有趣,同一个字符不能出现三次！
            比如一个字符 aaa --> 我们的可选操作为
            删除： 当当前字符数量大于20的时候优先选者
            替换： 当当前字符组成不符合条件二的时候可以优先选择
            添加： 当当前字符数量小于6的时候优先选择

        len = password.length;
        
        1. len < 6
            1.len<=4    我们可以添加补全字符就完事了---肯定能构造出可行解
            2.len===5   首先统计--需要的missing_type两个 || 看是否5个字符都相同（其实上一个满足这个肯定满足） -- 2次操作--否则1次

            ans = Math.max(missing_type,6-len)

        2. 6<=len<=20
            我们不需要删除字符--当不需要删除字符的时候对于连续三个字符来说替换是操作数最少的--为Math.floor(连续长度/3)
            同时统计需要的missing_type和 替换的操作数--最后统计出最终的答案

            Math.max(missing_type，替换操作次数)

        3. len > 20
            此时我们需要删除字符--情况变得复杂了
            对于每一个连续的字符来说--设他们的长度为len
             - len%3===0 我们可以删除一个字符--让后面所需的替换操作次数减一
             - len%3===1 我们可以删除两个字符--让后面所需的替换操作次数减一
             - len%3===2 我们可以删除三个字符--让后面所需的替换操作次数减一
            

            于是乎---我们的delete操作可以用来减少替换操作的个数--答案开始明朗了
            one , two , three 分别代表上面的模的三种情况

            change -= Math.min(one,delete)
            change -= min(max(delete - one, 0), two * 2) / 2
            change -= max(delete - one - 2 * two, 0) / 3

            ans = delete + Math.max(change,missing_type);
    */

    let len = password.length;

    let missing_type = 3;
    let number = lower = higher = false;
    let pre = "+";
    let num = 0;
    let one = two = change = 0;
    for(let x of password) {
        if(!number && !isNaN(parseInt(x))) {
            number = true;
            missing_type--;
        }else if(!lower && x.toLocaleLowerCase()===x) {
            lower = true;
            missing_type--;
        }else if(!higher && x.toUpperCase()===x) {
            higher = true;
            missing_type--;
        }
        if(pre !== x) {
            if(num>=3) {
                change += Math.floor(num/3);
                if(num%3===0)one++;
                if(num%3===1)two++;
            }
            num = 1;
            pre = x;
        } else {
            num++;
        }
    }
    if(num>=3) {
        change += Math.floor(num/3);
        if(num%3===0)one++;
        if(num%3===1)two++;
    }
    if(len<6) {
        return Math.max(missing_type,6-len);
    }   
    if(len>=6&&len<=20) {
        return Math.max(missing_type,change);
    }
    let de = len - 20;
    // console.log(change,de,missing_type,one,two);
    change -= Math.min(one,de);
    change -= Math.floor(Math.min(Math.max(de-one,0),two*2)/2);
    change -= Math.floor(Math.max(de-one-2*two,0)/3);
    // console.log(change,de,missing_type,one,two);

    return de + Math.max(change,missing_type);
};