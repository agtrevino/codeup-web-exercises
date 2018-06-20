var sanAntonio = "San Antonio";
var austin = "Austin";
var eaglePass = "Eagle Pass";
var houston = "Houston"
;
var texasCities = [sanAntonio, austin, eaglePass, houston];

for (var i = 0; i < texasCities.length; i++){
    console.log(texasCities[i]);

}

function greet(name) {
    console.log("Welcome to " + name + "!");

}

texasCities.forEach(greet);
