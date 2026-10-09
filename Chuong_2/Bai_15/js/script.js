const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    expressionDiv.innerText = currentInput;
}

function appendParenthesis() {
    let openCount = (currentInput.match(/\(/g) || []).length;
    let closeCount = (currentInput.match(/\)/g) || []).length;
    
    if (openCount === closeCount || currentInput.endsWith('(') || /[\+\-\×\÷]$/.test(currentInput)) {
        currentInput += '(';
    } else {
        currentInput += ')';
    }
    expressionDiv.innerText = currentInput;
}

function clearAll() {
    currentInput = '';
    expressionDiv.innerText = '';
    resultDiv.innerText = '0';
}

function calculate() {
    try {
        if (!currentInput) return;
        
        let formattedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        
        let evalResult = eval(formattedInput);
        
        if (evalResult === Infinity || isNaN(evalResult)) {
            resultDiv.innerText = 'Lỗi';
        } else {
            resultDiv.innerText = Number(evalResult.toFixed(8));
        }
    } catch (error) {
        resultDiv.innerText = 'Lỗi';
    }
}
