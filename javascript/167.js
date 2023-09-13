/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let l =0,
        r =numbers.length-1;
    while(l<r) {
        let t = numbers[l]+numbers[r];
        if(t == target) {
            return [l+1,r+1];
        }
        if (t < target) {
            l++;
        }
        if (t > target) {
            r--;
        }
    }
    return [];
};