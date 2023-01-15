const sumAll = function(num1, num2) {
    let total = 0
    let start = 0

    if (num1 < 0 || num2 < 0){
        return 'ERROR'
    } else if (Number.isInteger(num1 + num2)){
        if (num1 > num2){
            start = num2
        }
        else{
            start = num1
        }
        for(let i = 0; i <= Math.abs(num2 - num1); i++){
            let add = start + i
            total += add
        }
        return total
    }
    return 'ERROR'

};

// Do not edit below this line
module.exports = sumAll;
