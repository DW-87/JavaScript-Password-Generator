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