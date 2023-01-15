const repeatString = function(string, num) {
    words = []
    if(num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++){
        words.push(string)
    }
    return words.join('')
};

// Do not edit below this line
module.exports = repeatString;
