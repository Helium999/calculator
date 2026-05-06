function add(a, b) {
    const sum = Number(a) + Number(b)
    return sum
}

function subtract(a, b) {
    const difference = Number(a) - Number(b)
    return difference
}

function multiply(a, b) {
    const product = Number(a)*Number(b)
    return product
}

function divide(a, b) {
    const quotient = Number(a)/Number(b)
    return quotient
}

function truncateDecimals(number, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.trunc(number * multiplier) / multiplier;
}

let firstNum = ''
let secondNum = ''
let operator = ''

function handleInput(key) {
        const digits = ['1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '0']
        const operators = ['+', '-', '*', '/']

        if(digits.includes(key) && operator === '') {
            firstNum = firstNum.concat(key)
        }
        else if(operators.includes(key) && firstNum !== '' && operator === '') {
            operator = key
        }
        else if(digits.includes(key) && operator !== '') {
            secondNum = secondNum.concat(key)
        }
        else if(key === 'Shift') {}
        else if(key === '.') {
            if(firstNum === '') {
                firstNum = '0.'
            }
            else if(!firstNum.includes('.') && operator === '') {
                firstNum = firstNum.concat(key)
            }
            else if(secondNum === '') {
                secondNum = '0.'
            }
            else if(!secondNum.includes('.') && operator !== '') {
                secondNum = secondNum.concat(key)
            }
            else {
                console.log("Invalid")
            }
        }
        else if(key === 'cls') {
            firstNum = ''
            secondNum = ''
            operator = ''
        }
        else if(key === "Backspace") {
            if(operator === '') {
                firstNum = firstNum.slice(0, -1);
            }
            else {
                if(secondNum === '') {
                    operator = ''
                }
                else {
                    secondNum = secondNum.slice(0, -1);
                }
            }
        }

        else {
            console.log("Invalid")
        }
}

document.addEventListener("keydown", (event) => {
    handleInput(event.key);
});

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.dataset.key);
    });
});

function compute(firstNum, operator, secondNum) {
    let result;
    if(operator === '+') {
        result = add(firstNum, secondNum)
    }
    else if(operator === '-') {
        result = subtract(firstNum, secondNum)
    }
    else if(operator === '*') {
        result = multiply(firstNum, secondNum)
    }
    else {
        result = divide(firstNum, secondNum)
    }
    return result
}

function displayResult() {
    outputPanel = document.getElementById("outputPanel")
    outputPanel.innerText = compute(firstNum, operator, secondNum)
    
    firstNum = result.toString();
    secondNum = '';
    operator = '';
}

document.addEventListener("keyup", (event) => {
    if(event.key === 'Enter') {
        displayResult()
    }
})
