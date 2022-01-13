/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let d1 = -1;
    let d2 = -1;
    nums.forEach(v=>{
        if(v>d1) {
            d2 = d1;
            d1 = v;
        }
        else if (v === d1) {
            d2 = d1;
        } else if (v > d2){
            d2 = v;
        }
    });
    if(d1 >= 2*d2) {
        let ans = 0;
        nums.some((v,index)=>{
            if(v===d1) {
                ans = index;
                return true;
            }
        });
        return ans;
    }
    return -1;
};