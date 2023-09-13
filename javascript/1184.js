/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
 var distanceBetweenBusStops = function(distance, start, destination) {
    if(start>destination) {
        [start,destination] = [destination,start];
    }
    let n = distance.length;
    let ans = 0;
    let tmp = 0;
    for(let i=start;i<destination;i++) {
        tmp += distance[i];
    }
    ans = tmp;
    tmp = 0;
    while(destination!==start) {
        tmp += distance[destination];
        destination = (destination+1)%n;
    }
    ans = Math.min(ans,tmp);
    return ans;
};