//Nullish coalescing operator
//bad code
function printMessage(text){
    let message = text;
    if(text == null || text == undefined){
        message = 'Nothing to display';
    }
    console.log(message);
}

//good code
function printMessage2(text){
    const message = text ?? 'Nothing to display';
    console.log(message);
}

printMessage2('Hello');
printMessage2(undefined);
printMessage2(null);

//default parameter is only for undefined
function printMessage3(text = 'Nothing to display'){
    console.log(text);
}

printMessage3('Hello');
printMessage3(undefined);
printMessage3(null);

/*

nullish coalescing operator ??
leftExpr ?? rightExpr
null, undefined 일때 rightExpr가 실행됨

logical OR operator ||
leftExpr || rightExpr
leftExpr가 falsy 경우에만 rightExpr 가 실행됨

falsy
false, 0, -0, NaN, undefined, null, '', "", ``

*/
