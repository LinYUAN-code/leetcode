/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    // 如果不存在--那么找一个最小的
    let n = letters.length;
    if(target>=letters[n-1]) {
        return letters[0];
    }
    let l = 0;
    let r = n-1;
    while(l<r) {
        let mid = (l+r) >> 1;
        if(letters[mid]>target)r = mid;
        else l = mid + 1;
    }
    return letters[l];
};