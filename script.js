const display= document.getElementById("display");

let currentOperand = "";
let previousOperand = "";
let operation = null;
let showingAns = false;
let first = true;

function appendNumber(number){
    if(showingAns) clearDisplay();
    showingAns = false;
    if(number === "." && currentOperand.includes('.') ){return};
    if(number === "0" && !(currentOperand.includes('.')) && currentOperand==='0'){
        return;
    }
    else{
        currentOperand = currentOperand.toString() + number.toString();
        updateDisplay();
    }
}

function clearDisplay(){
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
}

function updateDisplay(){
    display.innerHTML = `${currentOperand}`;
}


function chooseOperation(op){
    showingAns= false;
    if (currentOperand === "") return;
    switch(op){
        case '*': 
            operation = "multiply";
            break;
        case '/':
            operation = "divide";
            break;
        case '+':
            operation = "add";
            break;
        case '-':
            operation = "subtract";
            break;
        default:
            return;
    }
    if (previousOperand !== "") {
        compute();
    }
    if(currentOperand === "" && previousOperand !== "") return;
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
}

function compute(){
    let ans = undefined;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operation){
        case "add":
            ans = (prev + current);
            break;
        case "subtract":
            ans = (prev - current);
            break;
        case "divide":
            ans = (prev / current);
            break;
        case "multiply":
            ans = (prev * current);
            break;
        default:
            return;
    }
    if(ans.toString().includes('.')){
        ans = ans.toFixed(4);
    }
    previousOperand = currentOperand.toString();
    currentOperand = ans.toString();
    showingAns = true;
    updateDisplay();
}

