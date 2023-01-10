const sumAll = function(start, end) {
    if(start <= -1 || end <= -1) return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    let sum = 0;
    if(start > end) {
        end = start + end;
        start = end-start;
        end = end - start;
    }
    let i = start;
    while(i<=end) {
        sum+=i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
