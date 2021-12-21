/**
 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
    let year = parseInt(date.substr(0,4));
    let month = parseInt(date.substr(5,2));
    let day = parseInt(date.substr(8,2));
    // console.log(year,month,day);
    let num = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if((year%4===0 && year%100!==0) || (year%400===0)) num[1]++;
    let ans = 0;
    for(let i=0;i<month-1;i++)
        ans+=num[i];
    ans+=day;
    return ans;
};