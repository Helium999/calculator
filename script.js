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

document.addEventListener("keydown", event => {
        const digits = ['1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '0']
        const operators = ['+', '-', '*', '/']

        if(digits.includes(event.key) && operator === '') {
            firstNum = firstNum.concat(event.key)
        }
        else if(operators.includes(event.key) && firstNum !== '' && operator === '') {
            operator = operator.concat(event.key)
        }
        else if(digits.includes(event.key) && operators != '') {
            secondNum = secondNum.concat(event.key)
        }
        else if(event.key === 'Shift') {

        }
        else {
            console.log("Invalid")
        }
})