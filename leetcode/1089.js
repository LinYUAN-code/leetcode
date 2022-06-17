/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    // 遍历一次是做不到的--因为会覆盖后面的元素
    // 所以我们从后向前覆盖 hhhh
    let n = arr.length;
    let l = 0;
    let r = -1;
    while(true) {
        if(!arr[l]) {
            r += 2;
        } else {
            r += 1;
        }
        if(r>=n-1) {
            break;
        }
        l++;
    }
    while(l>=0) {
        if(!arr[l]) {
            if(r===n) {
                arr[r-1] = 0;
            } else {
                arr[r] = arr[r-1] = 0;
            }
            r -= 2;
        } else {
            arr[r] = arr[l];
            r -= 1;
        }
        l--;
    }
    return arr;
};