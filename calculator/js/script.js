var result = "";
var memory = [];

function onLoad() {
    document.calculator.visor.value = '0';
    document.calculator.visor2.value = 'Result: 0';
}

function zero() {
    result += '0';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function one() {
    result += '1';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function two() {
    result += '2';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function three() {
    result += '3';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function four() {
    result += '4';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function five() {
    result += '5';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function six() {
    result += '6';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function seven() {
    result += '7';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function eight() {
    result += '8';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function nine() {
    result += '9';
    document.calculator.visor.value = result;
    document.calculator.visor2.value = 'Result: ' + eval(result);
}

function operationSum() {
    result += ' + ';
    document.calculator.visor.value = result;
}

function operationSub() {
    result += ' - ';
    document.calculator.visor.value = result;
}

function operationMul() {
    result += ' * ';
    document.calculator.visor.value = result;
}

function operationDiv() {
    result += ' / ';
    document.calculator.visor.value = result;
}

function operationClr() {
    document.getElementById('calculator').reset();
    document.calculator.visor.value = '0';
    document.calculator.visor2.value = 'Result: 0';
    result = "";
}

function operationComma() {
    result += ','
}

function memoryPlus() {
    memory.push(eval(result));
}

function memoryMinus() {
    memory.pop();
}

function memoryR() {
    document.calculator.visor.value = result + memory[memory.length - 1];
    document.calculator.visor2.value = 'Result: ' + eval(result + memory[memory.length - 1]);
    result += memory[memory.length - 1];
}

function resultado() {
    document.calculator.visor.value = eval(result);
    result = eval(result);
}