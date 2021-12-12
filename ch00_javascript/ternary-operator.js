//Ternary Operator
//Bad Code
function getResult(score){
    let result;
    if(score > 5) {
        result = 'good';
    } else if (score <= 5) {
        result = 'bad';
    }
    return result;
}

//good Code
function getResult2(score){
    return score > 5 ? 'good' : 'bad';
}