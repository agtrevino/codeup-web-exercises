// var i = 2;
//
// while (i < 65536){
//     console.log(i + i);
//     i += i;
// }
//

// cones to sell
var allCones = Math.floor(Math.random() * 50) + 50;
//cones being bought




var i = 1;

while(i < 4 ){
    i = i * 2;
    console.log("res: ", i);
}

do {
    console.log("start of the day I have " + allCones + " left.");
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        console.log("I sold " + conesToSell);
        allCones = allCones - conesToSell;
    } else if (allCones === 0) {
        console.log("I can go home.")
    } else {
            console.log("I dont have " + conesToSell + " cones left to sell");
        }

} while (allCones !== 0);
