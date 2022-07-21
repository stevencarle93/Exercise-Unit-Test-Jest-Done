// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 138 Yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const Yens = fromDollarToYen(5)

    // if 1 dollar are 138 Yens, then 5 dollars should be (5 * 138)
    const expected = 5 * 138; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(690); //1 dollar are 138 Yens, then 5 dollars should be = (5 * 138)
})

test("One Yen should be 0.006032 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const Pounds = fromYenToPound(2490)

    // if 1 Yen are 0.01 Pounds, then 2500 Yens should be (2500 * 0.006032)
    const expected = parseInt(2490 * 0.006032); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(2490)).toBe(15); //1 Yen are 0.006032 Pounds, then 2490 Yens should be = (2490 * 0.006032)
})