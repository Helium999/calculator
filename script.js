function add(a, b) {
    sum = a + b
    return sum
}

function subtract(a, b) {
    difference = a - b
    return difference
}

function multiply(a, b) {
    product = a*b
    return product
}

function divide(a, b) {
    quotient = a/b
    return quotient
}

function truncateDecimals(number, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.trunc(number * multiplier) / multiplier;
}