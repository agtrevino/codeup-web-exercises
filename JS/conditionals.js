(function () {


"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var userInputNumber = confirm("would you like to enter a number?");
//
// if (userInputNumber) {
//
//     var userNumber = prompt("What will the number be?");
//
//     if (isNaN(userNumber)) {
//
//         alert("That is not a number!")
//
//     } else {
//
//         if ((userNumber % 2) === 0) {
//             alert("Your number is even");
//         } else {
//             alert("Your number is odd");
//
//         }
//
//         alert("your number plus 100 is " + ((parseInt(userNumber)) + 100 ));
//         if (userNumber < 0) {
//
//             alert("Your number is a negative number");
//         } else {
//
//             alert("Your number is a positive number");
//         }
//     }
// } else {
//     alert("Fine, be that way..")
// }




/* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

//
//  function analyzeColor(colorName) {
//
//      if (colorName === "blue") {
//          console.log(colorName + " is the color of the sky.");
//
//      } else if (colorName === "red") {
//          console.log("Strawberries are " + colorName + ".")
//
//      } else {
//          console.log("I don't know anything about " + colorName + ".")
//      }
//
//     }
//
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

    // console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(colorName) {
//
//     switch (colorName) {
//         case "blue"
//         : console.log(colorName + " is the color of the sky.");
//             break;
//
//
//         case "red"
//         : console.log("Strawberries are " + colorName + ".");
//
//         default
//         :    console.log("I don't know anything about " + colorName + ".");
// }
//
// }
//
//     console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var color = prompt("Submit a color");
//
// function analyzeColor(colorName) {
//
//     switch (color) {
//         case "blue"
//         : alert(colorName + " is the color of the sky.");
//             break;
//         case "red"
//         : alert("Strawberries are " + colorName + ".");
//         break;
//
//         default
//         : alert("I don't know anything about " + colorName + ".");
//         break;
//             }
//         }
//         console.log(analyzeColor(color));



/* ########################################################################## */


    /**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

    // var userLuckyNumber = prompt("What is your lucky number?");
    // var userTotalAmount = prompt("What is your amount total?");

    function calculateTotal(luckyNumber, totalAmount) {
        var discountedPrice;

        switch (luckyNumber) {
            case 0:
                discountedPrice = totalAmount - ((0 / 100) * totalAmount);
                break;
            case 1:
                discountedPrice = totalAmount - ((10 / 100) * totalAmount);
                break;
            case 2:

              discountedPrice  = totalAmount - ((25 / 100) * totalAmount);
                break;
            case 3:
                discountedPrice = totalAmount - ((35 / 100) * totalAmount);
                break;
            case 4:
                discountedPrice = totalAmount - ((50 / 100) * totalAmount);
                break;
            case 5:
                discountedPrice = totalAmount - ((100 / 100) * totalAmount);
                break;
        }

        return discountedPrice;
    }
    // alert("your total is $" + calculateTotal(parseInt(userLuckyNumber), parseInt(userTotalAmount)).toFixed(2));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var userTotalAmount = prompt("What is your total amount?");

alert("Your original price is " + parseInt(userTotalAmount).toFixed(2));
alert("Your Lucky Number is #" + luckyNumber
+ " and your discounted total is now $" + calculateTotal(luckyNumber, parseInt(userTotalAmount)).toFixed(2));


})()