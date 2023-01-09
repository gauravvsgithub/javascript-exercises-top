const removeFromArray = function(arr, ...keys) {
    for(const key of keys) {
        while(arr.indexOf(key) > -1) {
        arr.splice(arr.indexOf(key), 1);
    }
    }
    return arr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
