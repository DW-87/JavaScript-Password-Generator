// Dom Elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('result');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

// Object of gen functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generator Functions

// Gen Lowercase
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Gen Uppercase
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Gen Number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Gen Symbol
function getRandomSymbol() {
    const symbols = '!@#$^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());