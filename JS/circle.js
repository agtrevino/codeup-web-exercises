(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var output;
            output = Math.PI * Math.pow(circle.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2
            return output; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            var output = this.getArea();
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(output));
            } else if (doRounding === false ) {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + output);
            }
        }
    };
    console.log(circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
