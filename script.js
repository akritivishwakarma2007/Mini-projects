let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        expression = value;
    } else {
        expression += value;
    }
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.innerText = expression || '0';
}

function calculatePercentage() {
    try {
        let result = eval(expression) / 100;
        result = Math.round(result * 1000000) / 1000000;
        display.innerText = result;
        expression = result.toString();
    } catch {
        display.innerText = 'Error';
        expression = '';
    }
}

function calculateRoot() {
    try {
        let result = Math.sqrt(eval(expression));
        result = Math.round(result * 1000000) / 1000000;
        display.innerText = result;
        expression = result.toString();
    } catch {
        display.innerText = 'Error';
        expression = '';
    }
}

function calculate() {
    try {
        let evalExpression = expression.replace(/×/g, '*');
        let result = eval(evalExpression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        result = Math.round(result * 1000000) / 1000000;
        display.innerText = result;
        expression = result.toString();
    } catch {
        display.innerText = 'Error';
        expression = '';
    }
}
