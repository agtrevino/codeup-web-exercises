console.log("Hello from external javascript");

alert("Welcome to my website!");

var userInput = prompt("What is your favorite color?");
alert(("Great, ") + userInput + (" is my favorite color too!"));

var pricePerDAy = 3;
alert(("The cost for each rental per day wil be ") + ("$") + pricePerDAy);
var littleMermaidDaysRented = prompt("how many days will you rent The Little Mermaid?");
var brotherBearDaysRented = prompt("how many days will you rent Brother Bear?");
var HerculesDaysRented = prompt("how many days will you rent Hercules?");

var totalPrice = (parseInt(littleMermaidDaysRented)
    + parseInt(brotherBearDaysRented)
    + parseInt(HerculesDaysRented))
    * pricePerDAy;

alert("Your total price will be  $" + totalPrice.toFixed(2));


var googleHourlyPay = 400;
var amazonHourlyPay = 380;
var facebookHourlyPay = 350;

var googleHoursWorked = prompt("How many hours have you worked at Google this week?");
var amazonHoursWorked = prompt("How many hours have you worked at Amazon this week?");
var facebookHoursWorked = prompt("How many hours have you worked at Facebook this week?");

var totalPay = parseInt(googleHoursWorked*googleHourlyPay)
    + parseInt(amazonHoursWorked*amazonHourlyPay)
    + parseInt(facebookHoursWorked*facebookHourlyPay);

alert("Your total pay for this week is $" + totalPay.toFixed(2));

var classNotFull = confirm("Does the class have space?")
var noScheduleConflict = confirm("Does this class work with your schedule?")

var canEnroll = noScheduleConflict && classNotFull;

alert("it is " + canEnroll + " that you can enroll (lol)");

var numberOfItemsForOffer = 2;
var numberOfItemsPurchased = prompt("How many items have you purchased?");
var offerNotExpired = confirm("Is the offer still valid?");
var premiumMemberStatus = confirm("Are you a Premium Member?");

var offerCanBeApplied = ((numberOfItemsPurchased >= numberOfItemsForOffer) && offerNotExpired)
    || premiumMemberStatus && offerNotExpired ;

alert("It is " + offerCanBeApplied + " that this offer can be applied");

// var username = "codeup";
// var password = "notastrongpassword";
//
// var acceptablePasswordLength = password.length;
// var acceptableUsernameLength = username.length;
//
// var passwordDoesNotIncludeUsername =;
// var passwordTrim = ;
// var usernameTrim = ;
