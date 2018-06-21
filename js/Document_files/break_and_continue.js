

while (true) {
    var userNumber = prompt("Enter an odd number between 1 and 50");

    if (userNumber % 2 !== 0 && userNumber <= 50) {
        break;
    }
}
// console.log("here is an odd number: " + userNumber);
//
// console.log("Number to skip is " + userNumber);

for (var i = 1; i <= 50; i += 1){

    if (i !== parseInt(userNumber)){
        console.log("here is an odd number: " + i);
        continue;
    } else {
        console.log("SKIP THIS NUMBER: " + userNumber);
        continue;
    }

    if (i % 2 === 0){
        continue;
    }
}
