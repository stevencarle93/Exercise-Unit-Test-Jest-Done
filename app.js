// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // Japan Yen
    "USD": 1.2, // US Dollar
    "GBP": 0.8, // British pound
}

let oneYenIs = {
    "EUR": 0.0078186082877248, // Euro
    "USD": 0.01, // US dollar
    "GBP": 0.01, // British Pound
}

let oneDollarIs = {
    "EUR": 0.83333, // Euro
    "JPY": 138, // Japan Yen
    "GBP": 0.83, // British Pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yens
    let valueInYen = valueInDollar * 138;
    //return the Yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pounds
    let valueInPound = parseInt(valueInYen * 0.006032);
    //return the Pound value
    return valueInPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };