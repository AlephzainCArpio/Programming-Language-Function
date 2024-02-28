

// let firstName = "Jamal";
// let lastName = "Polo";


// function greet(firstName,lastName){
//     console.log("hello "+ firstName + " " + lastName);
// }


// greet(firstName, lastName);


// const num1 = 20;
// const num2 = 30;

// function calculateSumOfTwoNumbers(num1, num2){
//    return num1 + num2;
// }

// const result1 = calculateSumOfTwoNumbers(num1, num2);
// const result2 = calculateSumOfTwoNumbers(15, 22);
// const result3 = calculateSumOfTwoNumbers(8, 10);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result1 + result2 + result3);


// const calculateSumOfTwoNumbers = (num1, num2) => {
//    return num1 + num2;
// };

// console.log(calculateSumOfTwoNumbers(num1, num2));



// let num1 = 3;
// let num2 = 2;
// let num3 = 2;


// function combine(num1, num2, num3){
//    return num1*num2/num3;
// }
    
// const result = combine(num1, num2, num3);
// console.log(result);

const cart = [
    {productName: "t-shirt", price: 20},
    {productName: "ak47", price: 7000},
    {productName: "c4", price: 1200},
    {productName: "smoke grenade", price: 500},
];



const calculateTotal = (cart) => {
    let totalPrice = 0;
    for(let product of cart){
        totalPrice+=product.price;
    }
    return totalPrice;
}


const totalPrice = calculateTotal(cart);
console.log(totalPrice);