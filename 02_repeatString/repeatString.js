const repeatString = function(stringbit, noOfTimes) {
    if(noOfTimes < 0) return "ERROR";
    let res = ''
    for(let i=0;i<noOfTimes;i++) {
        res += stringbit;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
