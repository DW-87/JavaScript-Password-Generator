// Generator Functions

// Gen Lowercase
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLower());