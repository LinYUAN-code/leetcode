/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    let ans = 0;
    let num = [];
    num[0] = num[1] = 0;
    for(let x of students) {
        num[x]++;    
    }
    for(let x of sandwiches) {
        if(!num[x])break;
        ans++;
        num[x]--;
    }
    return students.length - ans;
};