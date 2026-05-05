function add(a, b) {
    const sum = a + b
    return sum
}

function subtract(a, b) {
    const difference = a - b
    return difference
}

function multiply(a, b) {
    const product = a*b
    return product
}

function divide(a, b) {
    const quotient = a/b
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
        else if(digits.includes(key) && operator != '') {
            secondNum = secondNum.concat(key)
        }
        else if(key === 'Shift') {

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