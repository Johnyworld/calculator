const jsNumber = document.getElementById('jsNumber');
const maxLength = 9;
let screenNum = '0';
let operatorSaved, a, b;
let isResult = false;

const sum = (operatorSaved, a, b) => {
    switch(operatorSaved) {
        case 'divide':
            a /= b;
            return a;
        case 'plus': 
            a += b;
            return a;
        case 'minus':
            a -= b;
            return a;
        case 'multiply':
            a *= b;
            return a;
    }
}

const pressNumber = () => {
    if ( isResult ) {
        b = undefined;
        isResult = false;
    }
    if ( operatorSaved && !b ) {
        screenNum = '0';
    }
    if ( screenNum.length < 9 ) {
        let currentNumber = event.currentTarget.innerHTML;
        if ( screenNum === "0" ) { 
            if ( currentNumber === "." ) screenNum += currentNumber;
            else screenNum = currentNumber;
        } 
        else { 
            screenNum += currentNumber; 
        }
        if (!operatorSaved) a = screenNum;
        else b = screenNum;
        jsNumber.innerHTML = screenNum;
        console.log("Num : ", a, b, operatorSaved, isResult);
    }
}

const sumHandler = (operator) => {
    if ( !isResult && a && b ) {
        result();
    } else {
        a = parseFloat(screenNum);
        operatorSaved = operator;
    }
    console.log("Sum : ", a, b, operatorSaved, isResult);
}

const result = (percent = false) => {
    if ( operatorSaved ) {
        if ( !isResult ) {
            if ( !b ) b = a;
            b = parseFloat(screenNum);
        }
        screenNum = sum(operatorSaved, a, b);
        a = screenNum;
        jsNumber.innerHTML = screenNum;
        isResult = true;
        console.log("Res : ", a, b, operatorSaved, isResult);
    }
}

const percent = () => {
    if ( b && !result  ) {
        screenNum = a / 100 * b;
        b = screenNum;
    } else {
        screenNum = a / 100;
        a = screenNum;
    }
    jsNumber.innerHTML = screenNum;
    console.log("Res : ", a, b, operatorSaved, isResult);
}

const ac = () => {
    screenNum = '0';
    a = undefined;
    b = undefined;
    operatorSaved = null;
    isResult = false;
    jsNumber.innerHTML = screenNum;
    console.log("AC : ", a, b, operatorSaved, isResult);
}

const inverse = () => {
    if ( !isResult && b ) {
        b = -b;
        screenNum = b;
    } else {
        a = -a;
        screenNum = a;
    } 
    jsNumber.innerHTML = screenNum;
    console.log("Res : ", a, b, operatorSaved, isResult);
}