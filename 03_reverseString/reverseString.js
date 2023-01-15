const reverseString = function(str) {
    let backwards = ''
    for (let i = str.length -1; i >= 0; i--){
        backwards += str[i]
    }
    return backwards
};

// Do not edit below this line
module.exports = reverseString;
